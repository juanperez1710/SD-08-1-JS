/*
3. Ahora te han pedido incluir un método que muestre en consola un string anunciando que un jugador ha subido de nivel.  
    Modifica la clase `Player` para que acepte un string con el nombre y un número de nivel en dos argumentos separados.  
    Luego, define un método compartido `info()` que imprima el siguiente string, reemplazando los dos marcadores de posición:  
      `<name> has reached Level <level>!`  
        Un jugador llamado **Tara** en el nivel **6** debería mostrar en consola: "`Tara has reached Level 6!`".

*/
export class Player {
    constructor(name,level) {
      this.name=name;
      this.level=level;
    }
  info(){
    return `${this.name} has reached Level ${this.level}!`;
  }
  }
const Tara = new Player("Tara",6);
console.log(Tara.info());