export class BaseStructure {
    constructor() {
        console.log("Structure built");
    }
}


export class Castle extends BaseStructure {
   constructor(name){
    super();
    this.name = name;
    
    }
   Build(){
    console.log("Castle built: " + this.name);
   }
  }