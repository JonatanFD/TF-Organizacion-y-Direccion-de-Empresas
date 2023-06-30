import styled from "styled-components"
import Home from "./Home/Home"
import Shop from "./Shop/Shop"
import Footer from "./Footer"


export default function Content({selected}) {
    
    return (
        <ContentContainer>
            {
                selected === 1 && <Home />
            }
            {
                selected === 2 && <Shop />
            }
            <Footer />
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    height: 89.76%;
`