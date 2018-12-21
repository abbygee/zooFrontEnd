let allAnimals = [];
$(document).ready(function(){
    start();
    $("#create").click(function(){
        createAnimal($("#name").val());
    });
    $("#feed").click(function(){
        feedAnimals($("#food").val());
    });
    $("#delete").click(function(){
        deleteAnimal($("#del").val());
    });
});

function start(){
    let tig = new Tiger("Tigger");
    let pooh = new Bear("Pooh");
    let rare = new Unicorn("Rarity");
    let gem = new Giraffe("Gemma");
    let sting = new Bee("Stinger");

    allAnimals.push(tig, pooh, rare, gem, sting);

    for(let i = 0; i < allAnimals.length; i++){
        let curType = allAnimals[i].constructor.name;
        let curName = allAnimals[i].name;
        let curFood = allAnimals[i].favoriteFood;
        // let curID = i;
        $("#each").append('<div class="' + curName + '">' + curName + ' the ' + curType + ' -- Favorite food: ' + curFood + '</div>');
    }
}

function createAnimal(name){
    //Creates a new animal only under the circumstances that
    //it has a unique name throughout all of the animals
    //and it has a name length of at least one character
    let animalNames = [];
    for(let i = 0; i < allAnimals.length; i++){
        animalNames.push(allAnimals[i].name);
    }
    let checkName = animalNames.includes(name);
    if((name.length !== 0) && (checkName === false)){
        let ani = "";
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
    }else{
        alert("Please give your animal a unique name :(");
    }
}

function feedAnimals(food){
    //clear out div
    $("#log").html("");

    for(let i = 0; i < allAnimals.length; i++){
        allAnimals[i].eat(food);
    }
}

function listAnimals(ani){
    allAnimals.push(ani);

    for(let i = 0; i < allAnimals.length; i++) {
        if(allAnimals[i] === ani){
            let curType = allAnimals[i].constructor.name;
            let curName = allAnimals[i].name;
            let curFood = allAnimals[i].favoriteFood;

            $("#each").append('<div class="' + curName + '">' + curName + ' the ' + curType + ' -- Favorite food: ' + curFood + '</div>');
            $("#log").append(curName + " the " + curType + " was created<br>");
        }
    }
}

function deleteAnimal(name){
    for(let i = 0; i < allAnimals.length; i++){
        if(allAnimals[i].name === name){
            $("#log").append(name + " the " + allAnimals[i].constructor.name + " was deleted<br>");
            allAnimals.splice(i, i);
        }
    }
    $("." + name).hide();
}

class Animal {
    constructor(name, favoriteFood){
        this.name = name;
        this.favoriteFood = favoriteFood;
    }

    sleep() {
        $("#log").append(this.name + " sleeps for 8 hours<br>");
    }

    eat(food) {
        $("#log").append(this.name + " eats " + food + "<br>");

        (food === this.favoriteFood) ? $("#log").append("YUM!!! " + this.name + " wants more " + food + "<br>") : this.sleep();
    }
}

class Tiger extends Animal{

    constructor(name) {
        super(name, "Meat");
    }

}

class Bear extends Animal{
    constructor(name) {
        super(name, "Fish");
    }

    sleep() {
        $("#log").append(this.name + " hibernates for 4 months<br>");

    }
}

class Unicorn extends Animal{
    constructor(name){
        super(name, "Marshmallows")
    }

    sleep(){
        $("#log").append(this.name + " sleeps in a cloud<br>");
    }
}

class Giraffe extends Animal{
    constructor(name){
        super(name, "Leaves");
    }

    eat(food){
        (food === this.favoriteFood) ? super.eat("leaves") : $("#log").append("YUCK!!! " + this.name + " will not eat " + food + "<br>");
    }
}

class Bee extends Animal{
    constructor(name){
        super(name, "Pollen")
    }

    sleep(){
        $("#log").append(this.name + " never sleeps<br>");
    }

    eat(food){
        (food === this.favoriteFood) ? super.eat("pollen") : $("#log").append("YUCK!!! " + this.name + " will not eat " + food + "<br>");
    }
}