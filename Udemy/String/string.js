
const airline='TAP Air Portugal';
const plane='A320';

console.log(airline.indexOf('Portugal'));
console.log(airline.lastIndexOf('r'));

//slice where the execution starts-index based-it cuts off the index value
console.log(airline.slice(4));

//slice(start,end);
console.log(airline.slice(4,7));

//extract first letter in a string

console.log(airline.slice(0,airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

//example

const checkMiddleSeat=function(seat){
  //B and E are middle seats
  const s=seat.slice(-1);
  if(s==='B'||s==='E'){
    console.log("you got the middle seat");
  }
  else console.log("you got cool seat");
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//capitalize

const passenger='jOnAs';
const passengerLower=passenger.toLowerCase();
const passengerCorrect=passengerLower[0].toUpperCase()+passengerLower.slice(1);
console.log(passengerCorrect);

//comparing email

const email='hello@jonas.io';
const loginEmail='  Hello@Jonas.Io \n';

const lowerEmail=loginEmail.toLowerCase();
//trim remove unnecessary space
const trimmedEmail=lowerEmail.trim();
console.log(trimmedEmail);


//replace part of string

const priceGB='288,97#';
const priceUS=priceGB.replace('#','$').replace(',','.');
console.log(priceUS);

const announcement='All passengers come to boarding door 23.Boarding door 23!';

console.log(announcement.replace(/door/g,'gate'));


//Booleans

const plan='Airbus A320neo';
console.log(plan.includes('A320'));
console.log(plan.startsWith('A'));

if(plan.startsWith('Airbus')&&plan.endsWith('neo')){
  console.log('Part of the new airbus family');
}

//practice

const checkBaggage=function(items){
  const baggage=items.toLowerCase();
  if(baggage.includes('knife')||baggage.includes('gun')){
    console.log('You are NOT allowed on board');
  }else{
    console.log("Welcome aboard");
  }
}

checkBaggage('I have Knife and gun for protection');


//split method

const [firstName,lastName]='Jonas Schmedtmann'.split(' ');
const newName=['Mr.',firstName,lastName].join(' ');
console.log(newName);

//capitalize function

const capitalizeName=function (name){
  const names=name.split(' ');
  const namesUpper=[];

  for(const n of names){
    namesUpper.push(n[0].toUpperCase()+n.slice(1));
    //namesUpper.push(n.replace(n[0],n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');


//padding a string

const message='Go to gate 23!';
console.log(message.padStart(25,'+'));

//masking credit card

const maskCreditCard=function(number){
  const str=number+'';
  const last=str.slice(-4);
  return last.padStart(str.length,'*');
}

console.log(maskCreditCard(43378468386));

//Repeat method

const message2='Bad weather...All departure delayed...';
console.log(message2.repeat(5));


//textarea example

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click',function(){
  const text=document.querySelector('textarea').value;
  const rows=text.split('\n');
  console.log(rows);

  for(const [i,row] of rows.entries()){
    const [first,second]=row.toLowerCase().trim().split('_');
   const output=`${first}${second.replace(second[0],second[0].toUpperCase())}`;

  }
  console.log(`${output.padEnd(20)}${'|'.repeat(i+1)}`);
})

//example

const flights='_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao03766109;11.45+_Delayed_Arrival;hel74399980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


for(const flight of flights.split('+')){
const[type,from,to,time]=flight.split(';');
const output=`${type.startsWith('_Delayed')?'Danger':''}  ${type.replaceAll('_',' ')} ${from.slice(0,3).toUpperCase()} ${to.slice(0,3).toUpperCase()} (${time.replace(':','h')})`.padStart(36);
console.log(output);
}
