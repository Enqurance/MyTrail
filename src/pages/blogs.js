import * as React from 'react'
import { blogsHead } from '../components/blogs.module.css'
import Layout from '../components/layout'
import Grid from '@mui/material/Grid';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Grid container>
          <Grid item xs={12} className={blogsHead}>
              History Blogs
          </Grid>
      </Grid>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage