import React from 'react'
import Markdown from 'react-markdown'
import Layout from '../../../components/layout'
import remarkGfm from 'remark-gfm'
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Flight} from "@mui/icons-material";
import {
    postTitle,
    myCaption
} from '../../../components/myfont.module.css'
import Stack from "@mui/material/Stack";
import {red} from '@mui/material/colors';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Japan = () => {
    return (<Layout pageTitle="TestPost">
        <Grid container>
            <Grid item xs={12}>
                <Stack direction={"row"}>
                    <Flight sx={{fontSize: 40}} style={{color: red[700], opacity: 0.8}}></Flight>
                    <Typography className={postTitle} style={{color: red[700], opacity: 0.8}}>
                        2023 · Japan 🇯🇵🌸
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Markdown remarkPlugins={[remarkGfm]}>
                    ## 和霄哥的日本之行
                </Markdown>
                <Markdown>
                    2018年，我曾经有过一段6天东进坂出的日本之行。当时受同学的邀请，一起报名了跟团旅行。
                    那时，我本人对日本这个国家并没有什么特别的兴趣，加之旅途匆忙、心智尚未成熟，因此旅途只是走马观花，
                    没有什么深刻的体会。上了大学之后，我开始逐渐接触到日本的一些文化（主要是动漫、游戏等现代文化），
                    以及日本的政治、经济情况。当然，光是这些并不足以让我产生足够强的Motivation，
                    最关键的因素还一应当是2023年11月在日本举办的Coldplay演唱会。
                </Markdown>
                <Markdown>
                    自小学六年级以来，我就开始听Coldplay了。最开始听的是Viva la Vida，当时感觉这首歌特别激昂，
                    歌词也非常感人。后来上了高中、大学，逐渐喜欢上了Coldplay的“老本行”——抒情的英国摇滚。
                    Coldplay的名曲我就不一一罗列了，但Coldplay这支乐队的重要性之于我就如同“耶路撒冷之余西方”，
                    他们陪伴我度过了许多个激动、欢乐、无聊、悲伤、孤独的夜晚。今年六月，我在小红书上看到了一句很酷的话：
                    **那些在无数个夜晚出现在耳机里的人，现在终于要出现在我的面前。** 此时，这场演唱会对我来说，风雨无阻。
                </Markdown>
                <Markdown>
                    演唱会11.6号在东京巨蛋举行，那何尝不同时来一次Japan Tour呢？非常幸运，找到了霄哥作为搭子，
                    于是我们一起策划了一场“日本十日游”。说走就走，11.3我们北京出发～
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "60%"}} cols={1}>
                        {Airport.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Typography className={myCaption}>
                        首都机场的星盟飞机
                    </Typography>
                </Stack>
                <Markdown>
                    11.3下午我们抵达东京，由于上次来日本是跟团行，因此没有亲身体会日本的轨道交通。
                    这次我们坐电车从成田机场一路直达泉岳寺站，并入住了附近的酒店东急Stay。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "80%"}} cols={2}>
                        {Tram_Hotel.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Typography className={myCaption}>
                        电车和酒店
                    </Typography>
                </Stack>
                <Markdown>
                    晚上，我们在银座周围逛了逛，我发现东京的街道非常干净，这是我上次所没有注意到的。
                    我们在一家日式快餐店里吃了晚饭。吃饭的时候，一位很有意思的老爷爷和我们聊了一会，
                    而且神奇的是，店里有一半的员工也是来兼职的中国学生。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={2}>
                        {Ginza_Dinner.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Typography className={myCaption}>
                        银座和当日的晚饭
                    </Typography>
                </Stack>
                <Markdown>
                    第二天，我们逛了浅草寺、上野公园、东京大学，也去秋叶原瞅了一眼。早上喝到了非常好喝的咖啡，因此心情很好。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "80%"}} cols={3}>
                        {Nov_Third.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Typography className={myCaption}>
                        11.4日的印象
                    </Typography>
                </Stack>
                <Markdown>
                    5号早上，前往目黑区进行“圣地巡礼”环节，打卡了【僕の心のヤバイやつ】的取景地点，此生圆满🙏。
                    下午则去了皇居，然后就匆匆前往涉谷，在晚上登上了Shibuya Sky。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "80%"}} cols={2}>
                        {Yamada.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Typography className={myCaption}>
                        图1是山田和市川与大家走散的车展（目黑站）；图2则是二人学校的原型
                    </Typography>
                </Stack>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={2}>
                        {Nov_Fifth.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Typography className={myCaption}>
                        皇居和涉谷，一路上全是咒术回战
                    </Typography>
                </Stack>
                <Markdown>
                    在Shibuya Sukuranburu Kōsaten（涉谷全向十字路口）拍到了一张自己非常喜欢的照片。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "75%"}} cols={1}>
                        {Shibuya_Crossing.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Typography className={myCaption}>
                        涉谷十字路口
                    </Typography>
                </Stack>
                <Markdown>
                    11月6号，我们参观了东京塔和皇居外苑；我们还兜回了秋叶原，买了一些漫画。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={2}>
                        {Nov_Sixth.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                    <Typography className={myCaption}>
                        11.6日的白天
                    </Typography>
                    <Markdown>
                        11月6号的晚上，就是Coldplay的演唱会了。七点多的演出，我们四点多就到达了东京巨蛋，
                        但即便是这么早，巨蛋周围也已经被来自世界各地的人包围了。由日本人、英国人、韩国人，
                        也有许多中国人。在演出开始前，我购买了一些周边，没买到的唱片，希望能在新加坡再买到。
                        演唱会开始前是yoasobi的暖场，听说她们是日本当下的顶流。我们座位的视角也非常好，直面舞台。
                    </Markdown>
                </Stack>
            </Grid>
        </Grid>
    </Layout>);
}

const Tram_Hotel = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291816317.jpeg',
        title: 'Tram',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291816042.jpeg',
        title: 'Hotel',
    },
];

const Airport = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291803520.jpeg',
        title: 'Tram',
    },
];

const Ginza_Dinner = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291829578.jpeg',
        title: 'Ginza',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291829424.jpeg',
        title: 'Ginza',
    },
];

const Nov_Third = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291838185.jpeg',
        title: 'Breakfast',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291838581.jpeg',
        title: 'SensojiTemple',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291846964.png',
        title: 'God\'s Lot',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291840152.jpeg',
        title: 'TU',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291841113.jpeg',
        title: 'Railways',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291840369.jpeg',
        title: 'Genshin',
    },
];

const Yamada = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291857427.png',
        title: 'Yamada',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291854134.jpeg',
        title: 'Ichikawa',
    },
];

const Nov_Fifth = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291854998.jpeg',
        title: 'Breakfast',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291854731.jpeg',
        title: 'SensojiTemple',
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311291854940.jpeg",
        title: "ShibuyaSky"
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311291902531.jpeg",
        title: "Me"
    }
];


const Shibuya_Crossing = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291910427.jpeg',
        title: 'shibuya crossing',
    },
];

const Nov_Sixth = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291921777.jpeg',
        title: 'TokyoTower',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291921917.jpeg',
        title: 'Palace',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291921468.jpeg',
        title: 'Comics',
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202311291923951.jpeg",
        title: "Pork",
    }
];

export default Japan;
