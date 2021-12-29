import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

const HeaderBar = styled.header`
    backdrop-filter: blur(3px);
    background: rgba(255, 255, 255, 0.795);
    position: fixed;
    align-items: center;
    z-index: 1;
    width: 100%;
    top: 0;

    @media (max-width: 700px) {
        position: static;
        backdrop-filter: blur(5px);
        width: 95vw;
        margin-bottom: 9em;
        width: 100%;
        margin-top: 0;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const HeaderText = styled.p`
    margin-bottom: .5em;
    text-align: center;
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    font-size: 35px;
    font-weight: bold;
    color: #070052;
    padding-bottom: 8px;

    @media (max-width: 700px) {
        font-size: 45px;
        margin-top: .7em;
    }
`;

const Header = () => {
    return (
    <HeaderBar>
        <HeaderText>Vacunación COVID-19 en España</HeaderText>
        <ButtonContainer>
            <Link to={'/'}>Inicio</Link>
            <Link to={'/edades'}>Edades</Link>
        </ButtonContainer>
    </HeaderBar>
)
}

export default withRouter(Header);