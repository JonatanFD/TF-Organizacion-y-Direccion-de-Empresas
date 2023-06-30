import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterContainer>
            <InformationContainer>
                <h2>Contáctanos</h2>
                <Information>
                    <span class="material-symbols-outlined">call</span>
                    <p>999-123-321-456</p>
                </Information>
            </InformationContainer>
            <InformationContainer>
                <h2>Nuestras Tiendas</h2>
                <Information>
                    <span class="material-symbols-outlined">store</span>
                    <p>Av. Lapadula 401 - Oficina 8, Lima, Lima</p>
                </Information>
            </InformationContainer>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    height: 150px;
    margin-top: 5rem;
    background-color: #feeb61;
    display: flex;
    color: black;
`;
const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
`;

const Information = styled.div`
    display: flex;

    & p {
        margin-left:10px;
    }
`;
