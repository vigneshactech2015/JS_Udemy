
const oneWord=function(str){
    return str.replaceAll(' ','').toLowerCase();
};

const upperFirstWord=function(str){
    const [first,...others]=str.split(' ');
    return [first,toUpperCase(),...others].join(' ');
};

//higher order function 

const transformer=function(str,fn){
    console.log(`original string:${str}`);
    console.log(`Transformed string : ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`)
}

transformer('JavaScript is the best!',upperFirstWord);

transformer('JavaScript is the best!',oneWord);


//function returning a new function

const greet=function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey=greet('hey');
greeterHey('Jonas');

//greet('Hello')('Jonas')  this is same as above