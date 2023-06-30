import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import AnimateCarrusel from '../Animations/AnimateCarrusel';

export default function Carrusel() {
    const [picture, setPicture] = useState(0);

    const nextSlide = () => {
        setPicture((prevIndex) =>
          prevIndex === 3 ? 0 : prevIndex + 1
        );
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 
        3000); // Cambia el intervalo de tiempo según tus necesidades

        return () => clearInterval(interval);
    }, []);

    return (
        <CarruselContainer>
            <ImagesContainer>
                <AnimateCarrusel picture={picture}/>
                
                <SelectorContainer>
                    <Dot selected={picture === 0} onClick={() => setPicture(0)}/>
                    <Dot selected={picture === 1} onClick={() => setPicture(1)}/>
                    <Dot selected={picture === 2} onClick={() => setPicture(2)}/>
                    <Dot selected={picture === 3} onClick={() => setPicture(3)}/>
                </SelectorContainer>
            </ImagesContainer>
        </CarruselContainer>
    );
}

const CarruselContainer = styled.div``;
const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const SelectorContainer = styled.div`
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
`;
const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    opacity: ${(props) => props.selected ? "100%" : "60%"};
`