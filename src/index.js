var background = new Image();
background.src = 'ocean2.jpg';

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
   startGame();
   
});


var myGamePiece;
var myBackground;
var myObstacle;
var octopus;
var myMusic;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(100, 100, "beatsub.png", 10, 120, "image");
    myBackground = new component(700, 400, "ocean2.jpg", 0, 0, "background");
    myObstacle = new component(50, 50, "fishy.png", 300, 120, "image");
    octopus = new component(150, 150, "octy.png", 400, 200, "image");
     myMusic = new sound("oct.mp3");
 // myMusic.play();
}

var myGameArea = {
  
    canvas : document.getElementById("myCanvas"),
    start : function() {
        this.canvas.width = 700;
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
    
    myBackground.speedX = -1;
    myBackground.newPos();
    myBackground.update();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;   
    if (myGameArea.key) {myMusic.play();} 
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
    
    myGamePiece.newPos();    
    myGamePiece.update();
    myObstacle.x += -1;
    myObstacle.update();
    octopus.x += -.5;
    octopus.update();
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















// var myGamePiece;
// var myBackground;

// function startGame() {
//   myGamePiece = new component(100, 100, "beatsub.png", 10, 120, "image");
//   myBackground = new component(656, 350, "ocean2.jpg", 0, 0, "image");
//   myGameArea.start();
// }

// var myGameArea = {
//     canvas : document.getElementById("myCanvas"),
//     start : function() {
//         this.canvas.width = 700;
//         this.canvas.height = 400;
//         this.context = this.canvas.getContext("2d");
//         this.frameNo = 0;
//         this.interval = setInterval(updateGameArea, 20);
//         },
//     clear : function() {
//         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//     },
//     stop : function() {
//         clearInterval(this.interval);
//     }
// }

// function component(width, height, color, x, y, type) {
//     this.type = type;
//     if (type == "image") {
//         this.image = new Image();
//         this.image.src = color;
//     }
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;    
//     this.x = x;
//     this.y = y;    
//     this.update = function() {
//         ctx = myGameArea.context;
//         if (type == "image") {
//             ctx.drawImage(this.image, 
//                 this.x, 
//                 this.y,
//                 this.width, this.height);
//         } else {
//             ctx.fillStyle = color;
//             ctx.fillRect(this.x, this.y, this.width, this.height);
//         }
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY;        
//     }    
// }

// function updateGameArea() {
//   myGameArea.clear();
//   myBackground.newPos();
//   myBackground.update();
//   myGamePiece.newPos();
//   myGamePiece.update();
// }