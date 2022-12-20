import MainLayout from "../components/layout/MainLayout";
import { Button, Divider, Grid} from "@mui/material";
import CommonTable from "../components/Table";
import {useEffect, useState} from "react";
import {categoryService} from "../services/category.service";


const CategoryPage = () => {
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


    const onClickRow = (row: any) => {
        console.log(row);
    }

    // modal

    return (
        <MainLayout>
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
                    />
                </Grid>
            </Grid>


        </MainLayout>
    )
};

export default CategoryPage
