var tm;
(function (tm) {
    (function (geom) {
        var Vector2 = (function () {
            function Vector2(x, y) {
                if (typeof x === "undefined") { x = 0; }
                if (typeof y === "undefined") { y = 0; }
                this.x = x;
                this.y = y;
            }
            Vector2.prototype.set = function (x, y) {
                this.x = x;
                this.y = y;
                return this;
            };

            Vector2.prototype.add = function (x, y) {
                this.x += x;
                this.y += y;
                return this;
            };

            Vector2.prototype.sub = function (x, y) {
                this.x -= x;
                this.y -= y;
                return this;
            };

            Vector2.prototype.mul = function (v) {
                this.x *= v;
                this.y *= v;
                return this;
            };

            Vector2.prototype.div = function (v) {
                this.x /= v;
                this.y /= v;
                return this;
            };

            Vector2.prototype.length = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            };

            Vector2.prototype.lengthSquared = function () {
                return this.x * this.x + this.y * this.y;
            };

            Vector2.prototype.distance = function (v) {
                return Math.sqrt(Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2));
            };

            Vector2.prototype.distanceSquared = function (v) {
                return Math.pow(this.x - v.x, 2) + Math.pow(this.y - v.y, 2);
            };

            Vector2.prototype.normalize = function () {
                var len = this.length();
                this.x /= len;
                this.y /= len;
                return this;
            };

            Vector2.prototype.clone = function () {
                return new Vector2(this.x, this.y);
            };

            Vector2.prototype.equals = function (v) {
                return this.x === v.x && this.y === v.y;
            };

            Vector2.prototype.equalsNumber = function (x, y) {
                return this.x === x && this.y === y;
            };

            Vector2.prototype.equalsArray = function (arr) {
                return this.x === arr[0] && this.y === arr[1];
            };

            Vector2.prototype.toString = function () {
                return "(" + this.x + "," + this.y + ")";
            };

            Vector2.prototype.log = function () {
                console.log(this.toString());
            };

            Vector2.add = function (lhs, rhs) {
                return new Vector2(lhs.x + rhs.x, lhs.y + rhs.y);
            };

            Vector2.sub = function (lhs, rhs) {
                return new Vector2(lhs.x - rhs.x, lhs.y - rhs.y);
            };

            Vector2.mul = function (vec, value) {
                return new Vector2(vec.x * value, vec.y * value);
            };

            Vector2.div = function (vec, value) {
                return new Vector2(vec.x / value, vec.y / value);
            };

            Vector2.min = function (lhs, rhs) {
                return new Vector2((lhs.x < rhs.x) ? lhs.x : rhs.x, (lhs.y < rhs.y) ? lhs.y : rhs.y);
            };

            Vector2.max = function (lhs, rhs) {
                return new Vector2((lhs.x > rhs.x) ? lhs.x : rhs.x, (lhs.y > rhs.y) ? lhs.y : rhs.y);
            };

            Vector2.dot = function (lhs, rhs) {
                return lhs.x * rhs.x + lhs.y * rhs.y;
            };

            Vector2.cross = function (lhs, rhs) {
                return (lhs.x * rhs.y) - (lhs.y * rhs.x);
            };

            Vector2.reflect = function (v, normal) {
                var len = Vector2.dot(v, normal);
                var temp = Vector2.mul(normal, 2 * len);
                return Vector2.sub(v, temp);
            };
            return Vector2;
        })();
        geom.Vector2 = Vector2;
    })(tm.geom || (tm.geom = {}));
    var geom = tm.geom;
})(tm || (tm = {}));
