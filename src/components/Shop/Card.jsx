import React from 'react';
import styled from 'styled-components';

export default function Card({ product }) {
    return (
        <CardContainer>
            <ImageContainer>
                <Image src={product.img}></Image>
            </ImageContainer>
            <Description>
                <span>{product.brand}</span>
                <h3>{product.name}</h3>
                <p>S/. {product.price}</p>
            </Description>
        </CardContainer>
    );
}

const CardContainer = styled.div`
    width: 236px;
    height: fit-content;
    background-color: var(--bg-secundary);
    border-radius: 16px;
    padding: 1rem;
    transition: all ease-in-out 0.2s;

    &:hover {
        color: yellow;
        box-shadow: 0px 6px 17px 0px rgba(0,0,0,0.75);
        & p {
            color: green;
        }
    }
`;
const ImageContainer = styled.div`
    width:  calc(236px - 2rem);
    height: 305px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
    background-color: var(--bg-terciary);
    padding: 0.5rem;
    border-radius: 16px;
`;
const Image = styled.img`
    max-height: calc(305px - 1rem);
    max-width: calc(236px - 2.5rem);
`;
const Description = styled.div`
    & span {
        font-size: 14px;
    }
    & h3 {
        margin-top: 1rem;
        font-size: 16px;
        margin-bottom: 2rem;
        font-weight: 500;
    }
    & p {
        font-size: 20px;
        transition: all ease-in-out 0.1s;

    }
`
