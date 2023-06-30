import React from 'react';
import styled from 'styled-components';
import cust_1 from './images/cust_1.png';
import cust_2 from './images/cust_2.png';
import cust_3 from './images/cust_3.png';
import cust_4 from './images/cust_4.png';
import cust_5 from './images/cust_5.png';
import cust_6 from './images/cust_6.png';

export default function Custom() {
    return (
        <CustomContainer>
            <Title>
                <h2>Diseños de la comunidad</h2>
            </Title>
            <ComunityContainer>
                <Picture src={cust_1}></Picture>
                <Picture src={cust_2}></Picture>

                <Picture src={cust_3}></Picture>
                <Picture src={cust_4}></Picture>

                <Picture src={cust_5}></Picture>
                <Picture src={cust_6}></Picture>
            </ComunityContainer>
            <ServiceContainer>

            </ServiceContainer>
        </CustomContainer>
    );
}

const CustomContainer = styled.div`
    width: 1366px;
`;
const Title = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    background-color: #feeb61;
    color: black;
    padding: 0 0 0 20px;
`;
const ComunityContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 500px);
    justify-items: center;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
`;
const Picture = styled.img`
    width: 400px;
    border-radius: 32px;
    border: 10px solid var(--bg-secundary);
    padding: 10px;
`;

const ServiceContainer = styled.div`
    height: 100px;

`
