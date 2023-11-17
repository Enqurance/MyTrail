import * as React from 'react'
import Layout from '../components/layout'
import Stack from '@mui/material/Stack';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {StaticImage} from "gatsby-plugin-image"
import Carousel from 'react-material-ui-carousel';
import {Card, CardContent, CardMedia} from '@mui/material';
import MyTimeline from "../components/timeline";
import {
    avatarText,
    selfIntro,
    selfIntroBold,
    myCaption,
    siteIntro,
} from '../components/index.module.css'


const IndexPage = () => {
    return (<Layout pageTitle="HomePage">
        <Stack direction="row">
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <MyAvatar></MyAvatar>
                    <Grid xs={10}>
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
                                src="../images/mt-changbai.jpeg"
                                alt="Selfie">
                            </StaticImage>
                            <Typography className={myCaption}>
                                This was taken on Changbai Mountain in Jul. 2023
                            </Typography>
                            <span className={selfIntro}>
                                I am now looking for a MSc program. In the future,
                                perhaps I would like to try a PhD program, since I suppose myself a studious person&#x1F446;.
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
                                src="../images/cats.png"
                                alt="Cats">
                            </StaticImage>
                            <Typography className={myCaption}>
                                This was taken at home in Jan. 2023
                            </Typography>
                            <span className={selfIntro}>
                                It is also truly fortunate for me to have crossed paths with my wonderful friends throughout
                                various stages of my life, with whom I have shared countless meaningful moments&#x1F387;.
                            </span>
                        </p>
                        <p>
                            <MyImageList></MyImageList>
                        </p>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12} className={siteIntro}>This site marks my important trails</Grid>
                        <Grid item xs={12}><MyTimeline></MyTimeline></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    </Layout>)
}

const MyAvatar = () => {
    return (
        <Grid container>
            <Grid item xs={12} className={avatarText}>
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

const MyImageList = () => {
    const items = [
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311012342376.png",
            title: "HKU, 2023.7-2023.9",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020000127.png",
            title: "Dr. Chen(Now Ph.D at THU)",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020002390.jpeg",
            title: "Alxa Union, 2021-2024",
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020004159.jpeg",
            title: "2022 Beijing Winter Olympics, 2022.1-2022.3"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020806412.png",
            title: "QZY(Now MA. at BUAA)"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020010662.jpeg",
            title: "Sia(Now MA. at HUST) and James(Now Ph.D at SYSU)"
        },
        {
            img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311020017110.png",
            title: "Erenrat(Now MA. at ANU)"
        }
    ];
    return (
        <Carousel autoPlay={false} animation="slide" indicators={false} height={400}>
            {items.map((item, index) => (
                <Card key={index} out style={{alignItems: 'center'}} variant="outlined">
                    <CardMedia component="img" image={item.img} title={item.title} style={{ height: '250px' }}/>
                    <CardContent>
                        <Typography className={myCaption}>
                            {item.title}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </Carousel>
    );
}

export default IndexPage