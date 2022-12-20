import { Card, Grid } from "@mui/material";


const MainCard = () => {

    return (
        <Card>
            <Grid container>
                <Grid item xs={12}>
                    Title
                </Grid>
                <Grid item xs={2}>
                    Icon
                </Grid>
                <Grid item xs={8}>
                    PERCENT
                </Grid>
                <Grid item xs={2}>
                    something
                </Grid>
            </Grid>
        </Card>
    )
}

export default MainCard;