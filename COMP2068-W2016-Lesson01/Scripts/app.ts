/// <reference path="../typings/tsd.d.ts"/>

console.log("App Started...");



class Person {
    //private isntance variables
   private _name:string;
   
   //Constructor function
    constructor(name:string){
        this._name = name;
        
    }
    //public methods
    public speak():void{
        console.log(this._name + "says hello");
    }
}

let patrick:Person = new Person("Patrick");
patrick.speak();


