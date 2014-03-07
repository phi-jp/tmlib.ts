/*
 * vector2.ts
 */

module tm.geom {

    export class Vector2 {
        x: number;
        y: number;
        
        /**
         * dummy
         */
        constructor(x: number = 0, y: number = 0) {
            this.x = x;
            this.y = y;
        }

        /**
         * dummy
         */
        set(x:number, y:number): Vector2;
        set(v:Vector2): Vector2;
        set(a:any, b?:number): Vector2 {
            if (a instanceof Vector2) {
                this.x = a.x;
                this.y = a.y;
            }
            else {
                this.x = a;
                this.y = b;
            }

            return this;
        }
        
        /**
         * dummy
         */
        add(x:number, y:number): Vector2;
        add(v:Vector2): Vector2;
        add(a:any, b?:number): Vector2 {
            if (a instanceof Vector2) {
                this.x += a.x;
                this.y += a.y;
            }
            else {
                this.x += a;
                this.y += b;
            }
            
            return this;
        }
        
        /**
         * dummy
         */
        sub(x: number, y: number): Vector2 {
            this.x -= x;
            this.y -= y;
            return this;
        }
        
        /**
         * dummy
         */
        mul(v: number): Vector2 {
            this.x *= v;
            this.y *= v;
            return this;
        }
        
        /**
         * dummy
         */
        div(v: number): Vector2 {
            this.x /= v;
            this.y /= v;
            return this;
        }
        
        /**
         * dummy
         */
        length() {
            return Math.sqrt(this.x*this.x + this.y*this.y);
        }
        
        /**
         * dummy
         */
        lengthSquared() {
            return this.x*this.x + this.y*this.y;
        }
        
        /**
         * get distance between this and v.
         */
        distance(v:Vector2): number {
            return Math.sqrt( Math.pow(this.x-v.x, 2) + Math.pow(this.y-v.y, 2) );
        }
        
        /**
         * dummy
         */
        distanceSquared(v:Vector2): number {
            return Math.pow(this.x-v.x, 2) + Math.pow(this.y-v.y, 2);
        }
        
        /**
         * dummy
         */
        normalize() {
            var len = this.length();
            this.x /= len;
            this.y /= len;
            return this;
        }
        
        /**
         * dummy
         */
        clone(): Vector2 {
            return new Vector2(this.x, this.y);
        }
        
        /**
         * dummy
         */
        equals(v: Vector2): boolean {
            return this.x == v.x && this.y == v.y;
        }
        
        /**
         * dummy
         */
        equalsNumber(x: number, y: number): boolean {
            return this.x == x && this.y == y;
        }
        
        /**
         * dummy
         */
        equalsArray(arr: Array<number>): boolean {
            return this.x == arr[0] && this.y == arr[1];
        }
        
        /**
         * dummy
         */
        toString() {
            return "(" + this.x + "," + this.y + ")";
        }
        
        /**
         * dummy
         */
        log() {
            console.log( this.toString() );
        }
        
        /**
         * dummy
         */
        static add(lhs, rhs): Vector2 {
            return new Vector2(lhs.x+rhs.x, lhs.y+rhs.y);
        }
        
        /**
         * dummy
         */
        static sub(lhs, rhs): Vector2 {
            return new Vector2(lhs.x-rhs.x, lhs.y-rhs.y);
        }
        
        /**
         * dummy
         */
        static mul(vec, value): Vector2 {
            return new Vector2(vec.x*value, vec.y*value);
        }
        
        /**
         * dummy
         */
        static div(vec, value): Vector2 {
            return new Vector2(vec.x/value, vec.y/value);
        }
        
        /**
         * dummy
         */
        static min(lhs, rhs): Vector2 {
            return new Vector2(
                (lhs.x < rhs.x) ? lhs.x : rhs.x,
                (lhs.y < rhs.y) ? lhs.y : rhs.y
            );
        }
        
        /**
         * dummy
         */
        static max(lhs, rhs): Vector2 {
            return new Vector2(
                (lhs.x > rhs.x) ? lhs.x : rhs.x,
                (lhs.y > rhs.y) ? lhs.y : rhs.y
            );
        }
        
        /**
         * dummy
         */
        static dot(lhs, rhs) {
            return lhs.x * rhs.x + lhs.y * rhs.y;
        }
        
        /**
         * dummy
         */
        static cross(lhs, rhs) {
            return (lhs.x*rhs.y) - (lhs.y*rhs.x);
        }
        
        /**
         * dummy
         */
        static reflect(v: Vector2, normal: Vector2): Vector2 {
            var len = Vector2.dot(v, normal);
            var temp= Vector2.mul(normal, 2*len);
            return Vector2.sub(v, temp);
        }

    }
}

