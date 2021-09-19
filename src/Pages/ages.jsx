import React, { useState, useEffect } from 'react';
import { Chart } from '../Components/Chart';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 60em;
    margin: 3% auto;

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

const ChartWrapper = styled.div`
    padding: 2em;
    margin: 0 auto;
    border-style: solid;
    border-width: 2px;
    border-color: #808080;
    border-radius: 10px;
    background-color: white;
    box-shadow: 14px 14px #bdf2ec;

    @media (max-width: 850px) {
        border-width: 1px;
        padding: 0.1em;
    }
`;



const Ages = () => {
    useEffect(() => {
        document.title = 'Vacunación COVID-19 en España - Edades';

        async function getData() {
            const response = await fetch('https://covid-vacuna.app/data/latest.json');
            const data = await response.json();
            const totalJson = data[data.findIndex( communitie => communitie.ccaa === "Totales" )];

            // Función para obtener la población total de cada rango de edad
            const totalPopulation = () => {
                let population = [];
                totalJson.etarios.unaDosis.etarioRangos.map((range) => {
                    population.push(range.personasINE);
                });

                return population;
            }

            // Función para obtener la población con una dosis de cada rango de edad
            const populationOneDose = () => {
                let population = [];
                totalJson.etarios.unaDosis.etarioRangos.map((range) => {
                    population.push(range.vacunados);
                });

                return population;
            }

            // Función para obtener la población con una dosis de cada rango de edad
            const populationTwoDoses = () => {
                let population = [];
                totalJson.etarios.pautaCompleta.etarioRangos.map((range) => {
                    population.push(range.vacunados);
                });

                return population;
            }

            setChartData({
                labels: ['12-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '≥79'],
                datasets: [
                    {
                    label: 'Población Total',
                    data: totalPopulation(),
                    backgroundColor: 'rgb(113, 124, 209)',
                    },
                    {
                    label: 'Una Dosis',
                    data: populationOneDose(),
                    backgroundColor: 'rgb(50, 66, 209)',
                    },
                    {
                    label: 'Pauta Completa',
                    data: populationTwoDoses(),
                    backgroundColor: 'rgb(0, 18, 168)',
                    }
                ]
            });
        };
        getData();
    }, []);

    const [chartData, setChartData] = useState({});

    return (
        <div>
            <Wrapper>
                <Title>Vacunación por franjas de edad</Title>
                <ChartWrapper>
                    <Chart chartData={chartData} />
                </ChartWrapper>
            </Wrapper>
        </div>
    )
}

export default Ages;