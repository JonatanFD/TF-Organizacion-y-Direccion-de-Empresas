import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import Normal from './Normal';
import Custom from './Custom';
import Carrusel from './Carrusel';

export default function Shop() {
    const [pageSection, setPageSection] = useState(0);
    const changeSection = (newSection) => {
        setPageSection(newSection);
    };
    return (
        <ShopContainer>
            <Carrusel />
            
            <SectionsContainer>
                <Section
                    selected={pageSection === 0}
                    onClick={() => changeSection(0)}
                >
                    Comercial
                </Section>
                <Section
                    selected={pageSection === 1}
                    onClick={() => changeSection(1)}
                >
                    Personalizado
                </Section>
            </SectionsContainer>

            {pageSection === 0 ? <Normal /> : <Custom />}
        </ShopContainer>
    );
}

const ShopContainer = styled.div``;
const SectionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    height: 100px;
    margin-top: 1rem;
`;
const Section = styled.p`
    opacity: ${(props) => (props.selected ? '100%' : '60%')};
`;
