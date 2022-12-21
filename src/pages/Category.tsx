import MainLayout from "../components/layout/MainLayout";
import { Button, Divider, Grid} from "@mui/material";
import CommonTable from "../components/Table";
import {useEffect, useState} from "react";
import {categoryService} from "../services/category.service";


const CategoryPage = () => {
    console.log(';123123')
    const [data, setData] = useState([]);

    const getCategories = async () => {
        try {
            const res = await categoryService.getCategories();
            console.log(res)
            setData(res.data.items);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        console.log('123')
        getCategories();
    }, []);

    const headers = [
        {
            key: 'name',
            text: 'name'
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

    // modal

    return (
            <Grid container>
                <Grid item xs={12} style={{fontSize: '32px', fontWeight: 'bold', display: 'flex'}}>
                            Category
                        <div style={{marginLeft: 'auto'}}>
                            <Button variant={'outlined'}>Button</Button>
                        </div>

                </Grid>
                <hr style={{color: '#fff', width: '100%', margin: '15px 0'}}/>
                <Grid item xs={12}>
                    Filter
                </Grid>
                <Grid item xs={12} style={{marginTop: '15px'}}>
                    <CommonTable
                        type={'category'}
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

export default CategoryPage
