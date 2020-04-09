var ball,computerPaddle,playerPaddle;

var p11,p2;

function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(200,200,10,10);
  playerPaddle = createSprite(380,200,10,70);
 computerPaddle = createSprite(10,200,10,70);
  p1 = createSprite(200,1,400,1);
  p2 = createSprite(200,400,400,1);
  
}

function draw() {
  background(220);
  
  
 
  
  //make the player paddle move with the mouse's y position
  playerPaddle.y = World.mouseY;
  
  //AI for the computer paddle
  //make it move with the ball's y position
  computerPaddle.y = ball.y;
  
  //create edge boundaries
  //make the ball bounce with the top and the bottom e
  ball.bounceOff(p1);
  ball.bounceOff(p2);
  
  //make the ball bounce off the paddles
  ball.bounceOff(playerPaddle);
  ball.bounceOff(computerPaddle);
  
  //serve the ball when space is pressed
  if (keyDown("space")) {
    serveBall();
  }
  DrawNet();
  
 
  //reset the ball to the centre if it crosses the screen
  if(ball.x > 400 || ball.x <0) {
    resetBall();
    
  }
  
  //draw the sprites on the screen
  drawSprites();
}

  
function DrawNet (){
      for (var number = 0 ; number < 400; number = number +20) {
    line(200,0+number,200,10+number);
    }}
  
  function resetBall () {
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    
  } 
  
  function serveBall (){
    ball.velocityY = 3;
    ball.velocityX = 4; 
}
