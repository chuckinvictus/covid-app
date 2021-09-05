import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
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

const ChartWrapper = styled.div`
    width: 90%;
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
    }
`;



const Ages = () => {
    const[chartData, setChartData] = useState({});

    const data = {
    labels: ['12-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '≥79'],
    datasets: [
        {
        label: 'Población Total',
        data: [`${1}`, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
        },
        {
        label: 'Una Dosis',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
        },
        {
        label: 'Pauta Completa',
        data: [3, 10, 13, 15, 22, 15],
        backgroundColor: 'rgb(75, 192, 192)',
        },
    ],
    };

    const options = {
    scales: {
        yAxes: [
        {
            ticks: {
            beginAtZero: true,
            },
        },
        ],
    },
    };

    const GroupedBar = () => (
    <>
        <Bar data={data} options={options} />
    </>
    );

    useEffect(() => {
        document.title = 'Vacunación COVID-19 en España - Edades';

        getData();

        async function getData() {
            const response = await fetch('https://covid-vacuna.app/data/latest.json');
            const data = await response.json();
            const totalJson = data[data.findIndex( communitie => communitie.ccaa === "Totales" )];

            const agesOneDose = totalJson.etarios.unaDosis.etarioRangos;
            const agesTwoDoses = totalJson.etarios.unaDosis.etarioRangos;
            agesOneDose.map((rango) => {
                console.log(rango.vacunados)
            })
            
            setChartData({
                datasets: [
                    {
                        data: agesOneDose.map((rango) => rango.vacunados)
                    }
                ]
            });
        }
        
    }, []);

    return (
        <div>
            <Wrapper>
                <Title>Vacunación por franjas de edad</Title>
                <ChartWrapper>
                    <GroupedBar />
                </ChartWrapper>
            </Wrapper>
        </div>
    )
}

export default Ages;