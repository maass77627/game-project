
var submarine;
var background;
var fish;
var fish2;
var fish3;
var octopus;
var music;
var flowers;
var crab;
var jellyfish;
var gfish;
var bubble;
var bubbleSound;
//var psy;

function startGame() {
    myGameArea.start();
    submarine = new component(100, 100, "beatsub.png", 10, 120, "image");
    background = new component(700, 400, "ocean2.jpg", 0, 0, "background");
    fish = new component(50, 50, "fishy.png", 800, 120, "image");
    fish2 = new component(50, 50, "fishy.png", 3000, 150, "image");
    fish3 = new component(50, 50, "fishy.png", 900, 100, "image");
    octopus = new component(150, 150, "octy.png", 1000, 200, "image");
    music = new sound("oct.mp3");
    flowers  = new component(700, 250, "flowers.png", 0, 200, "background");
    crab = new component(100, 100, "krabby.png", 1300, 300, "image");
    jellyfish = new component(100, 100, "jellyfish.png", 900, 0, "image");
    gfish = new component(60, 60, "gfish.png", 900, 225, "image");
    bubble = new component(60, 60, "bubbles.png", 500, 225, "image");
   bubbleSound = new sound("pop.mp3");
   // psy = new component(60, 60, "psy.png", 400, 330, "image");
 
 
}

var myGameArea = {
  
    canvas : document.getElementById("myCanvas"),
    start : function() {
        this.canvas.width = 900;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
      
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    }, 
    stop : function() {
        clearInterval(this.interval);
    },    
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

 function component(width, height, color, x, y, type) {
        this.type = type;
        if (type == "image" || type == "background") {
            this.image = new Image();
            this.image.src = color;
        }
        this.width = width;
        this.height = height;
        this.speedX = 0;
        this.speedY = 0;    
        this.x = x;
        this.y = y;    
        this.update = function() {
            ctx = myGameArea.context;
            if (type == "image" || type == "background") {
                ctx.drawImage(this.image, 
                    this.x, 
                    this.y,
                    this.width, this.height);
                    if (type == "background") {
                        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
                      }
            } else {
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
        this.loopIt = function() {
            if (this.x == -(this.width)) {
                this.x = 1000;
        }
    }
    this.bubbleCrash = function() {
        if (this.x == bubble.x) {
            //bubble.clear();
            bubbleSound.play();
    }
}
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;  
            if (this.type == "background") {
                if (this.x == -(this.width)) {
                  this.x = 0;
                }
              }      
        }    
    }

function updateGameArea() {
  
    myGameArea.clear();
    
    background.speedX = -1;
    background.newPos();
    background.update();


    submarine.speedX = 0;
    submarine.speedY = 0;   
    if (myGameArea.key) {music.play();} 
    if (myGameArea.key && myGameArea.key == 37) {submarine.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {submarine.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {submarine.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {submarine.speedY = 1; }
    
    submarine.newPos(); 
    submarine.bubbleCrash();   
    submarine.update();

    fish.loopIt();
    fish.x += -2.2;
    fish.update();

    fish2.loopIt();
    fish2.x += -3;
    fish2.update();

    fish3.loopIt();
    fish3.x += -2;
    fish3.update();

    octopus.loopIt();
    octopus.x += -.5;
    octopus.update();


    crab.loopIt();
    crab.x += -2;
    crab.update();

    jellyfish.loopIt();
    jellyfish.x += -2;
    jellyfish.update();

    gfish.loopIt();
    gfish.x += -2.5;
    gfish.update();

    bubble.update();

   // psy.update();

    flowers.speedX = -1;
    flowers.newPos();
    flowers.update();
   
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}

//function pauseButton() {
var pause = document.getElementById("stop");
// pause.addEventListener("click", end())
// function end() {
//     myGameArea.stop();
//     console.log("stopped")
// }}

pause.addEventListener("click", function(){
    this.style.backgroundColor = "red";
    myGameArea.stop();
    console.log("frozen");
    //this.sound.pause();
  });









  document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
   startGame();
   
});





