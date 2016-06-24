module Westeros.Court{
  class GetterSetter{
    _listener : Listener;
    _property;
    public GetProperty(){
      return this._property;
    }
    public SetProperty(value){
      var temp = this._property;
      this._property = value;
      this._listener.Event(value, temp);
    }
  }

  class Listener{
    public Event(newValue, oldValue){
      //do something
    }
  }

  class Spy{
    _partiesToNotify;
    constructor(){
      this._partiesToNotify = [];
    }
    public Subscribe(subscriber){
      this._partiesToNotify.push(subscriber);
    }

    public Unsubscribe(subscriber){
      this._partiesToNotify.remove(subscriber);
    }

    _painKillers;
    SetPainKillers(painKillers){
      this._painKillers = painKillers;
      for(var i = 0; i< this._partiesToNotify.length; i++){
        this._partiesToNotify[i](painKillers);
      }
    }

  }

  class Player{
    public OnKingPainKillerChange(newPainKillerAmount){
      //perform some action
    }
  }
}
