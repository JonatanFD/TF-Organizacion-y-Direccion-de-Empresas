import React from 'react';
import styled from 'styled-components';
import LOGO from '../styles/LOGO.svg';

export default function TabBar({ selected = 1, changeContentView }) {
    return (
        <TabBarContainer>
            <Tabs>
                <Logo src={LOGO} />
                <Tag selected={selected === 1} onClick={() => changeContentView(1)}>Inicio</Tag>
                <Tag selected={selected === 2} onClick={() => changeContentView(2)}>Productos</Tag>
            </Tabs>
        </TabBarContainer>
    );
}

const TabBarContainer = styled.div`
    height: 64px;
    width: 100%;

    position: relative;
    display: flex;
    justify-content: center;
    background-color: var(--bg-secundary);
`;
TabBarContainer.displayName = 'TABBAR-CONTAINER';

const Tabs = styled.div`
    display: flex;
    align-items: center;
    gap: 2.64vw;
`;
Tabs.displayName = 'TAB-CONTAINER';

const Tag = styled.h2`
    font-size: 18px;
    font-weight: 400;
    user-select: none;
    cursor:pointer;
    ${(props) => (!props.selected ? 'opacity: 0.5;' : '')}
`;
Tag.displayName = 'TAG';

const Logo = styled.img`
    position:absolute;
    width: 40px;
    left: calc(50% - 17.20vw);
`;
