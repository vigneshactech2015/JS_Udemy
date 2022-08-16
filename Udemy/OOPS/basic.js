'use strict';

//this is the constructor function(blueprint of object)
const Person=function(firstname,birthyear){
this.firstname=firstname;
this.birthyear=birthyear;

//adding method.but this is bad practice.Never create method inside constructor
/*this.calcAge=function(){
    console.log(2037-this.birthYear)
}*/
}

const jonas=new Person('jonas',1991);
console.log(jonas); 

//1.new object is created
//2.function is called,this is assigned to object
//3.{} linked to prototype
//4.function automatically return {}

const matilda=new Person('Matilda',2017);
console.log(matilda);


//Prototypes -- to create a method we use prototype
Person.prototype.calcAge=function(){
    console.log(2037-this.birthYear);
}

jonas.calcAge();

//static method --not inherited in the prototype

Person.hey=function(){
    console.log('Hey there');
}

Person.hey();


//setting property(adding key and value to object) using prototype

Person.prototype.species='Homo Sapiens';

//to check own property
console.log(jonas.hasOwnProperty('firstname'));//returns true
console.log(jonas.hasOwnProperty('species'));//returns false



//array example for removing duplicate

const arr=[3,6,6,5,6,9,9];

//adding method
Array.prototype.unique=function(){
    return [...new Set(this)];
};

console.log(arr.unique());


//car example

//creating constructor
const Car=function(make,speed){
this.make=make;
this.speed=speed;
}

//creating object
const bmw=new Car('bmw',120);
const mercedes=new Car('mercedes',95);

console.log(bmw,mercedes);

//creating method

Car.prototype.accelerate=function(){
    console.log(this.speed+=10);
}

Car.prototype.brake=function(){
    console.log(this.speed-=5);
}

bmw.accelerate();
bmw.brake();
mercedes.accelerate();
mercedes.accelerate();


//another example

const Cars=function(make,speed){
    this.make=make;
    this.speed=speed;
    }
    
    
    //creating method
    
    Cars.prototype.accelerate=function(){
        console.log(this.speed+=10);
    }
    
    Cars.prototype.brake=function(){
        console.log(this.speed-=5);
    }

    const EV=function(make,speed,charge){
        Cars.call(this,make,speed);
        this.charge=charge;
    };

    //Link the prototype

EV.prototype=Object.create(Cars.prototype);


//adding method to prototype

EV.prototype.chargeBattery=function(chargeTo){
this.charge=chargeTo;
}

EV.prototype.accelerate=function(){
   this.speed+=20;
   this.charge--;
   console.log(`${this.make} is going at ${this.speed} km/h with charge of ${this.charge}`);
    }

    const tesla=new EV('Tesla',120,23);
    tesla.chargeBattery(90);
    console.log(tesla);
    tesla.brake();
    tesla.accelerate();