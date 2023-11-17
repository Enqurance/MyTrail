import * as React from 'react'
import {
    container, containerGlobal, iconStyle, layoutCopy
} from './layout.module.css'
import Navigator from './navigator.js'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import Typography from "@mui/material/Typography";

const Layout = ({children}) => {
    return (<React.Fragment>
        <CssBaseline/>
        <Container maxWidth="100vh" className={containerGlobal}>
            <Container maxWidth="lg">
                <div className={container}>
                    <Navigator></Navigator>
                    <main>
                        {children}
                    </main>
                </div>
            </Container>
            <Container>
                <Grid container justifyContent={"center"}>
                    <Grid item={12} paddingTop={5}>
                        <span className={iconStyle}>
                            <Link href={"https://github.com/Enqurance"}>
                                <GitHubIcon fontSize={"large"}></GitHubIcon>
                            </Link>
                        </span>
                        <span className={iconStyle}>
                                <Link href={"mailto:Enqurance@Outlook.com"}>
                                    <EmailIcon fontSize={"large"}></EmailIcon>
                                </Link>
                        </span>
                        <span className={iconStyle}>
                            <Link href={"https://enqurance.github.io/"}>
                                <FaceIcon fontSize={"large"}></FaceIcon>
                            </Link>
                        </span>
                    </Grid>
                </Grid>
                <Grid container justifyContent={"center"}>
                    <Grid item paddingBottom={5} paddingTop={1}>
                        <Typography className={layoutCopy}>
                            ©️{} Enqurance · 2023.11
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    </React.Fragment>)
}
export default Layout