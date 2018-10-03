function preload(){
  // put preload code here

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
    background(40);
    angleMode(DEGREES);

    frameRate(12);

}

function draw() {
  // put drawing code here
push();
  translate(width/3,height/2);
   rotate(frameCount*3);
   noFill();

   // lerpColor blends two colors to find a third color somewhere between them.
   // lerpColor(col1,col2,amount)
   stroke(lerpColor(color(255,184,73), color(84,176,255), frameCount/120));
   line(100,0,250,250);
   if (frameCount == 120) {
      noLoop();
    }
pop();
push();
  translate(width/2,height/2);
   rotate(frameCount*3);
   noFill();

   // lerpColor blends two colors to find a third color somewhere between them.
   // lerpColor(col1,col2,amount)
   stroke(lerpColor(color('#0fefca'), color('#ea0043'), frameCount/120));
   line(100,0,250,250);
   if (frameCount == 120) {
      noLoop();
    }
pop();
push();
  translate(width/2,height/2);
   rotate(frameCount*9);

   noFill();

   // lerpColor blends two colors to find a third color somewhere between them.
   // lerpColor(col1,col2,amount)
   stroke(lerpColor(color(30,41,178), color(30,41,178), frameCount/120));
   rect(0,0,68,68);
   if (frameCount == 120) {
      noLoop();
    }
pop();
push();
  translate(1020,height/2);
   rotate(-frameCount*3);
   noFill();

   // lerpColor blends two colors to find a third color somewhere between them.
   // lerpColor(col1,col2,amount)
   stroke(lerpColor(color(255,84,237), color(142,255,99), frameCount/120));
   line(100,0,250,250);
   if (frameCount == 120) {
      noLoop();
    }
pop();
push();
  translate(260,height/2);
   rotate(-frameCount*9);

   noFill();

   // lerpColor blends two colors to find a third color somewhere between them.
   // lerpColor(col1,col2,amount)
   stroke(lerpColor(color(255,212,73), color(255,212,73), frameCount/120));
   rect(0,0,68,68);
   if (frameCount == 120) {
      noLoop();
    }
pop();
push();

  translate(1270,height/2);
   rotate(frameCount*9);
   noFill();

   // lerpColor blends two colors to find a third color somewhere between them.
   // lerpColor(col1,col2,amount)
   stroke(lerpColor(color(187,30,17), color(187,30,17), frameCount/120));
   rect(0,0,68,68);
   if (frameCount == 120) {
      noLoop();
    }
pop();

}
