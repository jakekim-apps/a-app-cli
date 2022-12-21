import {Button, Drawer, Grid, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import Selector from "../../common/Selector";
import moment from "moment";
import SelectorByGroup from "../../common/SelectorByGroup";

const HistoryEditor = (props: any) => {

    const [accData, setAccData] = useState([]);

    const [type, setType] = useState('0');

    const typeData = [
        {
            _id: '0',
            name: 'R'
        },
        {
            _id: '1',
            name: 'S'
        },
    ]

    const handleChangeType = (e: any) => {
        setType(e.target.value);
    }

    const [date, setDate] = useState(moment().format('YYYY-MM-DD'))
    const handleChangeDate = (e: any) => {
        setDate(e.target.value)
    }


    const makeTargetData = (accounts: any[any], cards: any[any]) => {
        let targetData = [
            {
                name: 'Accounts',
                data: []
            },
            {
                name: 'Cards',
                data: []
            }
        ];
        if (accounts && accounts.length > 0) {
            targetData[0].data = accounts;
        }
        if (cards && cards.length > 0) {
            targetData[1].data = cards;
        }
        console.log(targetData)
        return targetData;
    }

    const [targetData, setTargetData]: any[any] = useState([]);
    const [target, setTarget] = useState('');
    const handleChangeTarget = (e: any) => {
        setTarget(e.target.value);
    }
    useEffect(() => {
        setTargetData(makeTargetData(props.accounts, props.cards));
    }, [props.cards, props.accounts])


    const [category, setCategory] = useState(null);
    const handleChangeCategory = (e: any) => {
        setCategory(e.target.value)
    }

    const [amount, setAmount] = useState(0);
    const handleChangeAmount = (e: any) => {
        setAmount(e.target.value)
    }

    const [description, setDescription] = useState(null);
    const handleChangeDescription = (e: any) => {
        setDescription(e.target.value)
    }


    const getTargetType = (targetId: string) => {

        return 0
    }

    const handleSave = () => {
        let data = {
            date: date,
            amount: amount,
            type: type,
            targetType: getTargetType(target),
            targetId: target,
            description: description,
            categoryId: category
        }
        console.log()
    }

    return (
        <Drawer
            anchor={'right'}
            open={props.open}
            onClose={props.onClose}
        >
        <Grid container>
            <Grid item xs={12}>
                Title
                <Button variant={'outlined'} onClick={props.onClose}>Close</Button>
            </Grid>
            <Grid item xs={12}>
                Label 1
            </Grid>
            <Grid item xs={12}>
                <Selector
                    data={typeData}
                    value={type}
                    handleChange={handleChangeType}
                />
            </Grid>

            <Grid item xs={12}>
               Date
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="date"
                    type="date"
                    value={date}
                    defaultValue={date}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleChangeDate}
                />
            </Grid>

            <Grid item xs={12}>
                Acc
            </Grid>
            <Grid item xs={12}>
                <SelectorByGroup
                    value={target}
                    data={targetData}
                    handleChange={handleChangeTarget}
                />
            </Grid>

            <Grid item xs={12}>
                cate
            </Grid>
            <Grid item xs={12}>
                <Selector
                    data={props.categories}
                    value={category}
                    handleChange={handleChangeCategory}
                />
            </Grid>

            <Grid item xs={12}>
                amo
            </Grid>
            <Grid item xs={12}>
                <TextField
                    value={amount}
                    onChange={handleChangeAmount}
                />
            </Grid>

            <Grid item xs={12}>
                desc
            </Grid>
            <Grid item xs={12}>
                <TextField
                    value={description}
                    onChange={handleChangeDescription}
                />
            </Grid>

            <Grid item xs={12}>
                <Button>cancel</Button>
                <Button onClick={handleSave}>save</Button>
            </Grid>
        </Grid>
        </Drawer>
    )
}

export default HistoryEditor
