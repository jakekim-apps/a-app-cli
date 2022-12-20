import {Grid} from "@mui/material";

const TestPage = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={3}>
                        rate
                    </Grid>
                    <Grid item xs={3}>
                        Monthly
                    </Grid>
                    <Grid item xs={3}>
                        In Total
                    </Grid>
                    <Grid item xs={3}>
                        Total
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={6}>
                        total da, we, mo
                    </Grid>
                    <Grid item xs={6}>
                        each Category
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container>
                    <Grid item xs={6}>
                        accounts management
                    </Grid>
                    <Grid item xs={6}>
                        category management
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
};

export default TestPage
