var Vector2 = (function () {
    function Vector2(x, y) {
        if (typeof x === "undefined") { x = 0; }
        if (typeof y === "undefined") { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.length = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    Vector2.prototype.normalize = function () {
        var len = this.length();
        this.x /= len;
        this.y /= len;
        return this;
    };

    Vector2.prototype.toString = function () {
        return "(" + this.x + "," + this.y + ")";
    };

    Vector2.prototype.log = function () {
        console.log(this.toString());
    };
    return Vector2;
})();
