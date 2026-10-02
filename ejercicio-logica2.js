function convertirTemperatura() {
  let entrada;
  let celsius;

  // Ciclo para solicitar datos
  while (true) {
    entrada = prompt("Ingresa la temperatura en grados Celsius:");

    // Detectar si el usuario presiono Cancelar
    if (entrada === null) {
      console.log("Operación cancelada por el usuario.");
      return;
    }//if

    //celsius lo convierte en  número
    celsius = Number(entrada);

    // Validar que no esté vacío y que sea un número real
    if (entrada.trim() !== "" && !isNaN(celsius)) {
      break;
    }//if

    alert("¡Error!: El dato ingresado no es un número válido. Intenta nuevamente.");
}//while

  // Fórmulas de conversión a grados Kelvin y Fahrenheit
  const kelvin = celsius + 273.15;
  const fahrenheit = (celsius * 9 / 5) + 32;
  const contenedor = document.getElementById("resultado");

  if (contenedor) {
    contenedor.innerHTML = `
      <p><strong>Grados Kelvin:</strong> ${kelvin}</p>
      <p><strong>Grados Fahrenheit:</strong> ${fahrenheit}</p>
    `;

  }//if

}//function convertirTemperatura


convertirTemperatura();