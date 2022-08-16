//class expression
//const PersonCl=class{}

//class declaration
class PersonCl{
    constructor(fullName,birthYear){
this.fullName=fullName;
this.birthYear=birthYear;
    }

    //creating method.It will be added to .prototype property
    //instance method
    calcAge(){
        console.log(2037-this.birthYear);
    }

    get age(){
        return 2037-this.birthYear;
    }

    set fullName(name){
if(name.includes(' ')) this._fullName=name;
else alert(`${this.name} is not a fullname`);
    }

    get fullName(){
        return this._fullName;
    }

    //static method

    static hey(){
        console.log('Hey there');
    }
}

const jessica=new PersonCl('Jessica Davis',1996);
console.log(jessica);

jessica.calcAge();

//getter example
console.log(jessica.age);

PersonCl.hey();

//1.classes are not hoisted even if it is class declaration.
//2.Class are first-class citizens.
//3.classes are executed in strict mode.



//car example

class CarCl{
    constructor(make,speed){
    this.make=make;
    this.speed=speed;
    }
    
    accelerate(){
        console.log(this.speed+=10);
    }
    
    brake(){
        console.log(this.speed-=5);
    }

    get speedUS(){
        return this.speed/1.6;
    }

    set speedUS(speed){
        this.speed=speed*1.6;
    }
}

const ford=new CarCl('Ford',120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS=50;
console.log(ford);





//inheritance between class example

class PersonCl{
    constructor(fullName,birthYear){
this.fullName=fullName;
this.birthYear=birthYear;
    }

    //creating method.It will be added to .prototype property
    //instance method
    calcAge(){
        console.log(2037-this.birthYear);
    }

    get age(){
        return 2037-this.birthYear;
    }

    set fullName(name){
if(name.includes(' ')) this._fullName=name;
else alert(`${this.name} is not a fullname`);
    }

    get fullName(){
        return this._fullName;
    }

    //static method

    static hey(){
        console.log('Hey there');
    }
}

//student inherit person by using extends keyword
class StudentCl extends PersonCl{
constructor(fullName,birthYear,course){
    //super Always needs to happen first beacuse of this keyword
    super(fullName,birthYear);
    this.course=course;
}

introduce(){
    console.log(`My name is ${this.fullName} and I study ${this.course}`)
}

calcAge(){
    console.log(`I'm ${2037-this.birthYear} years old`)
}
}

const martha=new StudentCl('Martha Jones',2012,'CS');
martha.introduce();
martha.calcAge();
