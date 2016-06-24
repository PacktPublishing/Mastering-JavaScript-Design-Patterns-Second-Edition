module Westeros.Transportation{

  export class Fleet {
    public ship: Ship[];
    public admiral: Admiral;
    public supplyCoordinator: SupplyCoordinator;

    public setDestination( destination: string){
      //pass commands to a series of ships, admirals and whoever else needs it
    }

    public resupply(){

    }

    public attack(destination: string){
      //attack a city
    }

    //letious other actions...
  }

  export class Ship{
    TurnLeft(){}
    TurnRight(){}
    GoForward(){}

  }

  export class Admiral{

  }

  export class SupplyCoordinator{

  }
}
