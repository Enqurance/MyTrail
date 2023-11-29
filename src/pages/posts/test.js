import React from 'react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Layout from '../../components/layout'
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

const TestPost = () => {
    const markdown = `# Hello #`
    return (<Layout pageTitle="TestPost">
        <Stack direction="row">
            <Grid container spacing={2}>
                <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
            </Grid>
        </Stack>
    </Layout>);
}

export default TestPost;
