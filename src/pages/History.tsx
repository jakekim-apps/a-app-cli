import MainLayout from "../components/layout/MainLayout";
import {Button, Divider, Grid, Paper} from "@mui/material";
import CommonTable from "../components/Table";
import {useEffect, useState} from "react";
import {cardService} from "../services/card.service";
import {accountService} from "../services/account.service";
import {historyService} from "../services/history.service";
import {categoryService} from "../services/category.service";
import HistoryEditor from "../components/pages/history/HistoryEditor";


const HistoryPage = () => {
    const [data, setData] = useState([]);

    const [cards, setCards] = useState([]);
    const [accounts, setAccounts] = useState([]);
    const [categories, setCategories] = useState([]);

    const getHistories = async () => {
        try {
            const res = await historyService.getHistories();
            setData(res.data.items);
        } catch (e) {
            console.log(e);
        }
    }

    const getCards = async () => {
        try {
            const res = await cardService.getCards();
            setCards(res.data.items);
        } catch (e) {
            console.log(e);
        }
    };

    const getAccounts = async () => {
        try {
            const res = await accountService.getAccounts();
            setAccounts(res.data.items);
        } catch (e) {
            console.log(e);
        }
    };

    const getCategories = async () => {
        try {
            const res = await categoryService.getCategories();
            setCategories(res.data.items);
        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => {
        getCards();
        getAccounts();
        getCategories();
        getHistories();
    }, []);

    const headers = [
        {
            key: 'date',
            text: 'Date'
        },
        {
            key: 'amount',
            text: 'Amount'
        },
        {
            key: 'type',
            text: 'Type'
        },
        {
            key: 'targetId',
            text: 'Type Name'
        },
        {
            key: 'categoryId',
            text: 'Category'
        },
        {
            key: 'description',
            text: 'Description'
        },

    ];



    const onClickRow = (row: any) => {
        console.log(row);
    }

    const [drawer, setDrawer] = useState(false)

    const openDrawer = () => {
        setDrawer(true)
    }

    const closeDrawer = () => {
        setDrawer(false);
    }


    const [selectedIdList, setSelectedIdList] = useState<string[]>([]);

    const handleHeaderCheckbox = (e: any) => {
        if (e.target.checked) {
            const selectedIdList: string[] = data.map((d: any) => d._id);
            setSelectedIdList(selectedIdList);
        } else {
            setSelectedIdList([]);
        }
    }

    const handleCheckbox = (e: any, id: string) => {
        const selectedIndex = selectedIdList.indexOf(id);
        let newSelected: string[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedIdList, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedIdList.slice(1));
        } else if (selectedIndex === selectedIdList.length - 1) {
            newSelected = newSelected.concat(selectedIdList.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedIdList.slice(0, selectedIndex),
                selectedIdList.slice(selectedIndex + 1),
            );
        }
        console.log(newSelected)
        setSelectedIdList(newSelected);
    }

    return (
        <Grid container>
            <Grid item xs={12} style={{fontSize: '32px', fontWeight: 'bold', display: 'flex'}}>
                History
                <div style={{marginLeft: 'auto'}}>
                    <Button variant={'outlined'} onClick={openDrawer}>Button</Button>
                </div>
            </Grid>
            <hr style={{color: '#fff', width: '100%', margin: '15px 0'}}/>
            <Grid item xs={12}>
                <Paper elevation={1}>
                    <Grid container>
                        <Grid item>
                            <HistoryEditor />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <hr style={{color: '#fff', width: '100%', margin: '15px 0'}}/>
            <Grid item xs={12}>
                Filter
            </Grid>
            <Grid item xs={12} style={{marginTop: '15px'}}>
                <CommonTable
                    type={'history'}
                    headers={headers}
                    data={data}
                    onClickRow={onClickRow}
                    selectedIdList={selectedIdList}
                    handleClickCheckbox={handleCheckbox}
                    handleClickHeaderCheckbox={handleHeaderCheckbox}
                />
            </Grid>

            {
                drawer &&
                    <HistoryEditor
                        open={drawer}
                        onClose={closeDrawer}
                        accounts={accounts}
                        cards={cards}
                        categories={categories}
                    />
            }

        </Grid>
    )
};

export default HistoryPage
