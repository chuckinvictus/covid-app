import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'

const Chart = styled.canvas`
    width: 400px;
    height: 400px;
`;

const Rhythm = () => {
    useEffect(() => {
        document.title = 'Vacunación COVID-19 en España - Ritmo'
    })

    return (
        <div>
            
        </div>
    )
}

export default Rhythm
