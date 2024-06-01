import React from 'react';
import church from './images/capilla.jpg'
import party from './images/salonCasino.jpg'


const GoogleMapsLink: React.FC = () => {
  const handleMapClick = () => {
    // URL del enlace a Google Maps con las coordenadas del lugar que deseas mostrar
    const mapsUrl1 = "https://www.google.com/maps/place/Jard%C3%ADn+Mirandilla+del+Sal%C3%B3n+Lienzo+Charro+de+Arag%C3%B3n/@19.4623125,-99.0647531,17.46z/data=!4m10!1m2!2m1!1slienzo+charro+aragon+capilla!3m6!1s0x85d1fba200f1f895:0x282b9d3fd730ee61!8m2!3d19.4629632!4d-99.0632892!15sChxsaWVuem8gY2hhcnJvIGFyYWdvbiBjYXBpbGxhkgEPY3VsdHVyYWxfY2VudGVy4AEA!16s%2Fg%2F11b621ylg2?entry=ttu";
    
    // Abre Google Maps en el navegador del usuario
    window.open(mapsUrl1, '_blank');
  };

  return (
    <section className='section-maps'>
      <h2 className='donde'>¿DÓNDE?</h2>
      <h3 className='ceremonia'> La ceremonia religiosa y la fiesta se celebrarán en las instalaciones de la Capilla y Salón Casino del Lienzo Charro.</h3>
      
        <img src={church} alt="Capilla" className='church' />
      
      
        <img src={party} alt="Salón Casino" className='party'/>
      
      <h3 className='maps-adress'>Lienzo Charro<br/>Av.661 No.300, Colonia San Juan de Aragón, C.P. 07979, GAM, CDMX.</h3>
    <button onClick={handleMapClick} className='btn-maps'>¿Cómo llegar?</button>
    </section>
  );
};

export default GoogleMapsLink;
