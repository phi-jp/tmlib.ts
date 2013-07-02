/*
 * vector2.ts
 */

class Vector2 {
    x: number;
    y: number;
    
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    
    length() {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
    
    normalize() {
        var len = this.length();
        this.x /= len;
        this.y /= len;
        return this;
    }
    
    toString() {
        return "(" + this.x + "," + this.y + ")";
    }
    
    log() {
        console.log( this.toString() );
    }
}


