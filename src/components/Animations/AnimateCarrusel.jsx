import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import BG1 from '../Shop/images/bg_1.png';
import BG2 from '../Shop/images/bg_2.png';
import BG3 from '../Shop/images/bg_3.png';
import BG4 from '../Shop/images/bg_4.png';

const pictures = [BG1, BG2, BG3, BG4];

export default function AnimateCarrusel({ picture = 0 }) {
    return (
        <AnimateCarruselContainer>
            <AnimatePresence>
                <motion.div
                    key={picture}
                    initial={{
                        opacity: 0,
                        x: '-100%',
                    }}
                    animate={{
                        opacity: 1,
                        x: '0%',
                    }}
                    exit={{
                        opacity: 0,
                        display: "none"
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className='Pic'
                >
                    {
                        <Picture src={pictures[picture]} />
                    }
                </motion.div>
            </AnimatePresence>
        </AnimateCarruselContainer>
    );
}

const Picture = styled.img`
    height: 387.2px;
    width: 1350px;
    position: absotule;
`;

const AnimateCarruselContainer = styled.div`
    height: 387.2px;
    display:flex;
    align-items:center;
    justify-content: center;
    overflow:hidden ;
`;
