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
    width : doodlerWidth,
    height : doodlerHeight,
}

//physic
let velocityX = 0; 

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardheight;
    board.width = boardwidth;
    context = board.getContext("2d"); 

    //draw doodle
    //context.fillStyle = "green";
    //context.fillRect(doodler.x, doodler.y, doodler.with, doodler.height);


    //load images
    doodler.img = new Image();
    doodler.img.src = "../img/doodler-right.png";
    doodler.img.onload = function() {
    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.with, doodler.height);
    }

    doodlerLeftImg = new Image();
    doodlerLeftImg.src = "../img/doodler-letf.png";
    

    requestAnimationFrame(update);
    document.addEventListener("keydown", moveDoodle);

}


function update() {


    //doodle
    doodler.x += velocityX;
    requestAnimationFrame(update);
    context.drawImage(doodler.img, doodler.x, doodler.y, doodler.width, doodler.height);

}


function moveDoodle(e) {
    if (e.code == "ArrowRight" || e.code == "KeyD") {
        velocityX = 4;
        doodler.img = doodlerRightImg;
    }
    else if (e.code == "ArrowLeft" || e.code == "KeyQ") {
        velocityX = -4;
        doodler.img = doodlerLeftImg;

    }
}


