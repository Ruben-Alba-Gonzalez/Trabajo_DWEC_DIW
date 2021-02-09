Las APIS que he usado son:
- google maps api: https://cloud.google.com/maps-platform?hl=es
- pokeapi: https://pokeapi.co/docs/v2
- thedogapi: https://docs.thedogapi.com/
- random user api: https://randomuser.me/

Tanto google maps api como thedogapi son apis privadas. No estaba seguro si la api de pokemon que usamos en clase era
dexter o pokeapi. Los links a las apis se encuentran en el pie de pagina.

La cabecera se encuentra en todos las paginas, asi como el menu y el pie, los articulos son las tarjetas tanto de perros.html
como de pokemon.html, la geleria se encuentra en perros.html.

La pagina es responsive entre 1280px y 2560px de ancho.

En index.html las imagenes centrales tambien son links a pokemon.html y perros.html, al ponerte encima tienen una transicion
de 2 segundos tanto en el crecimiento de la propia imagen como en la opacidad, ademas pasados 0,5 segundos desde que
se pulsa el boton de empezar, se activan 2 eventos que reproducen musica al ponerte encima de las imagenes.

En perros.html la galeria se llena con 12 perros aleatorios sacados de thedogapi, al hacer click sobre cualquiera,
tanto sus datos como su foto se pasan a la tarjeta de perro que se encuentra abajo, el nombre es aleatorio sacado de
random user api, la edad es un numero aleatorio entre 1 y 10 años y la raza hay dos opciones: que el objeto devuelto por
thedogapi contenga la raza en cuyo caso se refleja en la tarjeta, o que no venga en el objeto, en este ultimo caso la raza
sera "mezcla".

En pokemon.html saldra una alerta de que la pagina quiere saber tu ubicacion, debes aceptarla, ademas saldra otra 
alerta de que se mostrara el pokemon mas cercano a tu posicion.
Al aceptar ambas se cargara el api de google maps mostrandote tu posicion con un marcador y ademas se cargara un pokemon
aleatorio de pokeapi, dando la falsa sensacion de que se encuentra cerca.
El mapa de google maps saldra un tanto diferente porque para que salga 100% bien hay que pagar.
En la tarjeta de pokemon se muestran las fotos del pokemon tanto en su version normal como en su version shiny, ademas
del nombre y la habilidad que tiene, para los ataques se utiliza el link que trae el objeto de pokeapi para los 4 primeros 
movimientos, mostrando su nombre, su potencia y su precision. Algunos movimientos tienen potencia y/o precision null,
en este caso he decidido que potencia null sea 0 y precision null sea "movimiento de estado".
Adicional a esto dependiendo del tipo principal que tenga el pokemon, la tarjeta tendra un fondo u otro.

Link al repositorio de GitHub: https://github.com/Ruben-Alba-Gonzalez/Trabajo_DWEC_DIW