let board;
let boardHeight = 64;
let boardWidth = 64;
let context;
let spriteSheet = new Image();
let spriteWidth = 64;
let spriteHeight = 64;
let row = 2;
let sX = 0;
let col = 7;
let lastDrawTime = 0;
const drawInterval = 100; //100ms
let elaspedTime = 0;


spriteSheet.src = "./assets/afroMan.png";
window.onload = function() {
    board = document.getElementById("spriteBoard")
    board.height = boardHeight;
    board.width = boardWidth;
    context = board.getContext("2d");
    context.fillStyle ="white";
    context.font = "5px arial";
    // context.fillRect(0,0,30,30);
    requestAnimationFrame(update());
}

function update(timestamp) {
    if (!lastDrawTime) {
        lastDrawTime = timestamp;
    }
    elaspedTime = timestamp - lastDrawTime;
    if (elaspedTime > drawInterval){
        lastDrawTime = timestamp;
        let sY = (row-1) * 64;
        sX = sX+1;

        context.clearRect(0, 0, boardWidth, boardHeight);
        context.drawImage(spriteSheet, (sX%7)*64, sY, 64, 64, 0, 0, 64, 64);
    }
    requestAnimationFrame(update);


}