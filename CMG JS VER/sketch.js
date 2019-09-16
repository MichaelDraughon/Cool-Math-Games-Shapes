shapeNum = 6 //Number of total shapes you want to follow your mouse
spacing = 5 //number of frames between the drawing of each shape

function setup() {
  createCanvas(displayWidth, displayHeight);
  mouseLog = [];
}

function draw() {
  clear();
  background(0, 0, 0, 0);
  strokeWeight(5);
  stroke(255);
  mouseTrack();
  if (frameCount >= shapeNum * spacing) {
    for (let i = 0; i < 6; i++) {
      // random noise is generated when the mouse is moving to add fluidity
      if (mouseLog[0].x != mouseLog[1].x && mouseLog[0].y != mouseLog[1].y) {
        if (i == 5) {
          diamond((mouseLog[i * spacing].x) + noiseGen(), (mouseLog[i * spacing].y - ((i - shapeNum) * 40)) + noiseGen(), 20);
        } else if (i == 4) {
          circle((mouseLog[i * spacing].x) + noiseGen(), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) + noiseGen() - 10, 32);
        } else if (i == 3) {
          triangle_((mouseLog[i * spacing].x) + noiseGen(), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) + noiseGen() - 10, 20);
        } else if (i == 2) {
          square_((mouseLog[i * spacing].x) + noiseGen(), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) + noiseGen() - 10, 32);
        } else if (i == 1) {
          pentagon((mouseLog[i * spacing].x) + noiseGen(), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) + noiseGen() - 10, 20);
        } else {
          oval((mouseLog[i * spacing].x) + noiseGen(), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) + noiseGen() - 10, 32);
        }
      // if mouse is stationary, then no random noise is generated
      } else {
        if (i == 5) {
          diamond((mouseLog[i * spacing].x), (mouseLog[i * spacing].y - ((i - shapeNum) * 40)), 20);
        } else if (i == 4) {
          circle((mouseLog[i * spacing].x), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) - 10, 32);
        } else if (i == 3) {
          triangle_((mouseLog[i * spacing].x), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) - 10, 20);
        } else if (i == 2) {
          square_((mouseLog[i * spacing].x), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) - 10, 32);
        } else if (i == 1) {
          pentagon((mouseLog[i * spacing].x), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) - 10, 20);
        } else {
          oval((mouseLog[i * spacing].x), (mouseLog[i * spacing].y - ((i - shapeNum) * 50)) - 10, 32);
        }
      }
    }
  }
}

function mouseTrack() {
  if (frameCount <= shapeNum * spacing) {
    append(mouseLog, new PVector(mouseX, mouseY));
  } else {
    mouseLog = reverse(mouseLog);
    mouseLog.pop();
    mouseLog = reverse(mouseLog);
    append(mouseLog, new PVector(mouseX, mouseY));
  }
}

function noiseGen() {
  return random(-1, 1);
}

function PVector(x, y) {
  this.x = x;
  this.y = y;
}

//----------------------------------------------------------------SHAPES--------------------------------------------------------//

function diamond(x, y, scale) {
  push();
  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex((scale * cos(0)) + x, (scale * sin(0)) + y);
  vertex((scale * cos(PI / 2)) + x, (scale * sin(PI / 2)) + y);
  vertex((scale * cos(PI)) + x, (scale * sin(PI)) + y);
  vertex((scale * cos((3 / 4) * TAU)) + x, (scale * sin((3 / 4) * TAU)) + y);
  vertex((scale * cos(0)) + x, (scale * sin(0)) + y);
  endShape();
  pop();
}

function circle(x, y, scale) {
  push();
  fill(255, 100, 0);
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, scale, scale);
  pop();
}

function triangle_(x, y, scale) {
  push();
  fill(255, 255, 0);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex((scale * cos(-PI / 2)) + x, (scale * sin(-PI / 2)) + y);
  vertex((scale * cos(-(7 * PI) / 6)) + x, (scale * sin(-(7 * PI) / 6)) + y);
  vertex((scale * cos(-(11 * PI) / 6)) + x, (scale * sin(-(11 * PI) / 6)) + y);
  vertex((scale * cos(-PI / 2)) + x, (scale * sin(-PI / 2)) + y);
  endShape();
  pop();
}

function square_(x, y, scale) {
  push();
  fill(0, 255, 0);
  stroke(0);
  strokeWeight(2);
  rectMode(CENTER);
  rect(x, y, scale, scale);
  pop();
}

function pentagon(x, y, scale) {
  push();
  fill(0, 0, 255);
  stroke(0);
  strokeWeight(2);
  beginShape();
  vertex((scale * cos((-PI / 2) - TAU / 5)) + x, (scale * sin((-PI / 2) - TAU / 5)) + y);
  vertex((scale * cos((-PI / 2) - (2 * TAU) / 5)) + x, (scale * sin((-PI / 2) - (2 * TAU) / 5)) + y);
  vertex((scale * cos((-PI / 2) - (3 * TAU) / 5)) + x, (scale * sin((-PI / 2) - (3 * TAU) / 5)) + y);
  vertex((scale * cos((-PI / 2) - (4 * TAU) / 5)) + x, (scale * sin((-PI / 2) - (4 * TAU) / 5)) + y);
  vertex((scale * cos((-PI / 2) - (5 * TAU) / 5)) + x, (scale * sin((-PI / 2) - (5 * TAU) / 5)) + y);
  vertex((scale * cos((-PI / 2) - TAU / 5)) + x, (scale * sin((-PI / 2) - TAU / 5)) + y);
  endShape();
  pop();
}

function oval(x, y, scale) {
  push();
  fill(100, 0, 255);
  stroke(0);
  strokeWeight(2);
  ellipse(x, y, scale, scale * 1.5);
}
