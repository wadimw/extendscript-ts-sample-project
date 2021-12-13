/// <reference types="types-for-adobe/Photoshop/2015.5"/>
import "extendscript-es5-shim";
import { XMLBuilder } from "fast-xml-parser";

function multiply(multiplicand : number, multiplier : number = 2) : number {
    return multiplier * multiplicand;
}

function main() {
    $.bp();
    var arr = [1,2,...[3,4,5]];
    var arr2 = arr.map(e => multiply(e));
    var json = `JSON result: ${JSON.stringify(arr2)}`;
    $.writeln(json);
    alert(json);
    
    var cars = [
        {
            "color": "purple",
            "type": "minivan",
            "registration": "2020-02-03",
            "capacity": 7
            },
            {
            "color": "orange",
            "type": "SUV",
            "registration": "2021-05-17",
            "capacity": 4
            },
    ];
    var builder = new XMLBuilder({
        arrayNodeName: "car"
    });
    var xml = builder.build(cars);
    $.writeln(xml);
    alert(xml);
}

main();