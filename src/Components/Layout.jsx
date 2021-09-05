import React, { Fragment } from 'react'
import ParticleComponent from './ParticleComponent';
import styled from 'styled-components';

import Header from './Header'

const Main = styled.main`
    padding: 3em;
    margin-top: 100px;

    @media (max-width: 700px) {
        margin-top: -120px;
        padding: 0;
    }
`;

const ParticlesDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
`;

const ContentDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const Layout = ({ children }) => {
    return (
        <Fragment>
            <ParticlesDiv>
                <ParticleComponent />
            </ParticlesDiv>
            <ContentDiv>
                <Header />
                <Main>{children}</Main>
            </ContentDiv>
        </Fragment>
    
    );
}

export default Layout
