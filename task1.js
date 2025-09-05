/*
1. Estás trabajando en un código que será usado en un videojuego. Te han pedido crear una clase de objeto. Esta se usará para definir jugadores en ese juego. Cada jugador puede elegir su propio nombre, y estos objetos se usarán para almacenarlos.  
   Modifica la clase `Player` para que acepte un argumento con el "**name**" del jugador.  
     La clave de esta propiedad en el objeto resultante **debe** ser "`name`" —recuerda, **las computadoras son muy literales**.
*/
export class Player {
      constructor(name) {
      this.name=name;
  }
}
  const flash=new Player("flash");
  console.log(flash)
