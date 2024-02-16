import * as React from 'react'
import Layout from '../components/layout'
import Grid from "@mui/material/Grid";
import {
    myName,
    subTitle,
    schoolTitle,
    textContent,
} from '../components/resume.module.css'
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

const ResumePage = () => {
    return (
        <Layout pageTitle="Resume">
            <Grid container rowSpacing={3}>
                <Grid item xs={24} className={myName}>Lin Zijie</Grid>
                <Grid item xs={24} className={subTitle}>Education</Grid>
            </Grid>
            <Stack direction="row">
                <Item>
                    <ImageList cols={1}>
                        {BUAA.map((item) => (
                            <ImageListItem key={item.img} style={{width: 80, height: 80}}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Item>
                <Item style={{paddingLeft: '20px', paddingTop: '20px'}}>
                    <Stack className={schoolTitle}>Beihang University(Former BUAA)</Stack>
                    <Stack className={textContent}>Bachelor of Engineering - Computer Science and Engineering</Stack>
                    <Stack className={textContent}>2020.9 - 2024.7, Beijing, China</Stack>
                </Item>
            </Stack>
            <Grid container style={{paddingTop: '20px'}}>
                <Grid item xs={24} className={subTitle}>Service</Grid>
            </Grid>
            <Stack direction="row">
                <Item>
                    <ImageList cols={1}>
                        {HKU.map((item) => (
                            <ImageListItem key={item.img} style={{width: 75, height: 85}}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Item>
                <Item style={{paddingLeft: '25px', paddingTop: '20px'}}>
                    <Stack className={schoolTitle}>University of Hongkong</Stack>
                    <Stack className={textContent}>Intern, Department of Computer Science</Stack>
                    <Stack className={textContent}>2023.7 - 2023.9, Hongkong, China</Stack>
                </Item>
            </Stack>
            <Stack direction="row">
                <Item>
                    <ImageList cols={1}>
                        {NTU.map((item) => (
                            <ImageListItem key={item.img} style={{width: 75, height: 85}}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Item>
                <Item style={{paddingLeft: '25px', paddingTop: '20px'}}>
                    <Stack className={schoolTitle}>Nanyang Technological University</Stack>
                    <Stack className={textContent}>Intern, School of Computer Science and Engineering</Stack>
                    <Stack className={textContent}>2023.11 - 2024.2, Singapore</Stack>
                </Item>
            </Stack>
            <Grid container style={{paddingTop: '20px'}}>
                <Grid item xs={24} className={subTitle}>Skills</Grid>
            </Grid>
        </Layout>
    )
}

const BUAA = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202402162154743.png',
        title: 'BUAA'
    }
]

const HKU = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202402162248453.jpg',
        title: 'HKU'
    }
]

const NTU = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202402162302548.png',
        title: 'NTU'
    }
]

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    boxShadow: 'none',
    ...theme.typography.body2,
    padding: theme.spacing(1),
}));
export const Head = () => <title>Resume</title>

export default ResumePage