var background = new Image();
background.src = 'ocean2.jpg';

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
   startGame();
});


var myGamePiece;
var myBackground;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(100, 100, "beatsub.png", 10, 120, "image");
    myBackground = new component(700, 400, "ocean2.jpg", 0, 0, "image");
}

var myGameArea = {
   // canvas : document.createElement("canvas"),
    canvas : document.getElementById("myCanvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
       // document.body.insertBefore(this.canvas, document.body.childNodes[0]);
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
        if (type == "image") {
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
            if (type == "image") {
                ctx.drawImage(this.image, 
                    this.x, 
                    this.y,
                    this.width, this.height);
            } else {
                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
        this.newPos = function() {
            this.x += this.speedX;
            this.y += this.speedY;        
        }    
    }

function updateGameArea() {
    myGameArea.clear();
    myBackground.newPos();
    myBackground.update();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;    
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
    if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
    if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
    myGamePiece.newPos();    
    myGamePiece.update();
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