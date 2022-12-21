import MainLayout from "../components/layout/MainLayout";
import {Grid, Paper} from "@mui/material";
import Chart from "react-apexcharts"
import { ApexOptions } from 'apexcharts'
import {useState} from "react";
import CommonTable from "../components/common/Table";
const DashBoard = (props: any) => {

    const option : ApexOptions = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'Product Trends by Month',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
    }

    const [series, setSeries] = useState(
[{
                name: "Desktops",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }]
    )

    const option2: ApexOptions = {
        chart: {
            type: 'bar',
            height: 380
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: 'bottom'
                },
            }
        },
        colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
            '#f48024', '#69d2e7'
        ],
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            formatter: function (val, opt) {
                return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
            },
            offsetX: 0,
            dropShadow: {
                enabled: true
            }
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'India'
            ],
        },
        yaxis: {
            labels: {
                show: false
            }
        },
        title: {
            text: 'Custom DataLabels',
            align: 'center',
            floating: true
        },
        subtitle: {
            text: 'Category Names as DataLabels inside bars',
            align: 'center',
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return ''
                    }
                }
            }
        }
    }

    const series2 = [{data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]}]


    return (
            <Grid container alignItems={'flex-start'}>
                <Grid xs={12}>
                    {/*<Paper elevation={4}>*/}
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Paper elevation={4}>
                                    A
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper elevation={4}>
                                    B
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper elevation={4}>
                                    C
                                </Paper>
                            </Grid>
                            <Grid item xs={3}>
                                <Paper elevation={4}>
                                    D
                                </Paper>
                            </Grid>
                        </Grid>
                    {/*</Paper>*/}
                </Grid>

                <Grid item xs={12} style={{marginTop: '30px'}}>
                    {/*<Paper elevation={4}>*/}
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Paper elevation={4}>
                                    <Chart options={option} series={series} type="line" height={350} />

                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={4}>
                                    <Chart options={option2} series={series2} type="bar" height={380} />

                                </Paper>
                            </Grid>
                        </Grid>
                    {/*</Paper>*/}
                </Grid>

                <Grid item xs={12} style={{marginTop: '30px'}}>
                    <Grid container spacing={1}>
                        <Grid item xs={3}>
                            total with list
                        </Grid>
                        <Grid item xs={3}>
                            total with list
                        </Grid>
                        <Grid item xs={6}>
                            latest list
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12} style={{marginTop: '30px'}}>
                    {/*<Paper elevation={4}>*/}
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Paper elevation={4}>
                                    <CommonTable />
                                </Paper>
                            </Grid>
                            <Grid item xs={6}>
                                <Paper elevation={4}>
                                    <CommonTable />
                                </Paper>
                            </Grid>
                        </Grid>
                    {/*</Paper>*/}
                </Grid>

            </Grid>
    )
}
export default DashBoard;
