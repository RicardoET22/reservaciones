//cambiar fondo
let cabecera = document.getElementsByTagName("header");
function dark(){
  cabecera[0].style.backgroundColor = '#000';   
  cabecera[0].classList.remove('ligero'); 
  document.body.style.backgroundColor = "#000";
  document.getElementById("evento").innerHTML = "Cambiaste al tema oscuro";
} 
//light
document.getElementById('capa2').addEventListener('click',light);
function light(){
cabecera[0].style.backgroundColor = '#39ff85bd';
cabecera[0].classList.add('ligero');
document.body.style.backgroundColor = "#39ff85bd"
document.getElementById("evento").innerHTML = "Cambiaste al tema nature";
}
document.getElementById('capa3').addEventListener('click', function (){defaulte()})
let defaulte = function(){
cabecera[0].style.backgroundColor = 'transparent';
document.body.style.backgroundColor = "#d9edfaa0"
cabecera[0].classList.remove('dark');
document.getElementById("evento").innerHTML = "Cambiaste al tema default";
}
//Fin header

  const reservacionForm = document.getElementById("reservacion-form");
  const resultadosSection = document.getElementById("resultados-modal-body");

  
  reservacionForm.addEventListener("submit", (event) => {
    // Previene el comportamiento por defecto del formulario
    event.preventDefault();


    var nombre = document.getElementById("nombre").innerText;
    var correo = document.getElementById("correo").value;
    var lugares = document.getElementById("lugares").value;
    var personas = document.getElementById("personas").value;
    var habitaciones = document.getElementById("habitaciones").value;
    var pasajes = document.getElementById("pasajes").value;

    var numAdultos = 0;
    var numMenores = 0;
    var mensaje;

    if (personas == 1) {
      numAdultos = 1;
      numMenores = Math.min(4, lugares - 1); 
      //Si "personas" es igual a 1, el código establecerá que hay 1 adulto y un número máximo de 4 menores, siempre y cuando haya suficientes lugares disponibles en el lugar donde se utiliza este código.
    } else if (personas == 2) {
      numAdultos = 2;
      numMenores = Math.min(3, lugares - 2);
    } else if (personas == 3) {
      numAdultos = 3;
      numMenores = Math.min(2, lugares - 3);
    } else if (personas == 4) {
      numAdultos = lugares;
      personas = lugares;
      mensaje = "Si hay 4 o más adultos ya no se permiten menores"
    }


    var edadesMenores = [];
    if (numMenores > 0) {
      for (let i = 1; i <= numMenores; i++) {
        var edad = prompt(`Edad del menor ${i}:`);
        edadesMenores.push(edad);
      }
    }

   
    let resultadosHtml = `
    <p><strong>Reservación de:</strong> ${nombre}</p>
    <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Número de lugares:</strong> ${lugares}</p>
      <p><strong>Adultos/menores:</strong> ${personas} (${numAdultos} adultos, ${numMenores} menores)</p>
      <p>${mensaje}</p>
      <p><strong>Número de habitaciones:</strong> ${habitaciones}</p>
      <p><strong>Número de pasajes:</strong> ${pasajes}</p>
    `;
    if (numMenores > 0) {
      resultadosHtml += "<p><strong>Edades de los menores:</strong></p>";
      resultadosHtml += "<ul>";
      for (const edad of edadesMenores) {
        resultadosHtml += `<li>${edad} años</li>`;
      }
      resultadosHtml += "</ul>";
    }

    // Mostrar los resultados en la pantalla modal
    resultadosSection.innerHTML = resultadosHtml;
    $("#resultados-modal").modal("show");
  });
