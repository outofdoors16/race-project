$(document).ready(function() {
var Animal = function (n, s, f) { 
  this.name = n;
  this.speed = s;
  this.focus = f;
  this.position = 0;
    this.status = function() {
    return this.name + " is at " + this.position
  };
    this.run = function() {
    if (this.focus > (Math.floor(Math.random() * 10))) {
      this.position += this.speed,
      this.position += this.speed;
    }
  }
};

var turtle = new Animal("Turty", 2, 9.5),
    rabbit = new Animal("Harry", 7, 4);
  
      var flood = function(a1, a2) {
        a1.speed += 2.5;
        a2.speed -= 3;
      };
      var danceMusic = function(a1, a2) {
        a1.speed += (Math.random() * 7);
        a2.focus -= (Math.random() * 5);
      };
      var snowstorm = function(a1, a2) {
        a1.focus -= (Math.random() * 2);
        a2.speed -= (Math.random() * 5));
      }; 
    /*var input = prompt("What event do you want to occur during the race?: Flood, Dance Music, Snowstorm or Regular?");
    if (input == "Flood") {
      flood(turtle, rabbit);
    } else if (input == "Dance Music") {
      danceMusic(turtle, rabbit);
    } else if (input == "Snowstorm") {
      snowstorm(turtle, rabbit);
    } else {*/

    

$('#flood').on('click', 'button', function() {
  flood(turtle, rabbit);
      });
};
    var distance = 50;

    while(turtle.position < distance && rabbit.position < distance) {
      turtle.run();
      rabbit.run();
    };
    console.log(turtle.status()),
    console.log(rabbit.status());
    if (turtle.position > 50) {
      alert("Turty Won!")
    } else {
      alert("Harry Won!")
    };
    