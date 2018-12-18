var allAnimals = [];
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
    var tig = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var rare = new Unicorn("Rarity");
    var gem = new Giraffe("Gemma");
    var sting = new Bee("Stinger");

    allAnimals.push(tig, pooh, rare, gem, sting);

    for(var i = 0; i < allAnimals.length; i++){
        var curType = allAnimals[i].constructor.name;
        var curName = allAnimals[i].name;
        var curFood = allAnimals[i].favoriteFood;
        // var curID = i;
        $("#each").append('<div class="' + curName + '">' + curName + ' the ' + curType + ' -- Favorite food: ' + curFood + '</div>');
    }
}

function createAnimal(name){
    if(name.length !== 0){
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
    }else{
        alert("Please give your animal a name :(");
    }

}

function feedAnimals(food){
    for(var i = 0; i < allAnimals.length; i++){
        allAnimals[i].eat(food);
    }
}

function listAnimals(ani){
    allAnimals.push(ani);

    for(var i = 0; i < allAnimals.length; i++) {
        if(allAnimals[i] === ani){
            var curType = allAnimals[i].constructor.name;
            var curName = allAnimals[i].name;
            var curFood = allAnimals[i].favoriteFood;
            // var curID = allAnimals[i].constructor.name + i;

            $("#each").append('<div class="' + curName + '">' + curName + ' the ' + curType + ' -- Favorite food: ' + curFood + '</div>');
        }
    }
}

function deleteAnimal(name){
    for(var i = 0; i < allAnimals.length; i++){
        // if(allAnimals[i].name !== name){
        //     alert("Please enter a name of an Animal you currently have :)");
        // }
        if(allAnimals[i].name === name){
            allAnimals.splice(i, 1);
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