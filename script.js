var allAnimals = [];

$(document).ready(function(){
    $("body").onload(function () {
       start();
    });
    $("#create").click(function(){
        createAnimal($("#name").val());
    });
    $("#feed").click(function(){
        feedAnimals($("#food").val());
    });
});

function start(){
    var tig = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var rare = new Unicorn("Rarity");
    var gemma = new Giraffe("Gemma");
    var sting = new Bee("Stinger")
}

function createAnimal(name){
    var ani = "";
    switch($("#type").val()){
        case "Tiger":
           ani = new Tiger(name);
           break;
        case "Bear":
            ani = new Bear(name);
            break;
        case "Unicorn":
            ani = new Unicorn(name);
            break;
        case "Giraffe":
            ani = new Giraffe(name);
            break;
        case "Bee":
            ani = new Bee(name);
    }
    listAnimals(ani);
}


function feedAnimals(food){
    for(i = 0; i < allAnimals.length; i++){
        allAnimals[i].eat(food);
    }
}

function listAnimals(ani){
    allAnimals.push(ani);
    console.log(allAnimals);
}

function deleteAnimal(name){
    listAnimals();
}

class Animal {
    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours");
    }

    eat(food) {
        console.log(this.name + " eats " + food);

        (food === this.favoriteFood) ? console.log("YUM!!! " + this.name + " wants more " + food) : this.sleep();
    }

    // static getPopulation() {
    //     return animalPopulation;
    // }
}

class Tiger extends Animal{

    constructor(name) {
        super(name, "meat");
    }

}

class Bear extends Animal{
    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months");

    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "marshmallows")
    }

    sleep(){
        console.log(this.name + " sleeps in a cloud");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "leaves");
    }

    eat(food){
        (food === this.favoriteFood) ? super.eat("leaves") : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}

class Bee extends Animal{
    constructor(name){
        super(name, "pollen")
    }

    sleep(){
        console.log(this.name + " never sleeps");
    }

    eat(food){
        (food === this.favoriteFood) ? super.eat("pollen") : console.log("YUCK!!! " + this.name + " will not eat " + food);
    }
}

class Zookeeper {
    constructor(name){
        this.name = name;
    }

    feedAnimals (animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + animalPopulation + " total animals");

        for(var i = 0; i < animals.length; i++){
            animals[i].eat(food);
        }
    }
}