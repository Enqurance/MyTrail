import * as React from 'react';
import {styled} from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import {CalendarMonth, Flight, Home, Quiz, Science, School, Medication, Pets, Festival} from "@mui/icons-material";
import {
    yearText, dateText, infoText, moreText
} from '../components/timeline.module.css'
import Grid from "@mui/material/Grid";
import Stack from '@mui/material/Stack';
import {blue, green, orange, yellow, purple, cyan, brown, red} from '@mui/material/colors';

const Root = styled('div')(({theme}) => ({
    width: '100%', ...theme.typography.body2, '& > :not(style) ~ :not(style)': {
        marginTop: theme.spacing(2),
    },
}));

export default function DividerText() {
    return (<Root>
        <Grid container>
            <Grid item xs={12}>
                <Divider textAlign="left">
                    <Typography className={yearText} style={{color: '#0133B3'}}>
                        2023
                    </Typography>
                </Divider>
            </Grid>
            <Grid item xs={12} paddingLeft={2}>
                <Stack direction="row" spacing={2} paddingBottom={1.5}>
                    <CalendarMonth sx={{color: blue[800]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#1664C0'}}>
                        December
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2}>
                        <Science fontSize={"large"} sx={{color: blue[800]}}></Science>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#1664C0'}}>Starting from
                                    12.15</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#1664C0'}}>I am visiting NTU in
                                    Singapore🇸🇬 for an Internship
                                </Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingBottom={1.5} paddingTop={1.5}>
                    <CalendarMonth sx={{color: brown[600]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#6D4C41'}}>
                        November
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Link href={"posts/2023/japan"} underline={"none"}
                          sx={{'&:hover': {opacity: 0.7}}}>
                        <Stack direction="row" spacing={2}>
                            <Flight fontSize={"large"} sx={{color: brown[600]}}></Flight>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography className={infoText} style={{color: '#6D4C41'}}>11.3 -
                                        11.12</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={infoText} style={{color: '#6D4C41'}}>I visited Japan🇯🇵 With
                                        Dr. Guo【Blog】</Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2} paddingBottom={1.5} paddingTop={1.5}>
                    <CalendarMonth sx={{color: green[800]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#2F7D32'}}>
                        October
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Link href={"posts/2023/yantai"} underline={"none"}
                          sx={{'&:hover': {opacity: 0.7}}}>
                        <Stack direction="row" spacing={2}>
                            <Flight fontSize={"large"} sx={{color: green[800]}}></Flight>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Typography className={infoText} style={{color: '#2F7D32'}}>10.20 -
                                        10.22</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className={infoText} style={{color: '#2F7D32'}}>I visited Yantai City🍎,
                                        Shandong【Blog】</Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2} paddingTop={3}>
                        <Home fontSize={"large"} sx={{color: green[800]}}></Home>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#2F7D32'}}>10.1 - 10.9</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#2F7D32'}}>I was at Home🏠 for National
                                    Holiday</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingBottom={1.5} paddingTop={1.5}>
                    <CalendarMonth sx={{color: orange[800]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#EF6C00'}}>
                        September
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2}>
                        <Flight fontSize={"large"} sx={{color: orange[800]}}></Flight>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#EF6C00'}}>9.23 - 9.25</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#EF6C00'}}>I visited Changsha City🌶️,
                                    Hunan</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2} paddingTop={3}>
                        <Quiz fontSize={"large"} sx={{color: orange[800]}}></Quiz>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#EF6C00'}}>9.14 - 9.19</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#EF6C00'}}>I visited Shaanxi🍜 and took
                                    the GRE test</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingBottom={1.5} paddingTop={1.5}>
                    <CalendarMonth sx={{color: yellow[700]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#FBC02D'}}>
                        August
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2}>
                        <Science fontSize={"large"} sx={{color: yellow[700]}}></Science>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#FBC02D'}}>Whole month</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#FBC02D'}}>I was doing Internship at
                                    HKU🧐</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingBottom={1.5} paddingTop={1.5}>
                    <CalendarMonth sx={{color: purple[700]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#7B1EA2'}}>
                        July
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2}>
                        <Science fontSize={"large"} sx={{color: purple[700]}}></Science>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#7B1EA2'}}>7.16</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#7B1EA2'}}>I arrived at HKU for an
                                    Internship🇭🇰</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingBottom={1.5} paddingTop={1.5}>
                    <CalendarMonth sx={{color: cyan[500]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#00BCD4'}}>
                        June
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2}>
                        <Flight fontSize={"large"} sx={{color: cyan[500]}}></Flight>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#00BCD4'}}>6.26-6.29</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#00BCD4'}}>I visited Mt. Changbai⛰️,
                                    Jilin</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingBottom={1.5} paddingTop={1.5}>
                    <CalendarMonth sx={{color: green[300]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#81C784'}}>
                        February
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2}>
                        <School fontSize={"large"} sx={{color: green[300]}}></School>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#81C784'}}>2.10</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#81C784'}}>I went back school🏫️ after
                                    staying 3 months at home</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item xs={12} spacing={2} paddingTop={3}>
                <Divider textAlign="left">
                    <Typography className={yearText} style={{color: '#0133B3'}}>
                        2022
                    </Typography>
                </Divider>
            </Grid>
            <Grid item xs={12} paddingLeft={2}>
                <Stack direction="row" spacing={2} paddingBottom={1.5}>
                    <CalendarMonth sx={{color: blue[400]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#42A5F5'}}>
                        December
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2}>
                        <Medication fontSize={"large"} sx={{color: blue[400]}}></Medication>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#42A5F5'}}>12.20</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#42A5F5'}}>I was infected with Corona
                                    Virus😷</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2} paddingTop={3}>
                        <Pets fontSize={"large"} sx={{color: blue[400]}}></Pets>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#42A5F5'}}>12.5</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#42A5F5'}}>Oubao🐱 joined my
                                    family</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingBottom={1.5} paddingTop={1.5}>
                    <CalendarMonth sx={{color: green[800]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#2F7D32'}}>
                        November
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2}>
                        <Flight fontSize={"large"} sx={{color: green[800]}}></Flight>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#2F7D32'}}>11.29</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#2F7D32'}}>I went home🏠 from Beihang
                                    because of the epidemic🦠</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2} paddingBottom={1.5} paddingTop={1.5}>
                    <CalendarMonth sx={{color: red[400]}}></CalendarMonth>
                    <Typography className={dateText} style={{color: '#EB524F'}}>
                        November
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={2} paddingLeft={1.5}>
                    <Divider orientation="vertical" flexItem/>
                    <Stack direction="row" spacing={2}>
                        <Festival fontSize={"large"} sx={{color: red[400]}}></Festival>
                        <Grid container>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#EB524F'}}>8.26</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography className={infoText} style={{color: '#EB524F'}}>I visited Universal
                                    Studios🎠 Beijing</Typography>
                            </Grid>
                        </Grid>
                    </Stack>
                </Stack>
                <Grid item xs={12} spacing={2} paddingTop={3}>
                    <Typography className={moreText} style={{color: '#0133B3'}}>
                        Show more...
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    </Root>);
}