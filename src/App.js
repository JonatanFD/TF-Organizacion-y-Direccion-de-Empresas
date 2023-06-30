import styled from "styled-components";
import Content from "./components/Content";
import TabBar from "./components/TabBar";
import './styles/App.css';
import { useState } from "react";

function App() {
    const [content, setContent] = useState(1)
    const changeContentView = (page) => {
        setContent(page);
    }

    return (
        <APP>
            <TabBar selected={content} changeContentView={changeContentView}/>
            <Content selected={content}/>
        </APP>
    );
}
const APP = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
APP.displayName = "APP-CONTAINER"

export default App;
