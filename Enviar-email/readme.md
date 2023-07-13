# Introducción
Vamos a trabajar con los formularios para capturar y saber la información que el usuario ha ingresado en los inputs además veremos diferentes validaciones para comprobar que el usuario a ingresado la información correcta o en el formato esperado aunque es una validación del lado del cliente es buen comienzo para orientar al usuario de como debe de llenar este formulario.

Como vemos la primera validación es la de comprobar que los campos no esten vacio y por defecto el formulario estará vacio entonces el boton de enviar formulario estara deshabilitado evitando así que se envie un formulario sin datos en el momento que el formulario tenga información o los inputs contengan ciertos caracteres entonces el boton de envio se activara pero antes de enviar dicha información activara unos eventos para validar esa información antes de enviarla al servidor.

La segunda validación es validar que ingresemos un dato con formato de email aqui en este campo no basta ingresar una serie de caracteres como tu nombre porque esa información no tiene formato de email entonces el navegador captura la información y comprueba si dicha información tiene formato de email.

Cuando damos clic en el boton enviar se nos abrirá en una pestaña el gmail pero lo interesante aquí es que la información ingresada se insertara en ese correo nuevo de gmail lo cuál es genial para ser un simulador de email. Además en el simulador de correo aparece un spinner después de unos segundos se ocultara para mostrar un un mensaje en el DOM este proyecto simula la asíncronía en Javascript.

Por ultimo tenemos el botón de resetear formulario lo que hace es eliminar el contenido ingresado en los inputs para que una vez enviado el formulario es que vuelva a estar vacio listo para enviar otro correo falso o por medio de gmail.

# Iniciando el proyecto
Lo primero que hacemos es seleccionar los elementos del DOM que conforman el formulario en este caso seleccionamos el formulario como elemento padre y después seleccionamos cada uno de sus elementos hijos mediante su id ya que necesitamos capturar o obtener la información ingresada en ese formulario. 

## Creando función para agregar el evento
La función `eventListeners` es la primera que se ejecuta una vez se carga la aplicación está función lo que hace es que agrega eventos a los diferentes elementos del DOM por ejemplo cada vez que se recargue el documento se activa el evento `DOMContentLoaded` y lo que hara es que ejecutara la función `inicioApp`. 

Ahora a cada input del formulario le vamos a añadir el evento `blur` que se activa cuando un elemento pierde el foco, es decir, cuando el usuario deja de interactuar con ese elemento. Se utiliza para detectar cuando un usuario ha terminado de interactuar con un campo de entrada, como un campo de texto o un campo de formulario, y ha pasado a otro elemento en la página cuando eso sucede se ejecuta la función `validarFormulario` que va a validar el formato de los caracteres ingresados.

Al botón enviar del formulario se le agrega el evento `submit` se activa cuando se envía un formulario, ya sea haciendo clic en un botón de envío o presionando la tecla "Enter" dentro de un campo de formulario. Se utiliza para capturar y manejar la acción de enviar un formulario a través de JavaScript. Este ejecutara la función `enviarEmail` y por último el boton de resetear formulario se le agrega el evento `click` que ejecutara la función `resetFormulario`.

# Creando las funciones del evento

## Función para deshabilitar el boton de enviar
Cuando se carga la aplicación entonces se ejecuta automaticamente la función `inicioApp` que lo que hace es desabilitar el botón de enviar cambiando el valor de un atributo de disable a true por defecto está en false es decir activado y agregando las siguientes clases para cambiar el diseño del botón ya que si en esas clases las reglas css no se aplicarían.

## Función que valida los datos ingresados
Ahora cuando se deja de ingresa datos en los inputs se ejecuta la función que valida el formato de dichos datos ingresados primero determina si el elemento que activo el evento es un input de tipo texto despues valida si su longitud es mayor a cero porque puede ser que se active el evento sin que hubiera caracteres entonces si un input de tipo texto activa este evento entonces se valida que haya al menos un caracter valido si eso es así entonces cambia el valor de la clase `borderBottomColor` a color verder y elimina la clase `error` para que no se aplique esa regla de estilos sino fuera así entonces agrega las siguientes clases para sobreescribir los estilos del elemento que activo el evento.

Después validamos si el elemento que activo este evento es de tipo email para ejecutar la función `validarEmail` en el caso contrario no ejecutar ninguna función más que está función de validar email que espera recibir como parámetro el mismo elemento (objeto) que activo el evento en este caso un input.

Después validamos de que todos los inputs NO esten vacío al validar que su valor no sea igual a nulo o vacio con comillas sin contenido si los campos tiene contenido entonces eliminamos el atributo `disable` para activar el botón de enviar y que ahora sí se pueda hacer clic en el y eliminamos ciertas clases para evitar que se aplique ciertas reglas de estilos css.

## Función que valida que el email ingresado este en el formato correcto
Creamos la función `validarEmail` que recibe como parámetro un input porque es el elemento que activara está función del evento asignado a dicho campo de texto primero lo que hacemos capturar la información ingresada y guardarla en una variable después en otra variable ponemos el formato del email utilizando la expresión regular para que el formato sea correcto la información ingresada debe de cumplir o pasar la expresión regular. 

Convertimos la información ingresada en el input a minusculas y si la expresión logra validar que esa información ingresada está en el formato correcto entonces cambia la propiedad `borderBottomColor` a verde está propiedad existe porque utilizamos Tailwind y despúes elimina la clase error del elemento. En caso contrario y la información ingresada está en el formato incorrecto entonces cambia la propiedad `borderBottomColor` a color rojo y agrega la clase error al elemento.

## Función para vaciar el formulario
Para eliminar los datos ingresados en los inputs y que volvamos a tener un formulario limpio creamos la función `resetFormulario` que lo que hace es que al formulario seleccionado ejecutamos el método reset que hay en Javascript este método se utiliza para restablecer o limpiar los valores de un formulario a sus valores predeterminados.
Cuando se llama al método reset() en un formulario, todos los campos del formulario, como campos de texto, selectores y casillas de verificación, se restablecerán a sus valores iniciales. Esto significa que se borrarán los datos ingresados por el usuario y se restablecerán las selecciones a sus opciones predeterminadas. Además desactivamos el evento por defecto del elemento que activo el evento.

# Enviar Formulario




