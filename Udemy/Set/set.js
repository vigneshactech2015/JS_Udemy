//in set there is no indexes hence can't get data out of a set.

const ordersSet=new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza'
]);

//to calculate length of set we use .size
console.log(ordersSet.size);

console.log(ordersSet.has('Pizza'));

ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');


//MAP here key can be of any datatype

//example 1
const rest=new Map();
//to add
rest.set('name','Classico Italiano');
rest.set(1,'Firenze,Italy');

rest.set('categories',['Italian','Pizzeria','Vegetarian','Organic'])
.set('open',11)
.set('close',23)
.set(true,'We are open')
.set(false,'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time=21;
console.log(rest.get(time>rest.get('open')&&time<rest.get('close')));


//example 2

const question=new Map([
  ['question','What is the best programming language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true,'correct'],
  [false,'try again']
]);

console.log(question);

console.log(question.get('question'));
for(const[key,value] of question){
    if(typeof key==='number') console.log(`Answer ${key}:${value}`);
}

const answer=Number(propmpt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct')===answer));



//practise

const gameEvents=new Map([
    [17,'GOAL'],
    [36,'Substitution'],
    [47,'GOAL'],
    [61,'Substitution'],
    [64,'Yellow Card'],
    [69,'Red Card'],
    [70,'Substitution'],
    [72,'Substitution'],
    [76,'GOAL'],
    [80,'GOAL'],
    [92,'Yellow Card'],
]);

const events=[...new Set(gameEvents.values())];
console.log(events);

//deleting 64 min event
gameEvents.delete(64);

//average

const tim=[...gameEvents.keys()].pop();

console.log(`An event happened, on average,every ${tim/gameEvents.size} minutes`);

for(const [min,event] of gameEvents){
    const half=min<=45?'FIRST':'SECOND';
    console.log(`[${half}HALF] ${min}:${event}`);
}





