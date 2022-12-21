import MainLayout from "../components/layout/MainLayout";
import { Divider, Grid } from "@mui/material";
import CommonTable from "../components/Table";
import {useEffect, useState} from "react";
import {cardService} from "../services/card.service";


const CardPage = () => {
    const [data, setData] = useState([]);

    const getCards = async () => {
        try {
            const res = await cardService.getCards();
            console.log(res)
            setData(res.data.items);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getCards();
    }, []);

    const headers = [
        {
            key: 'name',
            text: 'Name'
        },
        {
            key: 'number',
            text: 'Card Number'
        },
        {
            key: 'description',
            text: 'Description'
        }
    ];

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
        setSelectedIdList(newSelected);
    }

    const onClickRow = (row: any) => {
        console.log(row);
    }

    return (
            <Grid container>
                <Grid item xs={12} style={{fontSize: '32px', fontWeight: 'bold'}}>
                    Card
                </Grid>
                <hr style={{color: '#fff', width: '100%', margin: '15px 0'}}/>
                <Grid item xs={12}>
                    Filter
                </Grid>
                <Grid item xs={12} style={{marginTop: '15px'}}>
                    <CommonTable
                        type={'card'}
                        headers={headers}
                        data={data}
                        onClickRow={onClickRow}
                        selectedIdList={selectedIdList}
                        handleClickCheckbox={handleCheckbox}
                        handleClickHeaderCheckbox={handleHeaderCheckbox}
                    />
                </Grid>
            </Grid>
    )
};

export default CardPage
