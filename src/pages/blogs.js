import * as React from 'react'
import Layout from '../components/layout'
import Grid from '@mui/material/Grid';
import BlogCard from "../components/blogcard";
import {items} from "../data/data"
import Divider from '@mui/material/Divider';
import {
    blogsHead,
    cardGridStyle
} from '../components/blogs.module.css'

const AboutPage = () => {
    return (
        <Layout pageTitle="Blogs">
            <Grid container>
                <Grid item xs={12} className={blogsHead}>
                    History Blogs
                </Grid>
                <Grid item xs={12} style={{paddingTop: 20}}>
                    <Divider></Divider>
                </Grid>
                <Grid item xs={12} md={6} className={cardGridStyle}>
                    <BlogCard info={items.singapore}></BlogCard>
                </Grid>
                <Grid item xs={12} md={6} className={cardGridStyle}>
                    <BlogCard info={items.vietnam}></BlogCard>
                </Grid>
                <Grid item xs={12} md={6} className={cardGridStyle}>
                    <BlogCard info={items.japan}></BlogCard>
                </Grid>
                <Grid item xs={12} md={6} className={cardGridStyle}>
                    <BlogCard info={items.yantai}></BlogCard>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default AboutPage