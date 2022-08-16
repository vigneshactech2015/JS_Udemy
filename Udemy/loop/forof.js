let menu=["pizza","doza","maggi","pasta","biryani"];

for(const item of menu)console.log(item);

for(const item of menu.entries()){
    console.log(item);
}


//loop over object

for(let day of Object.keys(openingHours)){
    console.log(day);
}

//property values

const values=Object.values(openingHours);
console.log(values);

//Entire object

const entries=Object.entries(openingHours);
console.log(entries);


//dummy example

for(const [i,player] of game.scored.entries()){
    console.log(`Goal ${i+1}: ${player}`);
}

let average=0;
for(const odd of Object.values(game.odds)){
    average+=odd;
    average/=Object.values(game.odds).length;
    console.log(average);
}


