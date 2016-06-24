class SpyUpon{
  write(toWrite){
    console.log(toWrite);
    return 7;
  }
}

var spyUpon : any= new SpyUpon();
spyUpon._write = spyUpon.write;
spyUpon.write = function(arg1,arg2,arg3,arg4,arg5){
  this.called = true;
  this.args = arguments;
  this.result = this._write(arg1,arg2,arg3,arg4,arg5);
  return this.result;
}
console.log(spyUpon.write("hello world"));
console.log(spyUpon.called);
console.log(spyUpon.args);
console.log(spyUpon.result);
