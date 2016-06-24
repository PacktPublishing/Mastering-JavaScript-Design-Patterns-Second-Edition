class CastleBuilder {
    buildCastle(size) {
        var castle = new Castle();
        castle.size = size;
        return castle;
    }
}
class Castle {
}
function When_building_a_castle_size_should_be_correctly_set() {
    var castleBuilder = new CastleBuilder();
    var expectedSize = 10;
    var builtCastle = castleBuilder.buildCastle(10);
    assertEqual(expectedSize, builtCastle.size);
}
function assertEqual(expected, actual) {
    if (expected !== actual)
        throw "Got " + actual + " but expected " + expected;
}
When_building_a_castle_size_should_be_correctly_set();
