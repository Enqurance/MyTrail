import * as React from 'react'
import {Link} from 'gatsby'
import {
    enquranceWord, navHomepageText, navSiderWord
} from './navbar.module.css'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from "@mui/material/Avatar";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';

const Navigator = () => {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const [isMobile, setIsMobile] = React.useState(true);

    React.useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();

        window.addEventListener('resize', checkIfMobile);
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);

    const list = () => (
        <div
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                <Link to="/" className={navHomepageText}>
                    <Item>
                        <span className={navSiderWord}>Homepage</span>
                    </Item>
                </Link>
                <Link to="/resume" className={navHomepageText}>
                    <Item>
                        <span className={navSiderWord}>Resume</span>
                    </Item>
                </Link>
                <Link to="/" className={navHomepageText}>
                    <Item>
                        <span className={navSiderWord}>Blogs</span>
                    </Item>
                </Link>
            </List>
        </div>
    );

    return (<Box sx={{flexGrow: 1}}>
        <Grid container style={{paddingTop: "30px", paddingBottom: "30px"}}>
            <Grid item xs={12}>
                <Stack direction="row">
                    <Item>
                        <Avatar alt="Enqurance"
                                src="https://raw.githubusercontent.com/Enqurance/Figures/main/202311011725041.png"
                                sx={{width: 50, height: 50}}
                                variant="rounded"
                        />
                    </Item>
                    <Item style={{display: 'flex', alignItems: 'center'}}>
                        <Link to="/" className={navHomepageText}>
                            <span className={enquranceWord}>Enqurance</span>
                        </Link>
                    </Item>
                    <Box flexGrow={1}/>
                    {isMobile ? (
                        <Item>
                            <IconButton aria-label="menu" onClick={toggleDrawer(true)} size={"large"}>
                                <MenuIcon></MenuIcon>
                            </IconButton>
                            <Drawer
                                anchor='top'
                                open={isOpen}
                                onClose={toggleDrawer(false)}
                                style={{width: '100vw', height: '100vh'}}
                            >
                                {list()}
                            </Drawer>
                        </Item>
                    ) : (
                        <Item style={{display: 'flex', alignItems: 'center'}}>
                            <Link to="/" className={navHomepageText} style={{paddingRight: "30px"}}>
                                <span className={enquranceWord}>Homepage</span>
                            </Link>
                            <Link to="/resume" className={navHomepageText} style={{paddingRight: "30px"}}>
                                <span className={enquranceWord}>Resume</span>
                            </Link>
                            <Link to="/blogs" className={navHomepageText}>
                                <span className={enquranceWord}>Blogs</span>
                            </Link>
                        </Item>
                    )}
                </Stack>
            </Grid>
        </Grid>
    </Box>)
}

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    boxShadow: 'none', ...theme.typography.body2,
    padding: theme.spacing(1),
}));
export default Navigator