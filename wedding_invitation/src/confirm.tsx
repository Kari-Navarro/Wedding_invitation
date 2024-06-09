//import FormfacadeEmbed from '@formfacade/embed-react'

const GoogleForm= () => {
  return (
  <section className="section-confirmacion">
    <h2 className="titulo-confirmacion">CONFIRMA TU ASISTENCIA</h2>
    <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSdv4BAdsMBy2d4t7AJpHaXwOs7wvg6TY2_O02PoAylNZKcW3A/viewform?embedded=true"
        width="335" 
        height="615" 
        className="formulario"
       >
       Cargando…
      </iframe>







    {/*<FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/115105755408056572524/form/1FAIpQLSdv4BAdsMBy2d4t7AJpHaXwOs7wvg6TY2_O02PoAylNZKcW3A/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>*/}
    </section>
  );
};

export default GoogleForm;
