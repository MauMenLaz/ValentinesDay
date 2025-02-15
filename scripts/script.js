// Elementos del DOM
const sobreCerrado = document.querySelector('.sobre-cerrado');
const sobre = document.querySelector('.sobre');
const carta = document.querySelector('.carta');
const pregunta = document.querySelector('.pregunta');
const botonSi = document.getElementById('si');
const botonNo = document.getElementById('no');
const corazones = document.querySelector('.corazones');
const mensaje = document.querySelector('.mensaje');
const mensaje2 = document.querySelector('.mensaje2');
const mensaje3 = document.querySelector('.mensaje3');
const fondoCorazon = document.querySelector('.fondo-corazon');
var contador=0;

// Tamaños iniciales
let tamañoNo = 48; // Tamaño inicial del botón "No" en píxeles
let tamañoSi = 48; // Tamaño inicial del botón "Sí" en píxeles

// Al hacer clic en el sobre cerrado
sobreCerrado.addEventListener('click', () => {
    // Abre el sobre y muestra la carta (ya está visible)
    sobreCerrado.classList.add('hidden');
        // Activar la animación del fondo en forma de corazón
        fondoCorazon.classList.remove('hidden');
        fondoCorazon.classList.add('visible');
});

sobre.addEventListener('click', () => {
    // Abre el sobre y muestra la carta (ya está visible)
    sobreCerrado.classList.add('hidden');
});

// Al hacer clic en la carta
carta.addEventListener('click', () => {
    // Oculta la carta y muestra la pregunta
    carta.classList.add('hidden');
    pregunta.classList.remove('hidden');
    pregunta.classList.add('visible');
});

// Al hacer clic o pasar el cursor sobre "No"
botonNo.addEventListener('mouseover', () => {
    // Reduce el tamaño del botón "No" en 2 píxeles cada vez
    tamañoNo -= 20;
    botonNo.style.fontSize = `${tamañoNo}px`;

    // Mueve el botón "No" a una posición aleatoria
    botonNo.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;

    // Aumenta el tamaño del botón "Sí" en 2 píxeles cada vez
    tamañoSi += 20;
    botonSi.style.fontSize = `${tamañoSi}px`;
    contador++;
});

// Al hacer clic en "Sí"
botonSi.addEventListener('click', () => {
    corazones.classList.remove('hidden');
    corazones.classList.add('visible');
    pregunta.classList.add('hidden');

    // Función para crear corazones
    function crearCorazon() {
        const corazon = document.createElement('div');
        corazon.innerHTML = '💙';
        corazon.classList.add('corazon-lluvia');

        // Posición horizontal aleatoria
        corazon.style.left = `${Math.random() * 100}vw`;

        // Duración de la animación aleatoria (entre 3 y 7 segundos)
        const duracion = Math.random() * 4 + 3;
        corazon.style.animationDuration = `${duracion}s`;

        // Tamaño aleatorio (entre 1.5vh y 3vh)
        const tamaño = Math.random() * 1.5 + 1.5;
        corazon.style.fontSize = `${tamaño}vh`;

        // Agregar el corazón al contenedor
        corazones.appendChild(corazon);

        // Eliminar el corazón después de que termine la animación
        corazon.addEventListener('animationend', () => {
            corazon.remove();
        });
    }

    // Crear corazones cada 300ms
    setInterval(crearCorazon, 300);

    //Funcion para mostrtar mensaje dependiendo
    
if(contador==0)  
{
    mensaje.classList.remove('hidden');
    mensaje.classList.add('visible');
}else if(contador<6)
{
    mensaje2.classList.remove('hidden');
    mensaje2.classList.add('visible');
}else{
    mensaje3.classList.remove('hidden');
    mensaje3.classList.add('visible');
}
});


// Función para mover el botón "No" a una posición aleatoria
function moverBoton() {
    const anchoVentana = window.innerWidth; // Ancho de la ventana
    const altoVentana = window.innerHeight; // Alto de la ventana

    // Generar posiciones aleatorias dentro de los límites de la ventana
    const nuevaPosicionX = Math.random() * (anchoVentana - botonNo.offsetWidth);
    const nuevaPosicionY = Math.random() * (altoVentana - botonNo.offsetHeight);

    // Aplicar la nueva posición al botón
    botonNo.style.position = 'absolute'; // Cambiar a posición absoluta
    botonNo.style.left = `${nuevaPosicionX}px`;
    botonNo.style.top = `${nuevaPosicionY}px`;
}

// Variables para el tamaño del botón "Sí"
let tamañoBaseSi = 2.5; // Tamaño base en vh
let incrementoTamaño = 4.0; // Incremento en vh por cada clic en "No"

// Efecto al hacer clic en el botón "No" (para móviles)
botonNo.addEventListener('click', () => {
    // Aplicar el efecto de reducción
    botonNo.style.transform = 'scale(0.6)';
    botonNo.style.fontSize = '2vh';
    botonNo.style.padding = '1.2vh 2.4vw';

      // Mover el botón a una posición aleatoria
      moverBoton();

       // Aumentar el tamaño del botón "Sí"
    tamañoBaseSi += incrementoTamaño; // Incrementar el tamaño base
    botonSi.style.fontSize = `${tamañoBaseSi}vh`; // Aplicar el nuevo tamaño
    botonSi.style.padding = `${tamañoBaseSi * 0.6}vh ${tamañoBaseSi * 1.2}vw`; // Ajustar el padding proporcionalmente
    });


