import MainLayout from "../components/layout/MainLayout";
import {Button, Divider, Grid, TextField} from "@mui/material";
import CommonTable from "../components/Table";
import {useEffect, useState} from "react";
import {categoryService} from "../services/category.service";
import {headers} from "../utils/TableHeaders";
import CommonModal from "../components/Modal";


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
        setAccount({
            name: '',
            description: ''
        })
        setModal(false);
    }
    const handleOpenModal = () => {
        setModal(true);
    }

    const [category, setAccount] = useState({
        name: '',
        description: ''
    });


    const handleChangeTextField = (e: any) => {
        const { name, value } = e.target;
        setAccount({
            ...category,
            [name]: value
        })
    }

    const registerCategory = async (category: any) => {
        try {
            const res = await categoryService.postCategory(category);
            handleCloseModal();
            getCategories()
        } catch (e) {
            console.log(e);
        }
    }

    const handleSaveAccount = () => {
        const { name, description } = category;
        if (name.length === 0) {
            return
        }
        registerCategory(category);
    }

    const deleteCategories = async (idList: string[]) => {
        try {
            const res = await categoryService.deleteCategories(idList);
            getCategories();
            setSelectedIdList([]);
        } catch (e) {
            console.log(e);
        }
    }

    const handleDeleteCategories = () => {
        if (selectedIdList.length === 0) {
            return
        }
        deleteCategories(selectedIdList)
    }

    return (
            <Grid container>
                <Grid item xs={12} style={{fontSize: '32px', fontWeight: 'bold', display: 'flex'}}>
                            Category
                        <div style={{marginLeft: 'auto'}}>
                            {
                                selectedIdList.length > 0 && <Button variant={'outlined'} onClick={handleDeleteCategories}>Remove</Button>
                            }
                            <Button variant={'outlined'} onClick={handleOpenModal}>Button</Button>
                        </div>

                </Grid>
                <hr style={{color: '#fff', width: '100%', margin: '15px 0'}}/>
                <Grid item xs={12}>
                    Filter
                </Grid>
                <Grid item xs={12} style={{marginTop: '15px'}}>
                    <CommonTable
                        type={'category'}
                        headers={headers.category}
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
                                Category
                            </div>
                            <div style={{margin: '10px'}}>
                                <TextField
                                    size={'small'}
                                    label={'Name'}
                                    name={'name'}
                                    value={category.name}
                                    onChange={handleChangeTextField}
                                />
                            </div>
                            <div style={{margin: '10px'}}>
                                <TextField
                                    size={'small'}
                                    label={'Description'}
                                    name={'description'}
                                    value={category.description}
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

export default CategoryPage
