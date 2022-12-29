import React from "react";
import {BrowserRouter} from 'react-router-dom'
import Menu from "../componets/layout/Menu";
import Content from "../componets/layout/Content";
import './App.css'

function  App(props){
    return(
        <div className="App">
            <BrowserRouter>
                <Menu></Menu>
                <Content></Content>
            </BrowserRouter>
        </div>
    )
}

export default App;