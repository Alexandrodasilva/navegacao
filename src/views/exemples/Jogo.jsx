import React from "react";
import './Jogo.css'
function Jogo(props){
    return(
        <div className="Jogo">
            <div className="linha">
                <div className="casa" id="casa1">fe</div>
                <div className="casa" id="casa2">f</div>
                <div className="casa" id="casa3">f</div>
            </div>
            <div className="linha">
                <div className="casa" id="casa4">f</div>
                <div className="casa" id="casa5">f</div>
                <div className="casa" id="casa6">f</div>
            </div>
            <div className="linha">
                <div className="casa" id="casa7">r</div>
                <div className="casa" id="casa8">f</div>
                <div className="casa" id="casa9">f</div>
            </div>
            <div>resultado:</div>
        </div>
    )
}

export default Jogo;