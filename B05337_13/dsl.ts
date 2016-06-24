class Axe{
  constructor(handleLength, /*public*/ headHeight){}
}

function publicParameters(func){
  var stringRepresentation = func.toString();
  var parameterString = stringRepresentation.match(/^function .*\((.*)\)/)[1];
  var parameters = parameterString.split(",");
  var setterString = "";
  for(var i = 0; i < parameters.length; i++){
    if(parameters[i].indexOf("public") >= 0){
      var parameterName = parameters[i].split('/')[parameters[i].split('/').length-1].trim();
      setterString += "this." +  parameterName + " = " + parameterName + ";\n";
    }
  }
  var functionParts = stringRepresentation.match(/(^.*{)([\s\S]*)/);
  return functionParts[1] + setterString + functionParts[2];
}

console.log(publicParameters(Axe));
eval (publicParameters(Axe));
