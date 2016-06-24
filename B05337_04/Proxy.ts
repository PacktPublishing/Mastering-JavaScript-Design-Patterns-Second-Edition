module Westeros.Measurement{
  export interface IBarrelCalculator{
    calculateNumberNeeded(volume: number);
  }

  export class BarrelCalculator implements IBarrelCalculator{
    calculateNumberNeeded(volume: number){
      return Math.ceil(volume / 157);
    }
  }

  export class DragonBarrelCalculator implements IBarrelCalculator{
     _barrelCalculator: IBarrelCalculator;
    calculateNumberNeeded(volume: number){
      if(this._barrelCalculator == null)
        this._barrelCalculator = new BarrelCalculator();
      return this._barrelCalculator.calculateNumberNeeded(volume * .77);
    }
  }

}
