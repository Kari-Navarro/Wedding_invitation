import './index.css';


// Función para crear la fecha con la hora específica en el huso horario del Centro de México
const createMexicoCityDate = () => {
  const mexicoCityDate = new Date();
  // Establece la fecha al 28 de septiembre de 2024
  mexicoCityDate.setFullYear(2024, 8, 28); // Los meses comienzan desde 0 en JavaScript (septiembre es el mes 8)
  // Establece la hora a las 19:00 (7pm) en el huso horario del Centro de México
  mexicoCityDate.setHours(19, 0, 0);
  return mexicoCityDate;
};

export default createMexicoCityDate