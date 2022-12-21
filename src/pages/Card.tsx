import MainLayout from "../components/layout/MainLayout";
import {Button, Divider, Grid, TextField} from "@mui/material";
import CommonTable from "../components/Table";
import {useEffect, useState} from "react";
import {cardService} from "../services/card.service";
import {headers} from "../utils/TableHeaders";
import CommonModal from "../components/Modal";
import {accountService} from "../services/account.service";


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

    const [modal, setModal] = useState(false);
    const handleCloseModal = () => {
        setCard({
            name: '',
            number: '',
            description: ''
        })
        setModal(false);
    }
    const handleOpenModal = () => {
        setModal(true);
    }

    const [card, setCard] = useState({
        name: '',
        number: '',
        description: ''
    });


    const handleChangeTextField = (e: any) => {
        const { name, value } = e.target;
        setCard({
            ...card,
            [name]: value
        })
    }

    const registerCard = async (card: any) => {
        try {
            const res = await cardService.registerCard(card);
            handleCloseModal();
            getCards()
        } catch (e) {
            console.log(e);
        }
    }

    const handleSaveCard = () => {
        const { name, number, description } = card;
        if (name.length === 0 || number.length === 0) {
            return
        }
        registerCard(card);
    }

    const deleteCards = async (idList: string[]) => {
        try {
            const res = await cardService.deleteCards(idList);
            getCards();
            setSelectedIdList([]);
        } catch (e) {
            console.log(e)
        }
    }

    const handleDeleteCards = () => {
        if (selectedIdList.length === 0) {
            return
        }
        deleteCards(selectedIdList)
    }

    return (
            <Grid container>
                <Grid item xs={12} style={{fontSize: '32px', fontWeight: 'bold', display: 'flex'}}>
                    Card
                    <div style={{marginLeft: 'auto'}}>
                        {
                            selectedIdList.length > 0 && <Button variant={'outlined'} onClick={handleDeleteCards}>Remove</Button>
                        }
                        <Button variant={'outlined'} onClick={handleOpenModal}>Add</Button>
                    </div>
                </Grid>
                <hr style={{color: '#fff', width: '100%', margin: '15px 0'}}/>
                <Grid item xs={12}>
                    Filter
                </Grid>
                <Grid item xs={12} style={{marginTop: '15px'}}>
                    <CommonTable
                        type={'card'}
                        headers={headers.card}
                        data={data}
                        onClickRow={onClickRow}
                        selectedIdList={selectedIdList}
                        handleClickCheckbox={handleCheckbox}
                        handleClickHeaderCheckbox={handleHeaderCheckbox}
                    />
                </Grid>

                {
                    modal &&
                    <CommonModal
                        open={modal}
                        onClose={handleCloseModal}
                    >
                        <div style={{padding: '20px 30px'}}>
                            <div style={{margin: '10px', fontWeight: 'bold', fontSize: '16px'}}>
                                Account
                            </div>
                            <div style={{margin: '10px'}}>
                                <TextField
                                    size={'small'}
                                    label={'Name'}
                                    name={'name'}
                                    value={card.name}
                                    onChange={handleChangeTextField}
                                />
                            </div>
                            <div style={{margin: '10px'}}>
                                <TextField
                                    size={'small'}
                                    label={'Number'}
                                    name={'number'}
                                    value={card.number}
                                    onChange={handleChangeTextField}
                                />
                            </div>
                            <div style={{margin: '10px'}}>
                                <TextField
                                    size={'small'}
                                    label={'Description'}
                                    name={'description'}
                                    value={card.description}
                                    onChange={handleChangeTextField}
                                />
                            </div>
                        </div>
                        <div>
                            <Button onClick={handleCloseModal}>Cancel</Button>
                            <Button onClick={handleSaveCard}>Save</Button>
                        </div>
                    </CommonModal>
                }

            </Grid>
    )
};

export default CardPage
