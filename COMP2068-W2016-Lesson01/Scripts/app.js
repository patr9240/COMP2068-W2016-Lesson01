/// <reference path="../typings/tsd.d.ts"/>
console.log("App Started...");
var Person = (function () {
    //Constructor function
    function Person(name) {
        this._name = name;
    }
    //public methods
    Person.prototype.speak = function () {
        console.log(this._name + "says hello");
    };
    return Person;
})();
var patrick = new Person("Patrick");
patrick.speak();
//# sourceMappingURL=app.js.map