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



    const onClickRow = (row: any) => {
        console.log(row);
    }

    return (
        <MainLayout>
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
                    />
                </Grid>
            </Grid>
        </MainLayout>
    )
};

export default CardPage
