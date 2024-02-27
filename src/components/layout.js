import * as React from 'react'
import {
    container,
    iconStyle,
    layoutCopy,
    fadeAnimation,
} from './layout.module.css'
import Navigator from './navigator.js'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FaceIcon from '@mui/icons-material/Face';
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from "@mui/material/Typography";
const Layout = ({children, pageTitle}) => {
    return (<React.Fragment>
            <CssBaseline/>
            <head>
                <title>{pageTitle}</title>
            </head>
            <Container maxWidth="100vh" className={fadeAnimation}>
                <Container maxWidth="md">
                    <div className={container}>
                        <Navigator></Navigator>
                        <main>
                            {children}
                        </main>
                    </div>
                </Container>
                <Container>
                    <Grid container justifyContent={"center"}>
                        <Grid item paddingTop={5}>
                        <span className={iconStyle}>
                            <Link href={"https://github.com/Enqurance"}>
                                <GitHubIcon fontSize="large"></GitHubIcon>
                            </Link>
                        </span>
                            <span className={iconStyle}>
                                <Link href={"mailto:Enqurance@Outlook.com"}>
                                    <EmailIcon fontSize="large"></EmailIcon>
                                </Link>
                        </span>
                            <span className={iconStyle}>
                            <Link
                                href={"https://www.linkedin.com/in/%E5%AD%90%E6%9D%B0-%E6%9E%97-604690296/?locale=en_US"}>
                                <LinkedInIcon fontSize="large"></LinkedInIcon>
                            </Link>
                        </span>
                            <span className={iconStyle}>
                            <Link href={"https://enqurance.github.io/"}>
                                <FaceIcon fontSize="large"></FaceIcon>
                            </Link>
                        </span>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent={"center"}>
                        <Grid item paddingBottom={5} paddingTop={1}>
                            <Typography className={layoutCopy}>
                                ©️{} Enqurance · 2023
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Layout