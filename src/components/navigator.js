import * as React from 'react'
import {Link} from 'gatsby'
import {
    enquranceWord,
    trailWord,
    navToTop,
    navToTopRight,
    navHomepageText,
} from './navbar.module.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Navigator = () => {
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={6}>
                <Grid item xs={6}>
                    <div className={navToTop}>
                        <Link to="/" className={navHomepageText}>
                            <span className={enquranceWord}>Enqurance's </span>
                            <span className={trailWord}>Trail</span>
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justifyContent="flex-end" className={navToTopRight} fontSize={35}>
                        <JumpButton name={"HomePage"} target={"/"}></JumpButton>
                        <JumpButton name={"About"} target={"/about"}></JumpButton>
                        <JumpButton name={"Resume"} target={"/resume"}></JumpButton>
                    </Grid>
                </Grid>
                <Grid item xs={12}></Grid>
            </Grid>
        </Box>
    )
}

const JumpButton = (props) => {
    return (
        <div>
            <Button
                href={props.target}
                style={{
                    fontSize: 'large',
                    color: 'rgb(0, 51, 179)',
                    fontWeight: '800',
                    textAlign: 'center',
                    borderRadius: '15%',
                    padding: '0px 10px'
                }}
            >
                {props.name}
            </Button>
        </div>
    )
}
export default Navigator