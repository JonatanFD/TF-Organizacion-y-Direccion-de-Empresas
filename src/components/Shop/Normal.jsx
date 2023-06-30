import React from 'react'
import styled from 'styled-components'
import normalProducts from './productsData'
import Card from './Card'


export default function Normal() {

    return (
        <NormalContainer>
            {
                normalProducts.map((product, index) => 
                    <Card key={index} product={product}/>
                ) 
            }
        </NormalContainer>
    )
}

const NormalContainer = styled.div`
    margin-top: 2.5rem;
    display: grid;
    grid-template-columns: repeat(4, 250px);
    justify-items: center;
    justify-content: center;
    gap: 15px;
`
NormalContainer.displayName = "NormalContainer"