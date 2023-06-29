# Introducción
Vamos a trabajar con los formularios para capturar y saber la información que el usuario ha ingresado en los inputs además veremos diferentes validaciones para comprobar que el usuario a ingresado la información correcta o en el formato esperado aunque es una validación del lado del cliente es buen comienzo para orientar al usuario de como debe de llenar este formulario.

Como vemos la primera validación es la de comprobar que los campos no esten vacio y por defecto el formulario estará vacio entonces el boton de enviar formulario estara deshabilitado evitando así que se envie un formulario sin datos en el momento que el formulario tenga información o los inputs contengan ciertos caracteres entonces el boton de envio se activara pero antes de enviar dicha información activara unos eventos para validar esa información antes de enviarla al servidor.

La segunda validación es validar que ingresemos un dato con formato de email aqui en este campo no basta ingresar una serie de caracteres como tu nombre porque esa información no tiene formato de email entonces el navegador captura la información y comprueba si dicha información tiene formato de email.

Cuando damos clic en el boton enviar se nos abrirá en una pestaña el gmail pero lo interesante aquí es que la información ingresada se insertara en ese correo nuevo de gmail lo cuál es genial para ser un simulador de email. Además en el simulador de correo aparece un spinner después de unos segundos se ocultara para mostrar un un mensaje en el DOM este proyecto simula la asíncronía en Javascript.

Por ultimo tenemos el botón de resetear formulario lo que hace es eliminar el contenido ingresado en los inputs para que una vez enviado el formulario es que vuelva a estar vacio listo para enviar otro correo falso o por medio de gmail.

# Iniciando el proyecto
Lo primero que hacemos es seleccionar los elementos del DOM que conforman el formulario en este caso seleccionamos el formulario como elemento padre y después seleccionamos cada uno de sus elementos hijos mediante su id ya que necesitamos capturar o obtener la información ingresada en ese formulario. 

