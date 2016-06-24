module Westros.Buildings{
  export class BaseStructure{
    constructor() {
        console.log("Structure built");
    }
}

  export class Castle extends BaseStructure{
   constructor(public name){
    super();
    }
   public Build(){
    console.log("Castle built: " + this.name);
   }
  }
}