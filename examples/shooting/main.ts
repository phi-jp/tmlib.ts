/// <reference path="../../src/geom/vector2.ts"/>

import hoge = module( "vector2" );

var va = new tm.geom.Vector2();
var vb = new tm.geom.Vector2(5, 10);

console.log(va.toString());
console.log(vb.toString());

va.set(10, 5);
console.log(va.toString());

va.set(vb);
console.log(vb.toString());
