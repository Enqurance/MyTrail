import * as React from 'react'
import Layout from '../../../components/layout'
import Typography from "@mui/material/Typography";
import {
    pendingStyle
} from "../styles/general.module.css"

const Vietnam = () => {
    return (
        <Layout pageTitle="Vietnam-2024">
            <Typography className={pendingStyle}>
                Pending...
                You may visit other pages~
            </Typography>
        </Layout>
    )
}
export default Vietnam