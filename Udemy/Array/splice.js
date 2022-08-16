const checkDogs=function(dogsJulia,dogsKate){
    const dogsJuliaCorrected=dogsJulia.slice();
    //slice creates a shallow copy and doesn't alter a original array
    dogsJuliaCorrected.splice(0,1);
    //splice(index,number of items to be deleted)
    dogsJuliaCorrected.splice(-2);

    const dogs=dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    dogs.forEach(function(dog,i){
        if(dog>=3){
            console.log(`Dog number ${i+1} is an adult,and is ${dog} years old`)
        }else{
            console.log(`Dog number ${i+1} is still a puppy`);
        }
    })

}
checkDogs([3,5,2,12,7],[4,1,15,8,3]);



//to add using splice
const fruits=["apple","orange","grapes","guava"];
fruits.splice(2,0,"kiwi","strawberry");
console.log(fruits);