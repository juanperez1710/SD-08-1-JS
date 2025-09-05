/*
4. Ahora te han pedido incluir un método para subir de nivel a un jugador, incrementando su número de nivel en uno.  
   Modifica la clase `Player` para que acepte un string con el nombre y un número de nivel en dos argumentos separados.  
   Luego, define un método compartido `info()` que muestre el siguiente string:  
     `<name> has reached Level <level>!`  
   Finalmente, define un segundo método compartido llamado `levelUp()` que **incremente** el nivel del jugador.

*/
export class Player {
   constructor(name,level) {
      this.name=name;
      this.level=level;
    }
  info(){
    return `${this.name} has reached Level ${this.level}!`;
  }
  levelUp(){
    this.level++;
    return `${this.name} is now Level ${this.level}!`
  }
  }
  const Tara= new Player("Tara",6);
  console.log(Tara.info());
  console.log(Tara.levelUp());