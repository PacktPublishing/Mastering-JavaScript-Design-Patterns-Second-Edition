var model = {};
Object.observe(model, function (changes) {
    changes.forEach(function (change) {
        console.log("A " + change.type + " occured on " + change.name + ".");
        if (change.type == "update")
            console.log("\tOld value was " + change.oldValue + " New value is " + change.object[change.name]);
        if (change.type == "add")
            console.log("\tNew value is " + change.object[change.name]);
        console.dir(change.object.item);
    });
});
model.item = 7;
model.item = 8;
delete model.item;
