import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GlobalStyle from '../Components/GlobalStyle';
import Layout from '../Components/Layout'

import Home from './home';
import Rhythm from './rhythm';
import Ages from './ages';
import Communities from './communities';

const Pages = () => {
    return (
        <Router>
            <GlobalStyle />
            <Layout>
                <Route exact path="/" component={Home} />
                <Route path="/ritmo" component={Rhythm} />
                <Route path="/edades" component={Ages} />
                <Route path="/comunidades" component={Communities} />
            </Layout>
        </Router>
    )
}

export default Pages;
