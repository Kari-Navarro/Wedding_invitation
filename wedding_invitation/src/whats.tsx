

import React from "react";

import whats from './images/wa.png'

const Whats: React.FC=()=>{
return (
    <section className="section-whats">
        <h2 className="text-dudas">¿DUDAS?</h2>
        <h3>Escribe a los anfitriones:</h3>
        <div className="enlace-wa">
        <a href="https://wa.me/525525156876" target="_blank"> <img src={whats} className="icon-whats"/> </a>
        </div>
    </section>
    )
    };

export default Whats