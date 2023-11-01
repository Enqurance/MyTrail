import * as React from 'react'
import Layout from '../components/layout'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {StaticImage} from "gatsby-plugin-image";
import {
    avatarText,
    avatarPic,
    selfIntro,
    selfIntroBold,
    myCaption,
} from '../components/index.module.css'

const IndexPage = () => {
    return (<Layout pageTitle="Home Page">
        <Stack direction="row">
            <Grid container>
                <Grid item xs={6}>
                    <Grid container>
                        <MyAvatar></MyAvatar>
                    </Grid>
                    <Grid paddingTop={4} xs={10}>
                        <p>
                        <span className={selfIntro}>
                            Hello, my name is Zijie Lin and Enqurnace is my
                        </span>
                            <span className={selfIntroBold}> nick name</span>
                            <span className={selfIntro}>, I am currently a senior student of Beihang University
                                (Also known as BUAA) and I major in Computer Science and Technology.
                                I live in both Beijing and Foshan, China&#x1F618;.
                        </span>
                        </p>
                        <p>
                            <span className={selfIntro}>
                                I have many hobbies, among which programming, photography, and travelling are my favorites.
                            </span>
                        </p>
                        <p>
                            <StaticImage
                                src="https://raw.githubusercontent.com/Enqurance/Figures/main/202311012158665.jpg"
                                alt="Selfie">
                            </StaticImage>
                            <Typography className={myCaption}>
                                This was taken on Changbai Mountain in Jul. 2023
                            </Typography>
                            <span className={selfIntro}>
                                I am now looking for a MSc program. In the future,
                                I would like to try a PhD program, since I suppose myself a studious person&#x1F446;.
                            </span>
                        </p>
                        <p>
                            <span className={selfIntro}>
                                I own two lovely cats&#x1F431;, Xiangxiang and Oubao. Together with my parents,
                                I live a happy life.
                            </span>
                        </p>
                        <p>
                            <StaticImage
                                src="https://raw.githubusercontent.com/Enqurance/Figures/main/202311012224707.png"
                                alt="Cats">
                            </StaticImage>
                            <Typography className={myCaption}>
                                This was taken at home in Jan. 2023
                            </Typography>
                        </p>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{background: 'white', height: '100vh'}}/>
                </Grid>
            </Grid>
        </Stack>
    </Layout>)
}

const MyAvatar = () => {
    return (
        <Grid container>
            <Grid item className={avatarPic}><Avatar alt="Enqurance"
                                                     src="https://raw.githubusercontent.com/Enqurance/Figures/main/202311011725041.png"
                                                     sx={{width: 75, height: 75}}
            />
            </Grid>
            <Grid item xs={10} paddingLeft={5} className={avatarText}>
                <span style={{color: "#4286F3"}}>B</span>
                <span style={{color: "#FBC805"}}>o</span>
                <span style={{color: "#EB4335"}}>n</span>
                <span style={{color: "#4286F3"}}>j</span>
                <span style={{color: "#34A853"}}>o</span>
                <span style={{color: "#4286F3"}}>u</span>
                <span style={{color: "#EB4335"}}>r</span>
                <span style={{color: "#FBC805"}}>!</span>
                <div style={{whiteSpace: 'pre-wrap', color: "rgb(0, 51, 179)", fontSize: 25}}>
                    Welcome to Enqurnace's Site
                </div>
            </Grid>
        </Grid>
    )
}

export const Head = () => <title>Home Page</title>

export default IndexPage