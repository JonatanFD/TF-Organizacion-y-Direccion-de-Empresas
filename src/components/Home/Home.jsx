import React from 'react';
import styled from 'styled-components';
import CASE from '../../styles/case.png';
import MOUSE from '../../styles/mouse.png';


export default function Home() {
    return (
        <HomeContainer>
            <MainTitleContainer>
                <h2>Diseños personalizados de</h2>
                <h2>alta calidad</h2>

                <p>
                    Dale vida a tu creatividad expresando en tus dispositivos
                    cualquier
                </p>
                <p>
                    diseño que desees, ya sea el logo de tu serie favorita,
                    personajes
                </p>
                <p>icónicos o incluso tus propias creaciones</p>
            </MainTitleContainer>

            <Cards>
                <CardContainer>
                    <CardMain>
                        <CardImgContainer>
                            <img src={CASE} alt="CASE" />
                        </CardImgContainer>

                        <ReviewContainer>
                            <h2>Lleva tu creatividad</h2>
                            <h2>al siguiente nivel</h2>

                            <p>Expresa lo que más te gusta en tus</p>
                            <p>periféricos favoritos</p>
                        </ReviewContainer>
                    </CardMain>
                </CardContainer>

                <CardContainer>
                    <CardMain>
                        <ReviewContainer>
                            <h2>Tu dispositivo</h2>
                            <h2>Tu lienzo</h2>

                            <p>Dale vida a tus ideas. Desde diseños minimalistas</p>
                            <p>hasta explosiones de color, hacemos que tu</p>
                            <p>mouse sea una expresión única de tu creatividad</p>

                            <span>Conocer más</span>
                        </ReviewContainer>

                        <CardImgContainer>
                            <img src={MOUSE} alt="MOUSE" />
                        </CardImgContainer>
                    </CardMain>
                </CardContainer>
            </Cards>
        </HomeContainer>
    );
}
const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
`;
const MainTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 101.5px 0;
    & h2 {
        font-size: 80px;
        font-weight: 600;
        line-height: 100px;
    }
    & h2:last-of-type {
        margin-bottom: 2rem;
    }
    & p {
        font-size: 28px;
        font-weight: 400;
        opacity: 80%;
    }
`;

// CARDS
const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
`;
const CardMain = styled.div`
    background: var(--bg-terciary);
    height: 490px;
    width: 1300px;
    border-radius: 32px;
    display: flex;
    padding: 2rem 2rem;
`;
const CardImgContainer = styled.div`
    background-color: var(--bg-img);
    padding: 1rem;
    border-radius: 32px;
    width: 38.46%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        height: 384px;
    }
`;

// REVIEW

const ReviewContainer = styled.div`
    width: 61.54%;
    padding-left: 5rem;

    & h2 {
        font-size: 48px;
    }
    & p {
        font-size: 24px;
        opacity: 80%;
    }
`;

CardImgContainer.displayName = 'CardImgContainer';
CardMain.displayName = 'CardMain';
HomeContainer.displayName = 'HomeContainer';
MainTitleContainer.displayName = 'MainTitleContainer';
CardContainer.displayName = 'CardContainer';
ReviewContainer.displayName = 'ReviewContainer';
Cards.displayName = 'Cards';
