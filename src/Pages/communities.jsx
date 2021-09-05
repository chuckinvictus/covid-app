import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 70%;
    margin: 3.3em auto;

    @media (max-width: 700px) {
        width: 85%;
        margin: 11em auto;
    }
`;

const Title = styled.p`
    color: #00469c;
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
`;

const ChartWrapper = styled.table`
    width: 100%;
    height: 27em;
    margin: 0 auto;
    border-style: solid;
    border-width: 2px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 14px 14px #bdf2ec;

    @media (max-width: 850px) {
        border-width: 1px;
    }
`;

const Communities = () => {


    return (
        <div>
            <Wrapper>
                <Title>Vacunación por comunidades autónomas</Title>
                <ChartWrapper></ChartWrapper>
            </Wrapper>
        </div>
    )
}

export default Communities;