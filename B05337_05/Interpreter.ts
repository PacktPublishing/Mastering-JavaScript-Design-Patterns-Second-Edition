module Westeros.History{
  export class Battle{
    constructor(public battleGround : string, public agressor: string, public defender: string, public victor: string){

    }
  }

  export class Parser{
    battleList;
    currentIndex: number = 0;
    constructor(public battleText: string){
      this.battleList = battleText.split("\n");
    }
    public nextBattle():Battle{
      if(!this.battleList[0])
        return null;
      var segments =  this.battleList[0].match(/\((.+?)\s?->\s?(.+?)\s?<-\s?(.+?)\s?->\s?(.+)/);
      return new Battle(segments[2], segments[1], segments[3], segments[4]);
    }
  }

}
