import Header from "./Header";
import SideBar from "./SideBar";
import Grid from "@mui/material/Grid";

const MainLayout = ( props: any ) => {
    return (
        <div style={{height: '100%'}}>
            <div style={{height: '60px'}}>
                <Header />
            </div>
            <div style={{height: 'calc(100% - 60px)', display: 'flex'}}>
                    <div style={{height: '100%', width: '15%'}}>
                        <SideBar />
                    </div>
                    <div style={{height: '100%', width: '85%'}}>
                        { props.children }
                    </div>
            </div>

        </div>
    )
};

export default MainLayout