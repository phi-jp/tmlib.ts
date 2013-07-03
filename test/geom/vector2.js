
describe('Vector2 Test', function() {
    it('constructor', function() {
        var v  = new tm.geom.Vector2(0, 1);
        assert(v.equalsNumber(0, 1));
    });
});
