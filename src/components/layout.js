import * as React from 'react'
import {
    container,
    containerGlobal,
} from './layout.module.css'
import Navigator from './navigator.js'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="100vh" className={containerGlobal}>
                <Container maxWidth="lg">
                    <div className={container}>
                        <Navigator></Navigator>
                        <main>
                            {children}
                        </main>
                    </div>
                </Container>
            </Container>
        </React.Fragment>
    )
}

export default Layout