import {ReactNode} from "react";
import {Grid} from "@mui/material";

const AuthLayout = ({children}: { children: ReactNode }) => {
    return (
        <Grid sx={{p: 2}} container direction={'column'} justifyContent={'center'} alignItems={'center'} style={{height: '100%'}}>
            <main>{children}</main>
        </Grid>
    )
}

export default AuthLayout;
