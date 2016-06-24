function CreateFeast(meat) {
  var drink = arguments[1] !== (void 0) ? arguments[1] : "wine";
  console.log("The meat is: " + meat);
  console.log("The drink is: " + drink);
}
CreateFeast("Boar", "Beer");
CreateFeast("Venison");
