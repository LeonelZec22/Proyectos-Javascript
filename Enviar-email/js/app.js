const correo = document.querySelector('#correo');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const btnEnviar = document.querySelector('#enviar');
const formularioEnviar = document.querySelector('#enviar-mail');
const resetBtn = document.querySelector('#resetBtn');

// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     correo.addEventListener('blur', validarFormulario);
     email.addEventListener('blur', validarFormulario);
     asunto.addEventListener('blur', validarFormulario);
     mensaje.addEventListener('blur', validarFormulario);

     // Boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     // Boton de reset
     resetBtn.addEventListener('click', resetFormulario);
}

function inicioApp() {
    // deshabilitar el envio
    btnEnviar.setAttribute('disable', 'true');
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50')
}


// Valida que el campo tengo algo escrito

function validarFormulario(e) {
    
    if(e.target.value.length > 0 ) {
         campo.style.borderBottomColor = 'green';
         campo.classList.remove('error');
    } else {
         e.target.classList.add('border', 'border-red-500');
    }



    // Validar unicamente el email
    if(this.type === 'email') {
         validarEmail(this);
    }


    if(correo.value !== '' && email.value !== '' && asunto.value !== '' && mensaje.value !== '' ) {
       btnEnviar.setAttribute('disable', 'false');
       btnEnviar.classList.remove('opacity-50');
       btnEnviar.classList.remove('cursor-not-allowed');
    }
}


// Resetear el formulario 
function resetFormulario(e) {
    formularioEnviar.reset();
    e.preventDefault();
}

function validarEmail(campo) {
    const mensaje = campo.value;

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if( re.test(mensaje.toLowerCase()) ) {
         campo.style.borderBottomColor = 'green';
         campo.classList.remove('error');
    } else {
         campo.style.borderBottomColor = 'red';
         campo.classList.add('error');
    }
}