import Header from "./Header";
import {Grid} from "@mui/material";

const MainLayout = (props: any) => {
    return (
        <Grid container>
            <Grid item xs={12} style={{height: '64px'}}>
                <Header />
            </Grid>
            <Grid item xs={12} style={{height: 'calc(100% - 64px)'}}>
                <Grid container>
                    <Grid item xs={1} style={{ padding: '8px' }} >
                        MENU
                    </Grid>
                    <Grid item xs={11} style={{ padding: '8px' }}>
                        { props.children }
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MainLayout
