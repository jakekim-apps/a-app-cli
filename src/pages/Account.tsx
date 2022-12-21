import MainLayout from "../components/layout/MainLayout";
import {Button, Divider, Grid, TextField} from "@mui/material";
import CommonTable from "../components/Table";
import {useEffect, useState} from "react";
import {accountService} from "../services/account.service";
import {headers} from "../utils/TableHeaders";

import CommonModal from "../components/Modal";

const AccountPage = () => {
    const [data, setData] = useState([]);

    const getAccounts = async () => {
        try {
            const res = await accountService.getAccounts();
            console.log(res)
            setData(res.data.items);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getAccounts();
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
    };

    const onClickRow = (row: any) => {
        console.log(row);
    };


    const [modal, setModal] = useState(false);
    const handleCloseModal = () => {
        setAccount({
            name: '',
            number: '',
            description: '',
            balance: 0
        })
        setModal(false);
    }
    const handleOpenModal = () => {
        setModal(true);
    }

    const [account, setAccount] = useState({
        name: '',
        number: '',
        description: '',
        balance: 0
    });


    const handleChangeTextField = (e: any) => {
        const { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value
        })
    }

    const registerAccount = async (account: any) => {
        try {
            const res = await accountService.registerAccount(account);
            handleCloseModal();
            getAccounts()
        } catch (e) {
            console.log(e);
        }
    }

    const handleSaveAccount = () => {
        const { name, number, description, balance } = account;
        if (name.length === 0 || number.length === 0) {
            return
        }
        registerAccount(account);
    }

    const deleteAccounts = async (idList: string[]) => {
        try {
            const res = await accountService.deleteAccounts(idList);
            getAccounts();
            setSelectedIdList([]);
        } catch (e) {
            console.log(e)
        }
    }

    const handleDeleteAccounts = () => {
        if (selectedIdList.length === 0) {
            return
        }
        deleteAccounts(selectedIdList)
    }

    return (
        <Grid container>
            <Grid item xs={12} style={{fontSize: '32px', fontWeight: 'bold', display: 'flex'}}>
                Account
                <div style={{marginLeft: 'auto'}}>
                    {
                        selectedIdList.length > 0 && <Button variant={'outlined'} onClick={handleDeleteAccounts}>Remove</Button>
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
                    type={'account'}
                    headers={headers.account}
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
                                value={account.name}
                                onChange={handleChangeTextField}
                            />
                        </div>
                        <div style={{margin: '10px'}}>
                            <TextField
                                size={'small'}
                                label={'Number'}
                                name={'number'}
                                value={account.number}
                                onChange={handleChangeTextField}
                            />
                        </div>
                        <div style={{margin: '10px'}}>
                            <TextField
                                size={'small'}
                                label={'Description'}
                                name={'description'}
                                value={account.description}
                                onChange={handleChangeTextField}
                            />
                        </div>
                        <div style={{margin: '10px'}}>
                            <TextField
                                size={'small'}
                                label={'Balance'}
                                name={'balance'}
                                value={account.balance}
                                onChange={handleChangeTextField}
                            />
                        </div>
                    </div>
                    <div>
                        <Button onClick={handleCloseModal}>Cancel</Button>
                        <Button onClick={handleSaveAccount}>Save</Button>
                    </div>
                </CommonModal>
            }
        </Grid>
    )
};

export default AccountPage
