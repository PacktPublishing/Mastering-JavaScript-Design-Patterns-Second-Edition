module Westeros.Families{
  export class Lannister{
    public clone():Lannister{
      var clone = new Lannister();
      for(var attr in this){
        clone[attr] = this[attr];
      }
      return clone;
    }
    public swordSkills: number;
    public charm: number;
    public wealth: number;
  }
}

var jamie = new Westeros.Families.Lannister();
jamie.swordSkills = 9;
jamie.charm = 6;
jamie.wealth = 10;

var tyrion = jamie.clone();
tyrion.charm = 10;

console.log(tyrion.wealth);
console.log(tyrion.swordSkills);
