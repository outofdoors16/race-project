$(document).ready(function() {
  $("#outcome").hide();
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
}
var turtle = new Animal("Turty", 2, 9.5),
    rabbit = new Animal("Harry", 7, 4),
  
       flood = function(a1, a2) {
        a1.speed += 2.5;
        a2.speed -= 3;
      };
       danceMusic = function(a1, a2) {
        a1.speed += (Math.random() * 7);
        a2.focus -= (Math.random() * 5);
      };
       snowstorm = function(a1, a2) {
        a1.focus -= (Math.random() * 2);
        a2.speed -= (Math.random() * 5);
      };
$('#flood').on('click', function() {
    flood(turtle, rabbit),
    RunRace();
    });
$('#danceMusic').on('click', function() {
    danceMusic(turtle, rabbit),
    RunRace();
  });
$('#snowstorm').on('click', function() {
    snowstorm(turtle, rabbit),
    RunRace();
  });
$('#regular').on('click', function() {
    Animal(),
    RunRace();
  });
    var RunRace = function() {
      var distance = 50;
      while(turtle.position < distance && rabbit.position < distance) {
      turtle.run();
      rabbit.run();
      };
      console.log(turtle.status()),
      console.log(rabbit.status());
      $("#outcome").fadeIn(function(){
        if (turtle.position>50) {
          $(this).html("Turty Wins!");
        } else {
          $(this).html("Harry Wins!");
        }
      });
        /*if (turtle.position > 50) {
      alert("Turty Won!")
        } else {
      alert("Harry Won!")
        };*/
      };
    });