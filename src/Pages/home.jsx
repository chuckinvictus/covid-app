import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import astrazeneca from '../img/astrazeneca-logo.png'
import janssen from '../img/janssen-logo.png'
import moderna from '../img/moderna-logo.png'
import pfizer from '../img/pfizer-logo.png'

const Wrapper = styled.div`
    margin: 3% auto;

    @media (max-width: 700px) {
        margin: 11em auto;
    }
`;

const Title = styled.p`
    color: #00469c;
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
`;

const ShotsWrapper = styled.div`
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 850px) {
        flex-direction: column;
    }
`;

const ShotsContainer = styled.div`
    border-style: solid;
    border-width: 2px;
    border-color: #808080;
    border-radius: 10px;
    background-color: white;
    margin: 1.1em;
    margin-top: 0;
    padding: .5em 2em 3em 2em;
    text-align: center;
    width: 15em;
    height: 21em;
    box-shadow: 14px 14px #bdf2ec;

    @media (max-width: 850px) {
        margin-bottom: 2.2em;
        padding: 1em;
        width: 75vw;
        height: auto;
        border-width: 1px;
    }
`;

const ShotsHeader = styled.p`
    font-size: 1.5em;
    font-weight: bold;
    color: #2c7cdc;
    margin-top: .1em;
    margin-bottom: .4em;
`;

const ShotsNumber = styled.p`
    font-size: 2em;
    margin: .3em;
    font-weight: bold;
`;

const ShotsPercentage = styled.p`
    font-size: 1.2em;
    margin: 0px;
`;

const CompaniesWrapper = styled.div`
    margin-top: 3em;
`;

const CompanyWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CompanyNumber = styled.p`
    color: #555;
    margin-left: 15px;
    font-weight: bold;
    float: right;
    margin-top: .3em;
`;

const ProgressContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    margin: 3em auto;

    @media(max-width: 700px) {
        margin: 2em auto;
        width: 90%;
    }
`;

const ProgressBar = styled.div`
    border-style: solid;
    border-radius: 20px;
    margin-bottom: 4em;
    transition: .3s;
    background: white;

    :hover {
        padding: .2em;
    }
    
`;

const Progression1 = styled.div`
    border-radius: 20px;
    height: 2.1em;
    width: ${props => props.width}%;
    background-color: #0099ff;
`;

const Progression2 = styled.div`
    border-radius: 20px;
    height: 2.1em;
    width: ${props => props.width}%;
    background-color: #0099ff;
`;

const ProgressionNumber = styled.p`
    margin: .3em 2em 0 0;
    float: right;
    font-weight: bold;
`;

const Home = () => {
    const[totalState, setTotalState] = useState();

    useEffect(() => {
        document.title = 'Vacunación COVID-19 en España - Inicio';

        getData();

        async function getData() {
            const response = await fetch('https://covid-vacuna.app/data/latest.json');
            const data = await response.json();
            const totalJson = data[data.findIndex( communitie => communitie.ccaa === "Totales" )];
            setTotalState(totalJson);
        }
        
    }, []);

    

    return (
        <div>
            <Wrapper>
            <Title>Estado de la vacunación</Title>
            <ShotsWrapper>

                <ShotsContainer>

                    <ShotsHeader>Dosis distribuidas</ShotsHeader>
                    
                    {totalState && (
                        <ShotsNumber>{totalState.dosisEntregadas.toLocaleString()}</ShotsNumber>
                    )}
                    
                    <CompaniesWrapper>

                        <CompanyWrapper>
                            
                            {totalState && (
                                <div>
                                <img src={pfizer} width="75px" alt="Astrazeneca" />
                                <CompanyNumber>{totalState.dosisEntregadasPfizer.toLocaleString()}</CompanyNumber>
                                </div>
                            )}
                        </CompanyWrapper>

                        <CompanyWrapper>
                            
                            {totalState && (
                                <div>
                                <img src={astrazeneca} width="75px" alt="Astrazeneca" />
                                <CompanyNumber>{totalState.dosisEntregadasAstrazeneca.toLocaleString()}</CompanyNumber>
                                </div>
                            )}
                        </CompanyWrapper>

                        <CompanyWrapper>
                            
                            {totalState && (
                                <div>
                                <img src={moderna} width="75px" alt="Astrazeneca" />
                                <CompanyNumber>{totalState.dosisEntregadasModerna.toLocaleString()}</CompanyNumber>
                                </div>
                            )}
                        </CompanyWrapper>

                        <CompanyWrapper>
                            
                            {totalState && (
                                <div>
                                <img src={janssen} width="75px" alt="Astrazeneca" />
                                <CompanyNumber>{totalState.dosisEntregadasJanssen.toLocaleString()}</CompanyNumber>
                                </div>
                            )}
                        </CompanyWrapper>

                        </CompaniesWrapper>

                </ShotsContainer>
                
                <ShotsContainer>

                    <ShotsHeader>Dosis administradas</ShotsHeader>
                    {totalState && (
                        <ShotsNumber>{totalState.dosisAdministradas.toLocaleString()}</ShotsNumber>
                    )}
                    
                    <ShotsPercentage>% sobre distribuidas</ShotsPercentage>
                    {totalState && (
                        <ShotsNumber>{String(Math.round(totalState.porcentajeEntregadas.toFixed(4) * 10000) / 100).replace('.', ',')}%</ShotsNumber>
                    )}
                    
                    <br />

                    <ShotsHeader>Personas con al menos una dosis</ShotsHeader>
                    {totalState && (
                        <ShotsNumber>{totalState.dosisPrimeraDosis.toLocaleString()}</ShotsNumber>
                    )}
                    

                </ShotsContainer>

                <ShotsContainer>

                    <ShotsHeader>Personas con pauta completa</ShotsHeader>
                    {totalState && (
                        <ShotsNumber>{totalState.dosisPautaCompletada.toLocaleString()}</ShotsNumber>
                    )}

                    <ShotsPercentage>% sobre administradas</ShotsPercentage>
                    {totalState && (
                        <ShotsNumber>{String(Math.round(totalState.dosisPautaCompletada * 100 / totalState.dosisAdministradas * 100) / 100).replace('.', ',')}%</ShotsNumber>
                    )}

                </ShotsContainer>

            </ShotsWrapper>

            <ProgressContainer>

                <h4>Población con al menos una dosis</h4>
                <ProgressBar>
                    <Progression1 width={totalState && (totalState.porcentajePoblacionPrimeraDosis * 100)}>
                        {totalState && (
                        <ProgressionNumber id="progression1">{(Math.round(totalState.porcentajePoblacionPrimeraDosis * 10000) / 100).toFixed(2).replace('.', ',')}%</ProgressionNumber>
                    )}
                    </Progression1>
                </ProgressBar>

                <h4>Población vacunada completamente</h4>
                <ProgressBar>
                    <Progression2 width={totalState && (totalState.porcentajePoblacionCompletas * 100)}>
                        {totalState && (
                        <ProgressionNumber id="progression2">{(Math.round(totalState.porcentajePoblacionCompletas * 10000) / 100).toFixed(2).replace('.', ',')}%</ProgressionNumber>
                    )}
                    </Progression2>
                </ProgressBar>
            </ProgressContainer>
            </Wrapper>
        </div>
        
)
}

export default Home
