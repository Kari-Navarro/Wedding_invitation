import FormfacadeEmbed from "@formfacade/embed-react";

const Assistance= () => {
  return (
  <section className="section-confirmacion">
    <h2 className="titulo-confirmacion">CONFIRMA TU ASISTENCIA</h2>
    <FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/115105755408056572524/form/1FAIpQLSdv4BAdsMBy2d4t7AJpHaXwOs7wvg6TY2_O02PoAylNZKcW3A/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>
    </section>
  );
};

export default Assistance;
