Array.prototype.where=function(inclusionTest){
  var results = [];
  for(var i = 0; i<this.length;i++){
    if(inclusionTest(this[i]))
      results.push(this[i]);
  }
  return results;
}

Array.prototype.select=function(projection){
  var results = [];
  for(var i = 0; i<this.length;i++){
    results.push(projection(this[i]));
  }
  return results;
}

const children = [{id: 1, Name: "Rob"}, {id: 2, Name: "Sansa"}, {id: 3, Name: "Arya"}, {id: 4, Name: "Brandon"}, {id: 5, Name: "Rickon"}];
var filteredChildren = children.where(function(x){ return x.id % 2 ==0;}).select(function(x){ return x.Name;});
console.dir(children);
console.dir(filteredChildren);