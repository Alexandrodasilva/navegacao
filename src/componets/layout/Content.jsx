import React from "react";
import {Routes, Route} from 'react-router-dom';
import About from '../../views/exemples/About';
import Home from '../../views/exemples/Home';
import NotFound from "../../views/exemples/NotFound";
import Param from "../../views/exemples/Param";
import Jogo from "../../views/exemples/Jogo";
import './Content.css'
function Content(props){
    return(
        <main className="Content" >
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/jogo" element={<Jogo/>} ></Route>
                    <Route path="/param/:id" element={<Param />} />
                    <Route path="/" exact element={<Home />} />
                    <Route path="*" exact element={<NotFound />} />
                </Routes>
        </main>
    )
}

export default Content