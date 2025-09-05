/*
5. Experimenta permitiendo que el jugador suba de nivel con base en los puntos de experiencia ganados.  
   Un punto de experiencia es un **número**. Un jugador debería subir de nivel cuando acumule suficientes puntos de experiencia.  
    Intenta añadir un método que permita al jugador ganar un número dado de puntos de experiencia.  
    ¿Cuántos puntos de experiencia deberían resultar en un aumento de nivel? ¿Cómo puedes llevar un control de este número?

*/
export class Player {
      constructor(name,level,xp) {
      this.name=name;
      this.level=level;
      this.xp=xp;
    }
  info(){
    return `${this.name} has reached Level ${this.level}!`;
  }
  levelUp(){
    this.level++;
  }
  }