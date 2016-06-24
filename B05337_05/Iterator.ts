module Westeros.Succession{
  export interface Iterator{
    next();
  }

  export class KingSuccession implements Iterator{
    pointer: number;

    constructor(public inLineForThrone: string[]){
      this.pointer = 0;
    }

    public next(){
      return this.inLineForThrone[this.pointer++];
    }

  }

  export class FibonacciIterator implements Iterator{
    previous: number;
    beforePrevious: number;
    constructor(){
      this.previous = 1;
      this.beforePrevious = 1;
    }
    next(){
      var current = this.previous + this.beforePrevious;
      this.beforePrevious = this.previous;
      this.previous = current;
      return current;
    }
  }
}
