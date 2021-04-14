var ball,ballImg;
var database,pos;

function prelod(){
ballImg=loadImage("ballon.png")
}

function setup(){
    createCanvas(500,500);
    ball.addImage(ballImg,"ballon");
    

    database=firebase.database()
    pos=database.ref('ball/position');
    pos.on("value", readPosition, showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
 var  pos2=data.val();
    console.log(pos2.x,pos2.y)
    ball.x=pos2.x;
    ball.y=pos2.y;
}

function showError(){
console.log("error")
}

function writePosition(x,y){
    pos.set({
        'x':ball.x+x,
        'y':ball.y+y,
    })
}
