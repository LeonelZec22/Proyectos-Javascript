//Seleccionar los elementos del DOM
const d = document;
const correo = d.querySelector('#correo');
const email = d.querySelector('#email');
const asunto = d.querySelector('#asunto');
const mensaje = d.querySelector('#mensaje');

const btnEnviar = d.querySelector('#enviar');
const formularioEnviar = d.querySelector('#enviar-mail');
const resetBtn = d.querySelector('#resetBtn');

const inicioApp = (e) => {
     try {
          // deshabilitar el envio
          btnEnviar.setAttribute('disabled', 'true');
          btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
          console.log('Evento de deshabilita boton activado');
     } catch (error) {
          console.log(`Ha ocurrido un error en el elemento ${e.target.classList} al activar el evento.
          Error: ${error}`);
     }
}


function validarFormulario(e) {
     try {
          //Capturamos el elemento que activo el evento
          const input = e.target;

          //Comprobamos que es el elemento esperado a obtener
          if (input.matches('#enviar-mail input[type="text"]')) {
               // Lógica de validación para el input de texto
               if (input.value.trim().length > 0) {
                    input.style.borderBottomColor = 'green';
                    input.classList.remove('error');
                    input.classList.remove('border-red-500');
               } else {
                    input.classList.add('border', 'border-red-500');
                    input.style.borderBottomColor = 'red';
               }
          }

          //Si es un elemento de tipo email validamos el email ingresado
          else if (input.matches('#enviar-mail input[type="email"]')) {
               validarEmail(e);
          }

          campoVacio()
     } catch (error) {
          console.log(`Ocurrio un error al ejecutar el evento: ${error}, evento activado por ${e}`);
     }
}

function validarEmail(e) {
     try {
          const mensaje = e.target;
          const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

          if (reg.test(mensaje.value.toLowerCase())) {
               mensaje.style.borderBottomColor = 'green';
               mensaje.classList.remove('error');
          }
          else {
               mensaje.style.borderBottomColor = 'red';
               mensaje.classList.add('error');
          }
     } catch (error) {
          console.log(`Ocurrio un error al ejecutar el evento: ${error}, evento activado por ${e}`);
     }
}

function campoVacio() {
     if (correo.value !== '' && email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
          btnEnviar.removeAttribute('disable');
          btnEnviar.classList.remove('opacity-50');
          btnEnviar.classList.remove('cursor-not-allowed');
     }
     else {
          inicioApp();
     }
}

function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
}


// Delegación de eventos

d.addEventListener("DOMContentLoaded", inicioApp());
formularioEnviar.addEventListener("blur", validarFormulario, true);
resetBtn.addEventListener('click', resetFormulario);

