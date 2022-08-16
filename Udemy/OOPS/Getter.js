//useful for validation purpose.


const account={
    owner:'Jonas',
    movements:[200,530,120,300],

    get latest(){
        return this.movements.slice(-1).pop();
    },

    //setter must have parameter where as get don't.
    set latest(mov){
        this.movements.push(mov);
    }
}

//access getter just like accessing a property.
console.log(account.latest);

//setter
account.latest=50;
console.log(account.movements);