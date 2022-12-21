import {useNavigate} from "react-router-dom";
import {List, ListItem, ListItemButton} from "@mui/material";

const NavItems = [
    {
        id: 'dashBoard',
        text: 'Dash Board',
        path: '/dashboard'
    },
    {
        id: 'history',
        text: 'History',
        path: '/histories'
    },
    {
        id: 'account',
        text: 'Accounts',
        path: '/accounts'
    },
    {
        id: 'card',
        text: 'Cards',
        path: 'cards'
    },
    {
        id: 'category',
        text: 'Categories',
        path: '/categories'
    },
    {
        id: 'user',
        text: 'Users',
        path: '/users'
    },
]


function NavList(props: any) {

    const navigate = useNavigate();
    const handleClick = (item: any) => {
        navigate(item.path);
    }

    return (
        <List>
            {
                props.itemList.map((item: any) => {
                    return (
                        <ListItem key={item.id}>
                            <ListItemButton onClick={e => handleClick(item)} >
                                { item.text }
                            </ListItemButton >
                        </ListItem>
                    )
                })
            }
        </List>
    )
}


function SideBar() {
    return (
        <div style={{width: '100%'}}>
            <NavList itemList={NavItems} />
        </div>
    )
}

export default SideBar
