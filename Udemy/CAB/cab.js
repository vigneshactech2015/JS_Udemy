
const lufthansa={
    airline:'Lufthansa',
    iataCode:'LH',
    bookings:[],
    book:function(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
    this.bookings.push({flight:`${this.iataCode} ${flightNum}`,name});
    }
}

lufthansa.book(239,'Jonas');
lufthansa.book(635,'John Smith');
console.log(lufthansa);

const eurowings={
    name:'EuroWings',
    iataCode:'EW',
    bookings:[],
}

const book=lufthansa.book;

//call takes two arguments(where this keyword points to,normal arguments)
book.call(eurowings,23,'Sarah Williams');
console.log(eurowings);

//apply method

book.apply(eurowings,[555,'George Cooper']);


//bind method.it doesn't immediately call function.it returns a new fn where this keyword is bound.

const bookEW=book.bind(eurowings);
bookEW(23,'Steven Williams');

const bookEW23=book.bind(eurowings,23);
bookEW23('Vignesh');
bookEW23('Kiara');



//partial application

const addTax=(rate,value)=>value+value*rate;
console.log(addTax(0.1,200));

const addVAT=addTax.bind(null,0.23);

console.log(addVAT(100));
console.log(addVAT(23));
