//mutates original array
//not for numbers

const owners=['Jonas','Zach','Adam','Martha'];
console.log(owners.sort());

//sorting in ascending order
const movements=[200,450,-400,3000,-650,-130,70,1300];
//a is current value and b is next value
movements.sort((a,b)=>{
if(a>b){
    return 1
}
if(a<b){
    return -1
}
})
console.log(movements);

//method 2

movements.sort((a,b)=>a-b);
console.log(movements);

//sorting in descending order

const movement=[200,450,-400,3000,-650,-130,70,1300];

movements.sort((a,b)=>{
if(a>b){
    return -1
}
if(a<b){
    return 1
}
})
console.log(movement);