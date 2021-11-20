/// <reference types="types-for-adobe/Photoshop/2015.5"/>
import "extendscript-es5-shim";

function multiply(multiplicand : number, multiplier : number = 2) : number {
    return multiplier * multiplicand;
}

function main() {
    $.bp();
    var arr = [1,2,...[3,4,5]];
    var arr2 = arr.map(e => multiply(e));
    $.writeln(`result ${JSON.stringify(arr2)}`);
}

main();