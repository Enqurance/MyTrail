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
import {blue} from '@mui/material/colors';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const Japan = () => {
    return (<Layout pageTitle="TestPost">
        <Grid container>
            <Grid item xs={12}>
                <Stack direction={"row"}>
                    <Flight sx={{fontSize: 40}} style={{color: blue[600], opacity: 0.8}}></Flight>
                    <Typography className={postTitle} style={{color: blue[600], opacity: 0.8}}>
                        Oct. 2023 · Yantai City🌊
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Markdown>
                    十月初从家里回到学校后，尽管每天都比较忙碌，但心里仍旧向往着能再出去转转。
                    恰好看到国航有从北京到烟台的特价机票，并且烟台的酒店价格也不算贵，
                    而我也有一段时间没有去过海边了。因此我迅速订好了机酒，安排了这次行程。
                </Markdown>
                <Markdown>
                    航班早上八点从北京首都机场出发，飞行一个小时后到达烟台蓬莱国际机场。
                    工作日早上的首都机场客流量非常大，即便是商务舱的安检通道都要排几十分钟的队；
                    首都机场T2的安检通道也有待升级。不过我还算幸运，比较从容地登上了飞机。
                    飞机从渤海上空飞往烟台，一路上天气晴朗，非常出片。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "80%"}} cols={2}>
                        {plane.map((item) => (
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
                        大海和蓝天
                    </Typography>
                </Stack>
                <Markdown>
                    到达烟台蓬莱机场后，我乘坐大巴来到市区，随后打车前往鑫广万豪酒店办理入住。
                    一路上，天气晴朗，温度舒适，车辆也非常少，淡季旅游的优点可见一斑。
                </Markdown>
                <Markdown>
                    酒店坐落在烟台开发区，一面临海，周围非常安静，楼下就有沙滩。
                    推开阳台门，便可以看到渤海。带着腥味儿的海风徐徐吹来，
                    白色的浪花像一道道拍打在沙滩上，发出沙沙的声响，实在是非常惬意。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "40%"}} cols={1}>
                        {hotel.map((item) => (
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
                        酒店，可惜忘记在房间里拍照了
                    </Typography>
                </Stack>
                <Markdown>
                    早上起的比较早，到达酒店时我已经有点累了，因此我下午在酒店睡了一觉。
                    睡醒已经是傍晚，我在楼下的沙滩转了转，随后在酒单的中餐厅吃了99一份的自助粤式点心。
                    一边享用家乡味道的茶点，一边看直播，把工作的事情忘在后脑勺，好不惬意。
                    吃完饭，我换上拖鞋，在海水里趟了趟。不过晚上实在是有点冷，因此我也早早回房间休息了。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={2}>
                        {eve.map((item) => (
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
                        第一天的晚上，粤菜和海边
                    </Typography>
                </Stack>
                <Markdown>
                    第二天，我起了一个大早，准备去烟台市区逛逛。我在酒店的餐厅用了早餐，
                    早餐的出品不算优质，不过海景作为也值回餐票钱了。用完早餐后，
                    我乘坐公交前往第一海水浴场——烟台的公交不论坐到哪里都只需要一块钱。
                    公交上，老年人居多，一路上一直在开心地唠家常；也有一些年轻人，
                    都是二三十岁的少男少女。能看出来，这里的生活节奏并不快。
                </Markdown>
                <Markdown>
                    大约过了一个小时，我到达了第一海水浴场。浴场人并不多，但是风景非常好。
                    阳光温暖，温度也刚刚合适，看到大海令人心旷神怡。我沿着海边一直走，
                    路上看到了一些游客，还有周末出游的本地人。人并不算多，但是大家看上去都非常放松，
                    享受着这惬意的周末。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={2}>
                        {beach.map((item) => (
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
                        第一天的晚上，粤菜和海边
                    </Typography>
                </Stack>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "50%"}} cols={1}>
                        {fisher.map((item) => (
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
                        独钓
                    </Typography>
                </Stack>
                <Markdown>
                    在海边待了几个小时，我便出发前往市区。所城里一代便是烟台主要的商业区了，
                    这里有古城、商业步行街和公园，在周末有非常多的市民在这里活动。
                    我在烟台古城逛了逛，然后按照学妹的推荐来到一家“广兴果园”品尝他们家的苹果汁，
                    的确非常好喝！很可惜没有买一些他们家的苹果带回北京。
                    随后我便去了烟台山，这是一个建在一座小山上的公园，面朝大海。步行十几分钟就可以登上山顶，
                    山顶上有一个灯塔，登上去可以眺望烟台全市。只可惜人太多了，我也没有强求。
                    山下则是一条朝阳街步行街，街旁开了许多小店，看上去非常的精致。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "60%"}} cols={2}>
                        {city.map((item) => (
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
                        市区游
                    </Typography>
                </Stack>
                <Markdown>
                    游览完市区，差不多到傍晚了。之前在长沙没有起到共享电单车，因此这次我打算骑一段，随后再打车回酒店。
                    路上，我看到了非常美的夕阳。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "60%"}} cols={1}>
                        {sunset.map((item) => (
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
                        sunset
                    </Typography>
                </Stack>
                <Markdown>
                    白天的行程算不上辛苦，不过我也在外面兜兜转转了十几个小时，因此就没有安排别的活动了。
                    休息一晚，第二天大早在酒店用过早餐后，我就出发前往机场，踏上了回北京的航班。
                </Markdown>
                <Markdown>
                    尽管只在烟台待了不到三天，但是烟台的确是一所迷人的城市。
                    海、蓝天、植物和友好的山东人民一同构成了这一座美丽的城市。
                </Markdown>
                <Markdown>
                    或许，偶尔来烟台逛逛，躲避大城市的喧嚣，也不错。
                </Markdown>
            </Grid>
        </Grid>
    </Layout>)
        ;
}

const plane = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202401031905015.jpeg',
        title: 'sky1',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202401031905176.jpeg',
        title: 'sky2',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202401031906544.png',
        title: 'sea1',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202401031906037.png',
        title: 'sea2',
    },
]

const hotel = [
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401031918583.jpeg",
        title: "hotel1",
    },
]

const eve = [
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401031922520.png",
        title: "dinner",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401031926622.jpeg",
        title: "night",
    },
]

const beach = [
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032006446.jpeg",
        title: "beach",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032007617.jpeg",
        title: "reed",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032007864.jpeg",
        title: "buildings",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032008505.jpeg",
        title: "mountain",
    },
]

const fisher = [
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032014131.png",
        title: "fisher",
    }
]

const city = [
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032028902.jpeg",
        title: "ancient city",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032029096.jpeg",
        title: "light house",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032029856.jpeg",
        title: "starbucks",
    },
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032029756.jpeg",
        title: "shop",
    },
]

const sunset = [
    {
        img: "https://raw.githubusercontent.com/Enqurance/Figures/main/202401032036247.jpeg",
        title: "sunset",
    }
]
export default Japan;
