module Westeros.Armor{
  export interface IArmor{
    CalculateDamageFromHit(hit: Hit):number;
    GetArmorIntegrity():number;
  }

  export class BasicArmor implements IArmor{
    CalculateDamageFromHit(hit: Hit):number
    {
      return hit.Strength * .2;
    }
    GetArmorIntegrity():number{
      return 1;
    }
  }

  export class ChainMail implements IArmor{
    decoratedArmor: IArmor;
    constructor(decoratedArmor: IArmor){
      this.decoratedArmor = decoratedArmor;
    }
    CalculateDamageFromHit(hit: Hit):number
    {
      hit.Strength = hit.Strength * .8;
      return this.decoratedArmor.CalculateDamageFromHit(hit);
    }
    GetArmorIntegrity():number{
      return .9 * this.decoratedArmor.GetArmorIntegrity();
    }
  }


  export class Hit{
    public Location: string;
    public Weapon: string;
    public Strength: number;
  }
}

let armor = new Westeros.Armor.ChainMail(new Westeros.Armor.BasicArmor());
console.log(armor.CalculateDamageFromHit({Location: "head", Weapon: "Sock filled with pennies", Strength: 12}));