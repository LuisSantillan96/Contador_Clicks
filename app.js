
var contador = 0;

// Seleccionamos la etiqueta segun e ID donde pintaremos el conteo
const conteo = document.getElementById('conteo-act');

// Aqui cada que el boton sea plsado se aumenta en 1
const boton = document.getElementById('pulsador');

boton.addEventListener('click', function(){
    contador ++;
    // Aqui pintamos el conteo segun el contador
    conteo.textContent = `${contador}`;
    //console.log(contador);
});

// Aqui reseteamos el contador
const reset = document.getElementById('reset');

reset.addEventListener('click', function(){
    contador = 0;
    conteo.textContent = `${contador}`;
})




