//Seleccionar los elementos del DOM
const d = document;
const correo = d.querySelector('#correo');
const email = d.querySelector('#email');
const asunto = d.querySelector('#asunto');
const mensaje = d.querySelector('#mensaje');

const btnEnviar = d.querySelector('#enviar');
const formularioEnviar = d.querySelector('#enviar-mail');
const resetBtn = d.querySelector('#resetBtn');

const inicioApp = (e) =>{
     try {
          // deshabilitar el envio
          btnEnviar.setAttribute('disabled','true');
          btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
          console.log('Evento de deshabilita boton activado');
     } catch (error) {
          console.log(`Ha ocurrido un error en el elemento ${e.target} al activar el evento.
          Error: ${error}`);
     }
}

// Delegación de eventos

d.addEventListener("DOMContentLoaded", inicioApp());

