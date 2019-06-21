# JUGONES DE LA LIGA
Ejercicio de JUGONES de la liga. Espero que te guste el fútbol o programar, si no esta prueba va a ser muy aburrida jeje


## Algunas pautas
GIT
- Lo primero, haz un fork del repositorio, en el realiza el ejercicio.
- Haz un commit por cada ejercicio. El título de cada commit debe commenzar por "Ejercicio N". 
- No hagas commits adicionales o por lo menos evitalo.
- Cuando lo tengas todo listo pásanos el link al repositorio.

Librerias y frameworks
- La prueba está pensada para hacerla con React, y se valorara el uso de esta técnologia
- No obstante, si no te sientes cómodo como alternativa preferimos que lo hagas con vanilla js
- Si tampoco te sientes comodo en vanilla js usa otro framework a tu elección
- En cuanto al uso de librería, valoramos que no uses ninguna librería externa extra.

PROYECTO
El proyecto esá dividido en dos foldes:
- api
** En el encontraras la api.
** Todo el código necesario esta dentro de api/index.js
** Ejecuta la api situándote en la terminal en el folder api
```
$ cd path/to/repo/folder/api
$ node start
```

- app
** En el esta el front. Es un scaffolding de react, pero si no quieres usar React móntatelo como quieras.
** familiarizate con App.js y App.css 
** Ejecuta la app situándote en la terminal en el folder app
```
$ cd path/to/repo/folder/app
$ node start
```

Ahora ya debes tener corriendo en localhost:3001 y localhost:3000 la api y la app respectivamente.

Api end points endpints: 
- /teams
** Method GET

- /players
** Method GET

- /pichichis
** Method GET

- /transfer
** Method POST
** Requesto body { playerId: string, teamId: string }

En este ejercicio vas a tener que tocar código de api y de app, pero no te asustes si no tienes experiencia en node, es simple js y verás como te resultará sencillo.


## Ejercicio 1
Ve a la api (api/index.js) y haz que el end point players devuelva un array con todos los juagdores. Debe tener esta pinta:
```
 [
   {
     name: 'Ronaldo',
     position: 'DEL',
     img: 'url/to/image.png',
     teamId: 10,
   }, ...
 ]
 ```
 TIP: familiarizate primero con los objetos de los equipos: madrid, barcelona y atletico.
 TIP2: asegurate que position no es el código de la posición, si no el string
 TIP3: cuidado que los objetos de los equipos porque son de diferentes proveedores puede ser que la información te toque tratarla.
 Fijate bien en los equipos, los players... antes de empezar. Verás que está toda la información necesaria, no hace falta que recurras a google para nada, esta todo api/index.js.

## Ejercicio 2
En la pantalla app/App.js hay una lista con los equipos. Borrala y haz una lista con los jugadores.
- Debes obtener los players en lugar de los equipos y pintar su nombre.
- Borra todo el código que no sea necesario. Solo debe existir un título: Los jugadores y una lista con sus nombres. 
** Los comentarios de los ejercicios no los borres.

## Ejercicio reorganizar (opcional)
Si no te sientes cómodo o quieres reorganizar código hazlo ahora. Puedes dejarlo como está, es opcional.

## Ejercicio 3
Vamos a pasar a darle diseño. Crea el diseño propuesto en los visuales.
- Cada tarjeta de jugadro debe contener la imagen, su nombre, su equipo, el escudo de su equipo.
- Las tarjetas deben alinearse siempre en el centro de la pantalla.
- El mínimo width que soportan es de 280px
- En pantallas mayores a 600px la imagen es más grande.
- En general, guiate por los visuales para que se parezca lo más posible.


## Ejercicio 4
Haz un header para la página y un botón dentro de él.
- Header es de color #eee, mide de alto 40px. Siempre visible en el top de la pantalla.
- Las tarjetas de jugadores empiezan justo despues del header, en el espacio que llamaremos contenido.
- Asegurate de que si desbordan de la pantalla las tarjetas exista scroll para lleagr a ellas.
- El botón tiene el label: Pichichis. Debe ser como el de los visuales propuestos.

## Ejercicio 5
Haz un componente de modal. Hazlo reutilizable, lo usaremos más de una vez.
- Aparece sobre el contenido de toda la página, bloqueando la interacción del contenido con una capa negra translucida.
- Guiate por los visuales.
- Debe ser capaz de cerrarse con un botón de cancelar que aparece en la zona de abajo de la modal.
- El contennido en el resto de la modal.
- Tiene un width máximo de 500px
- Nunca ocupa el 100% de height de la pantalla. Deja unos márgenes por arriba y abajo de 100px;
- Si el contenido desborda debe haber scroll.
- Haz que el botón de Pichichis habra esta modal, por ahora con contenido dummy.

## Ejercicio 6:
Utiliza el componente de la modal para pintar la tabla de pichichis.
  - Tiene que hacer una api call dentro de este nuevo componente para traerse a los pichichis.
  - Haz una lista con los jugadores con imagen - nombre y goles.
  - Guiate por los diseños propuestos

## Ejercicio 7:
Haz un botón para ordenar por número de goles.
  - Si aprieras en ordenar por goles se pinta la lista ordenada por goles
  - Si vuelves a apretar se muestra la lista invertida
  - Añade la flecha propuesta en los visuales para indicar si la lista está invertida o no.

## Ejercicio 8:
Ha llegado una nueva funcionalidad que es la de traspasos. 
- Si haces click en un jugador de la lista se tiene que abrir una modal.
- Crea una nueva modal para esto.
- Debe contener dos selectors. Uno con el equipo y otro con todos los jugadores.
- Asegurate que si eliges un equipo no mostremos los jugadores de ese equipo en el selector de jugadores.
- Al seleccionar un equipo muestra su dinero disponible.
- Guiate por los visuales.
- Por ultimo, con el equipo -> jugador seleccionado realiza la transacción. Debes añadir un botón de Acceptar para ello.
- Al apretarlo hace una api call al localhost:3001/transfer. El método es POST. Envía en el body de la request un JSON
```
  {
    playerId: 11,
    teamId: 2
  }
```
- No te preocupes si ves que no resta el dinero de las transacciones la api, hay un bug en ella.


## Ejercicio 9:
Arregla la api para que sea capaz de acabar las transacciones. Como te abrás dado cuenta antes no resta.
