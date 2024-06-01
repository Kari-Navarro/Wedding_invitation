import React from 'react';
import './index.css';
import years from './images/prueba1.png'




const Header: React.FC = () => {
    return (
      <section className='section-header'>
       
        <img src={years} alt="50 aniversario"/>
      
      <audio autoPlay loop>
        <source src="/public\audio\solamente.mp3" type="audio/mpeg" />
        Tu navegador no soporta la etiqueta de audio.
      </audio>
      </section>
    );
  };
  
  export default Header;