document.addEventListener("DOMContentLoaded", function(){

function Dog(name, breed, weight) {
this.name = name;
this.breed = breed;
this.weight = weight;
}

    Dog.prototype.species = "Psowate";

     Dog.prototype.bark = function(){
         if(this.weight > 10){
             console.log(this.name + " szczeka hau!hau! ");
         } else {
             console.log(this.name + " szczeka hiauu!")
         }
        };

     Dog.prototype.run = function(){
         console.log("Biega!");
     };
     
     Dog.prototype.wag = function(){
         console.log("Merda ogonem!");
     };

    var fido = new Dog("Burek","mieszaniec", 20);
    var fluffy = new Dog("Dino", "pudel", 16);
    var spot = new Dog("Kieł", "chihuahua", 4);

    fido.bark();
    fido.run();
    fido.wag();

    fluffy.bark();
    fluffy.run();
    fluffy.wag();

    spot.bark();
    spot.run();
    spot.wag();

    spot.bark = function(){
        console.log(this.name + " szczeka HAU HAU!");
    };
    spot.bark();
    spot.run();
    spot.wag();

    /////////////////

    function Robot(name, year, owner){
        this.name = name;
        this.year = year;
        this.owner = owner;
    }
    Robot.prototype.maker =  "Paweł Kozak";
    Robot.prototype.speak = "Hurra!";
    Robot.prototype.makeCoffee = "I can make coffee!";
    Robot.prototype.blinkLights = "blinks!";

    var robby = new Robot("Robby", "2017", "Paw") ;
    var rosie = new Robit("Rosie","2009","Pabs");

    robby.onOffSwitch = ;
    robby.makeCoffee =  ;
    rosie.cleanHouse =  ;

    console.log(”Robot ” + robby.name + ” zostaï wyprodukowany przez ” + robby.maker + ” w roku ” + robby.year + ”, a teraz jego wïaĂcicielem jest ” + robby.owner);

robby.makeCoffee();
robby.blinkLights();

console.log(”Robot ” + rosie.name + ” został wyprodukowany przez ” + rosie.maker + ” w roku ” + rosie.year + ”, a teraz jego właścicielem jest ” + rosie.owner);
rosie.cleanHouse();

});
