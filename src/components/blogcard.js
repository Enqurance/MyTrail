import Link from "@mui/material/Link";
import * as React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {
    cardStyle,
    cardTimeStyle,
    cardTitleStyle,
    cardTextStyle
} from './blogcard.module.css'
import Grid from "@mui/material/Grid";

export default function BlogCard({info}) {
    return (
        <Card className={cardStyle}>
            <Link href={info.link} underline="none">
                <CardMedia
                    component="img"
                    height="200"
                    image={info.image}
                    alt={info.alt}
                />
                <CardContent>
                    <Grid container className={cardTitleStyle}>
                        {info.title}
                    </Grid>
                    <Grid container className={cardTimeStyle}>
                        {info.time}
                    </Grid>
                    <Grid container className={cardTextStyle}>
                        {info.text}
                    </Grid>
                </CardContent>
            </Link>
        </Card>
    );
}
