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
                        Nov. 2023 · Japan 🇯🇵🌸
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Markdown remarkPlugins={[remarkGfm]}>
                    ## 和霄哥的日本之行
                </Markdown>
                <Markdown remarkPlugins={[remarkGfm]}>
                    ### 东京🗼 · 11.3-11.6 - Tokyo
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
                </Stack>
                <Markdown>
                    11月6号的晚上，就是Coldplay的演唱会了。七点多的演出，我们四点多就到达了东京巨蛋，
                    但即便是这么早，巨蛋周围也已经被来自世界各地的人包围了。由日本人、英国人、韩国人，
                    也有许多中国人。在演出开始前，我购买了一些周边，没买到的唱片，希望能在新加坡再买到。
                    演唱会开始前是yoasobi的暖场，听说她们是日本当下的顶流。我们座位的视角也非常好，直面舞台。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={2}>
                        {Coldplay.map((item) => (
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
                        东京巨蛋的Coldplay演唱会
                    </Typography>
                </Stack>
                <Markdown>
                    尽管马山芋一行人迟到了几分钟，但是这场演出绝对是物有所值。 Viva la Vida、The Scientist等名曲应接不暇；
                    超酷的手环灯光给观众们提供了更立体、深刻的交互体会；马山芋超强的控场和超级丰富的互动经验...
                    诸多因素成就了一场完美的演唱会。另外，来自中国🇨🇳的粉丝也非常给力，得到了马山芋非常积极的回应！
                    身在海外的同胞也是很给力。
                </Markdown>
                <Markdown>
                    在演唱会的过程中，听到好几首曲子，自己的青春的剪影突然就涌入脑海中，令我数次热泪盈眶，
                    感觉此刻的自己就是世界上最幸福的人。我也很像感谢我的父母、朋友、老师们，一路陪伴我成长至今。
                    也特别感谢霄哥的陪伴，尽管他不了解Coldplay，但是还是非常有耐心的陪我度过这难忘的两个半小时。
                </Markdown>
                <Markdown remarkPlugins={[remarkGfm]}>
                    ### 富士山河口湖🗻 · 11.7 - Fuji
                </Markdown>
                <Markdown>
                    11月7好早上，我们从东京出发，前往富士山河口湖。由于没有提前一天购买巴士车票，
                    我们汽车站才发现直到下午三四点的车票都卖完了。 我们打开谷歌地图，
                    发现十分钟后马上有一辆动车开往甲府方向（我五年前来日本时还在哪里住了一晚上），
                    于是我们火急火燎提着行李赶过去乘车。这一趟车要买所谓的“特级券”，但是我们时间太匆忙了，
                    因此随便买了一张，结果买错了。在我们匆忙爬上车前，列车员还嘲笑我们："Why did you buy this."
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={2}>
                        {FujiTrain.map((item) => (
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
                        在八王子市转车的车展和Google Map的截图
                    </Typography>
                </Stack>
                <Markdown>
                    到达河口湖，已经是下午一点多。不过还没有到酒店Check in的时间，因此我们先寄存了行李，
                    出发在周围游览。我们打算租两辆自行车，在河口湖周围骑行。我们先找到了第一家租车店，
                    但是他们家的车租完了，因此我们找了第二家，但是第二家店的自行车也租完了。不过，我们运气特别好，
                    恰好有两位白人小哥前来换车，而我们后脚又有几位顾客进店，我们正好“抢”到了两辆自行车。
                    于是，我们沿着河口湖，骑车向北出发。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={2}>
                        {Cycling.map((item) => (
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
                        河口湖骑行
                    </Typography>
                </Stack>
                <Markdown>
                    到了一处神社，我们开始爬山，并且拍到了非常好看的照片。只不过是山有些难爬，
                    而且在下山的时候，我和霄哥一人摔了一个屁股蹲。爬这座山为我们后面几天的体力透支埋下了伏笔。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "30%"}} cols={1}>
                        {MtFuji.map((item) => (
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
                        富士山
                    </Typography>
                </Stack>
                <Markdown>
                    下山后，我们骑车返回酒店。晚上的河口湖非常宁静，能够望见远处的富士山。
                    想必住在这里住民，也会很幸福吧。我们去吃了回转寿司（非常便宜），然后在酒店周围逛了逛就休息了。
                    第二天一早就要出发前往京都，以防万一，我们提前在网上买了新干线的车票。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "50%"}} cols={1}>
                        {Lake.map((item) => (
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
                        傍晚的河口湖
                    </Typography>
                </Stack>
                <Markdown>
                    第二天一早，我们就出发前往京都。出发之前，我们在罗森便利店拍了一张照片。
                    也就只有一大早能拍到照片，其他时间游客非常多，根本没法抢到拍照的位置。
                    随后，我们先乘巴士抵达三岛市，然后乘坐新干系前往日本的文化中心，京都。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "50%"}} cols={1}>
                        {Lawson.map((item) => (
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
                        罗森便利店经典机位
                    </Typography>
                </Stack>
                <Markdown remarkPlugins={[remarkGfm]}>
                    ### 京都🍵 · 11.8 - 11.10 - Kyoto
                </Markdown>
                <Markdown>
                    我们乘坐新干线来到京都，新干线的速度不比中国的高铁，但是新干线的车厢环境、座位舒适程度还是要更胜一筹。
                    京都站给人的第一印象就是繁忙，因为几条重要的交通干线都汇聚在京都站。下午三点，我们抵达了我们的住处，
                    小春日和旅宿。后面几天，我们在这里获得了非常棒的住宿体验。
                </Markdown>
                <Markdown>
                    我们在Airbnb上找到了这家民宿，它是经典的日式一户建，一共有四个房间，
                    我们预订了其中的一个房间，名字叫做“市松”。京都是日本的文化中心，
                    而我们又能住在民宿中，能够以更加深刻的方式体验日本文化，因此我们对这一次住宿相当期待。
                    我们从京都站乘坐电车到丹波口站，出站后往南走了大概几百米，随后转进一个小巷子中。
                    我们刚好遇到了另外两位拖着行李箱的游客，于是我们跟着他们一同前进。不一会，
                    他们在一个门牌前停了下来，我们也走上去一看，发现果然是一家写着“小春日和”的店面。
                </Markdown>
                <Markdown>
                    店长原本坐在屋内，见外面有人，赶忙出来热情迎接。他和我们用英语打了招呼，然后把先到的两位旅客带了进去；
                    过了一会，他出来用中文和我们说：“不好意思，那两个韩国人先到的，请你们现在外面等一下。”
                    我这时才反应过来，原来店长是台湾人。
                </Markdown>
                <Markdown>
                    大概过了二十分钟，店长出来和笑着我们说，“不好意思，花了一点时间，这两个韩国人还会说中文。你们请进吧。”
                    我们就先进屋了。屋子是玻璃门开，并不算高，出入的时候要小心碰头。我们进去时，韩国人还在一楼收拾东西，
                    我们和他们寒暄了几句，然后店长就开始和我们单独聊事情了。店长先和我们介绍了一下屋子的简单情况以及设施，
                    随后介绍了屋子周边的一些本地特色小店，有鱼生店、深夜食堂、温泉等等。在说完这些之后，
                    店长就拿出了一张很大的地图，并且开始用笔向我们介绍他推荐的京都游玩路线——不得不说，店长对京都真的是十分了解，
                    规划做的井井有条。我和霄哥都没有这么详细地计划过，这回总算是有点头绪了。店长大概和我们讲了二十分钟，
                    随后就帮我们提行李到房间了。
                </Markdown>
                <Markdown>
                    我们的房间比想象中的要大，即便是住三个人应该也是绰绰有余。店长帮我们安顿好后，就出门去忙了。
                    我们在屋子的一楼和二楼简单探索了一下，发现洗手间和淋浴间非常干净舒适，公共区域也有免费的零食和咖啡；
                    店长的布置非常用心，会在一些小角落放置可爱的摆件。整个屋子空间不大，但是利用的很合理，
                    给人的第一印象就是绝佳的。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={2}>
                        {Airbnb.map((item) => (
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
                        小春日和
                    </Typography>
                </Stack>
                <Markdown>
                    当然，我们并不会在房间待太久，因为京都还有很多地方需要去探索。我们稍事歇息，便从丹波口站再出发，
                    准备前往京都北部的岚山。一路上，我们看到不少放学的孩子，大概是国中生。他们看上去比中国的学生快乐不少。
                </Markdown>
                <Markdown>
                    大约二十分钟就到了岚山，即便是吃饭的时间，这里游客依然非常多。岚山的主要景点是天龙寺，以及竹林。
                    地方不大，很快便能逛完。特殊的地方并不算多，倒是路边的小商贩比较有意思。我和霄哥买了一个糯米团子，
                    上面淋着甜的墨鱼汁，还是非常好吃的。
                </Markdown>
                <Stack style={{alignItems: "center"}}>
                    <ImageList sx={{width: "70%"}} cols={3}>
                        {mt_lan.map((item) => (
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
                        岚山
                    </Typography>
                </Stack>
                <Markdown>
                    游览完岚山后，我们去了二条城。由于行程太紧，而二条城恰好开放了夜间活动，因此我们就打算在晚上游览这里。
                    不过说实话，由于光线实在是太暗，我们几乎看不清楚什么，所以整体上的感觉是——二条城倒也没什么可以看的。
                    我们早早回到了住处，便准备休息了。除了我们和韩国人，另外两户旅客都是香港人，我们和他们各自打了招呼。
                    不过我们准备睡觉的时候，白天遇到的两位韩国人也没有回来。
                </Markdown>
            </Grid>
        </Grid>
    </Layout>)
        ;
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
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291854940.jpeg',
        title: 'ShibuyaSky'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291902531.jpeg',
        title: 'Me'
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
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202311291923951.jpeg',
        title: 'Pork',
    }
];

const Coldplay = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312132202084.jpeg',
        title: 'CP1',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312132203817.jpeg',
        title: 'CP2',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312132203556.jpeg',
        title: 'CP3',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312132202879.jpeg',
        title: 'CP4',
    }
];

const FujiTrain = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312212200883.jpeg',
        title: 'Station',
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312212202803.png',
        title: 'Google_Map',
    },
];

const Cycling = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312220000233.jpeg',
        title: 'Docker'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312212359396.jpeg',
        title: 'Docker'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312212358686.jpeg',
        title: 'Me'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312212359924.jpeg',
        title: 'Docker'
    },
]

const MtFuji = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312220004528.jpeg',
        title: 'MtFuji'
    },
]

const Lake = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312220010212.jpeg',
        title: 'Lake'
    },
]

const Lawson = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312220015639.jpeg',
        title: 'Lawson'
    },
]

const Airbnb = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312220031382.jpeg',
        title: 'bnb1'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312272038683.jpeg',
        title: 'bnb3'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312220034143.png',
        title: 'bnb2'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312272037511.jpeg',
        title: 'room'
    },
]

const mt_lan = [
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312272053512.jpeg',
        title: 'bnb1'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312272054716.jpeg',
        title: 'bnb3'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312272054076.jpeg',
        title: 'bnb2'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312272054325.jpeg',
        title: 'room'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312272054155.jpeg',
        title: 'bnb1'
    },
    {
        img: 'https://raw.githubusercontent.com/Enqurance/Figures/main/202312272055877.jpeg',
        title: 'bnb3'
    },
]

export default Japan;
