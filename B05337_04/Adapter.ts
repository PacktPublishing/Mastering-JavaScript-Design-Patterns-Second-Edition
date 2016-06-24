module Westeros.Transportation
{
  export interface IShip{
    SetRudderAngleTo(angle: number);
    SetSailConfiguration(configuration: SailConfiguration);
    SetSailAngle(sailId: number, sailAngle: number);
    GetCurrentBearing(): number;
    GetCurrentSpeedEstimate(): number;
    ShiftCrewWeightTo(weightToShift: number, locationId: number);
}
  export class SailConfiguration{}

  export class Ship implements IShip{
    SetRudderAngleTo(angle: number){}
    SetSailConfiguration(configuration: SailConfiguration){}
    SetSailAngle(sailId: number, sailAngle: number){}
    GetCurrentBearing(): number{
      return 7;
    }
    GetCurrentSpeedEstimate(): number{
      return 7;
    }
    ShiftCrewWeightTo(weightToShift: number, locationId: number){}
  }

  export class ShipAdapter implements SimpleShip{
    _ship: Ship;
    constructor(){
      this._ship = new Ship();
    }

    TurnLeft(){
      this._ship.SetRudderAngleTo(-30);
      this._ship.SetSailAngle(3, 12);
    }
    TurnRight(){

      this._ship.SetRudderAngleTo(30);
      this._ship.SetSailAngle(5, -9);
    }
    GoForward(){
      //do something else to the _ship
    }
  }

  export interface SimpleShip{
    TurnLeft();
    TurnRight();
    GoForward();
  }
}


var ship = new Westeros.Transportation.ShipAdapter();
ship.GoForward();
ship.TurnLeft();