

import React from "react";

import whats from './images/wa.png'

const Whats: React.FC=()=>{
return (
    <section className="section-whats">
        <h4>¿Dudas?, escribe a los anfitriones:</h4>
        <div className="enlace-wa">
        <a href="https://wa.me/525512421958" target="_blank"> <img src={whats} className="icon-whats"/> </a>
        </div>
    </section>
    )
    };

export default Whats