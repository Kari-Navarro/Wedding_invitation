import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrusel
import photo1 from './images/1.png'
import photo2 from './images/2.png'
import photo3 from './images/3.png'
import photo4 from './images/4.png'
import photo5 from './images/5.png'
import photo6 from './images/6.png'

const PhotoCarousel: React.FC = () => {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={photo1} alt="Photo 1" />
      </div>
      <div>
        <img src={photo2} alt="Photo 2" />
      </div>
      <div>
        <img src={photo3} alt="Photo 3" />
      </div>
      <div>
        <img src={photo4} alt="Photo 4" />
      </div>
      <div>
        <img src={photo5} alt="Photo 5" />
      </div>
      <div>
        <img src={photo6} alt="Photo 6" />
      </div>
      
    </Carousel>
  );
};

export default PhotoCarousel;
