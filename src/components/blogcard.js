import Link from "@mui/material/Link";
import * as React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import {
    cardStyle,
    cardTimeStyle,
    cardTitleStyle,
    cardTextStyle
} from './blogcard.module.css'

export default function BlogCard({info}) {
    return (
        <Card className={cardStyle} style={{height: 330}}>
            <Link href={info.link} underline="none">
                <CardMedia
                    component="img"
                    height="200"
                    image={info.image}
                    alt={info.alt}
                />
                <CardContent>
                    <Typography className={cardTitleStyle}>
                        {info.title}
                    </Typography>
                    <Typography className={cardTimeStyle}>
                        {info.time}
                    </Typography>
                    <Typography className={cardTextStyle}>
                        {info.text}
                    </Typography>
                </CardContent>
            </Link>
        </Card>
    );
}
