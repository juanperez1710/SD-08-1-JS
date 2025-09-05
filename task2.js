/*
2. Ahora te han pedido mejorar tu código, de modo que los objetos jugador puedan definir tanto un nombre como un número de nivel.  
   Modifica la clase `Player` para que acepte dos argumentos: un string para el "**name**" del jugador y un número para el "**level**".  
     La clave de esta propiedad en el objeto resultante **debe** ser "`level`" —recuerda, **las computadoras son muy literales**.
*/
export class Player {
    constructor(name,level) {
      this.name=name;
      this.level=level;
    }
  }
  const batman=new Player("batman",5);
  console.log(batman)