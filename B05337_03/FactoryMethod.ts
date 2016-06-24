module Westeros.Religion
{
  export class Prayer{
    pray(godName:string){
      GodFactory.Build(godName).prayTo();
    }
  }

  class GodDeterminant{
    constructor(public religionName: string, public prayerPurpose: string){}
  }

  class GodFactory{
    static Build(godName: string):God{
      if(godName === "drowned")
        return new DrownedGod();
      if(godName === "ancient")
        return new AncientGods();
      return new DefaultGod();
    }
  }

  export interface God
  {
    prayTo():void;
  }

  export class DrownedGod implements God{
    public prayTo(){

    }
  }

  export class AncientGods implements God{
    public prayTo(){

    }
  }

  export class DefaultGod implements God{
    public prayTo(){

    }
  }
}
