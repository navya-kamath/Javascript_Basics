function createCar(_name,_company,_color){
    this.name = _name;
    this.company = _company;
    this.color = _color;

    this.drive = function(){
        console.log(`The person is riding ${this.name} and it is of ${this.color}`);
    }
};

let car1 = new createCar('X4', 'BMW', 'Black');
let car2 = new createCar('s-class', 'Mercedes', 'White');

console.log(car1);
car2.drive();
