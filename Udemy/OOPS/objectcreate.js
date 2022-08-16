
const PersonProto={
    calcAge(){
        console.log(2037-this.birthYear);
    },

    init(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    }
}

//method 1 -- manual way of adding property
const steven=Object.create(PersonProto);
console.log(steven);
steven.name='Steven';
steven.birthYear=2002;
steven.calcAge();


//method 2 --programmatic way of adding property
const sarah=Object.create(PersonProto);
sarah.init('Sarah',1979);
sarah.calcAge();

