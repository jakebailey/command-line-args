var test = require("tap").test;
var parse = require("../lib/command-line-args");

var optionDefinitions = [
    { name: "verbose", alias: "v", type: "boolean" },
    { name: "dry", alias: "d", type: Boolean },
    { name: "colour", alias: "c" },
    { name: "number", alias: "n", type: Number },
    { name: "files", defaultOption: true }
];

test("one boolean", function(t){
    var argv = [ "--verbose" ];
    t.deepEqual(parse(optionDefinitions, argv), {
        verbose: true
    });
    t.end();
});

test("one boolean, one string", function(t){
    var argv = [ "--verbose", "--colour", "red" ];
    t.deepEqual(parse(optionDefinitions, argv), {
        verbose: true,
        colour: "red"
    });
    t.end();
});