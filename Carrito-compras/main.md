# Introducción

Lo primero que haremos es que tenemos un icono de un carrito en el menú de navegación de la aplicación cuando pasamos el mouse sobre ese icono se nos despliega una modal o un submenú que al principio estará vació y por lo tanto solo tendrá el color de fondo. Abajo del menú de navegación tendremos el cuerpo de la página en este habrá diferentes tarjetas con la información acerca de un curso en dentro de esa tarjeta habrá un botón que activa un evento para poder pasar la información de ese tarjeta al carrito de comprar de está forma estaríamos agregando ese elemento que es la tarjeta al carrito.

Estamos agregando elementos del cuerpo de la página al carrito que está en el menú entonces también debe de ser capaz de eliminar dicho elemento del carrito para eliminar esos elementos del DOM. Eso lo haces cuando presionamos en el boton con forma de "x" que cada agregado elemento tiene a la par cuando se hace clic en ese boton va a disparar un evento que lo hace es eliminar de ese arreglo de elementos el elemento seleccionado y después actualizar la interfaz de usuario para que automaticamente ya no siga el elemento agregado de forma visible.

Otra función es que si queremos eliminar todos los elementos agrega al carrito abajo de todo hay un botón que dice vaciar carrito este boton cuando se hace clic en él lo que hará es eliminar todos los elementos agregados como su nombre lo dice selecciona todos los elementos y los elimina del arreglo después actualiza la interfaz de usuario para que no haya ninguna información en el carrito de compras.


# Iniciando el proyecto

Lo primero que hacemos es seleccionar los elementos del DOM que conforman la sección del carrito de compras si nos fijamos en el archivo HTML en el menú de navegación hay como un logo entonces cuando ponemos el mouse encima de ese logo se activa una modal entonces seleccionamos todos los elementos que hay dentro de ese modal mediante la propiedad  `queryselector`
Después vamos a seleccionar el elemento contenedor que almacenas las tarjetas de los cursos.

## Creando función para agregar el evento

Ahora vamos a crear una función llamada `cargarEventListeners()` está función lo que hace es agregarle o asignarle eventos a los elementos seleccionados en este caso seleccionamos el contenedor de los cursos y utilizando el efecto burbuja si un elemento hijo activa el evento clic entonces ejecutar la función `agregarCurso` es decir si se hace clic en uno de los elemento hijo del contenedor `listaCursos`  entonces activa el evento y ejecuta la función `agregarCurso` dicha función más adelante fue creada. Si dentro del contenedor carrito se hace clic en en uno de los elementos hijos del contenedor entonces ejecuta la función `eliminarCurso` y si se hace clic  en el elemento `vaciarCarritoBtn` entonces ejecuta la función `vaciarCarrito`. Está función `cargarEventListeners()` es la primera función que se ejecuta cuando se cargar la aplicación en el navegador.