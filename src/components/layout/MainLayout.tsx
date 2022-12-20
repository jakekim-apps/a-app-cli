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
// import {Grid} from "@mui/material";
//
// const MainLayout = (props: any) => {
//     return (
//         <Grid container>
//             <Grid item xs={12} style={{height: '64px'}}>
//                 <Header />
//             </Grid>
//             <Grid item xs={12} style={{height: 'calc(100% - 64px)'}}>
//                 <Grid container>
//                     <Grid item xs={1} style={{ padding: '8px' }} >
//                         MENU
//                     </Grid>
//                     <Grid item xs={11} style={{ padding: '8px' }}>
//                         { props.children }
//                     </Grid>
//                 </Grid>
//             </Grid>
//         </Grid>
//     )
// }
//
// export default MainLayout
