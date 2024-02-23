import * as React from 'react'
import Layout from '../../../components/layout'
import {
    pendingStyle
} from "../styles/general.module.css"
import Grid from "@mui/material/Grid";

const Vietnam = () => {
    return (
        <Layout pageTitle="Vietnam-2024">
            <Grid container className={pendingStyle}>
                Pending,
                you may visit other pages😊
            </Grid>
        </Layout>
    )
}
export default Vietnam