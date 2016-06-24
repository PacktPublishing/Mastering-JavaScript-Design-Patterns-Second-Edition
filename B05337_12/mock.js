class Knight {
    constructor(credentialFactory) {
        this.credentialFactory = credentialFactory;
    }
    presentCredentials(toRoyalty) {
        console.log("Presenting credentials to " + toRoyalty);
        this.credentialFactory.Create();
        return true;
    }
}
class MockCredentialFactory {
    constructor() {
        this.timesCalled = 0;
    }
    Create() {
        this.timesCalled++;
    }
    Verify() {
        assert(this.timesCalled == 3);
    }
}
function assert(value) {
    if (!value)
        throw "Assertion failure";
}
var credentialFactory = new MockCredentialFactory();
var knight = new Knight(credentialFactory);
var credentials = knight.presentCredentials("Lord Snow");
credentials = knight.presentCredentials("Queen Cersei");
credentials = knight.presentCredentials("Lord Stark");
credentialFactory.Verify();
