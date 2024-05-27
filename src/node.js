//board
let board;
let boardwidth = 360;
let boardheight = 567;
let context;


//doodler
let doodlerWidth = 46;
let doodlerHeight = 46;
let doodlerX = boardwidth/2 - doodlerWidth/2;
let doodlerY = boardheight*7/8 - doodlerHeight;
let doodlerRightImg;
let doodlerLeftImg;


let doodler = {
    img : null,
    x : doodlerX,
    y : doodlerY,
    with : doodlerWidth,
    height : doodlerHeight,
}

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d"); 

    //draw doodle
    context.fillStyle = "green";
    context.fillRect(doodler.x, doodler.y, doodler.with, doodler.height);


    //load images
    doodler.img = new Image();
    doodler.img.src = "../img/doodler-right.png";
    doodler.img.onload = function() {
    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.with, doodler.height);
    }
}
