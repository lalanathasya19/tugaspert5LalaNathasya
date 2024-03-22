class Mover { 
  constructor(x, y) { 
    this.location = createVector(x, y); 
    this.velocity = createVector(random(-2, 2), random(-2, 2)); 
  }
  
  display() { 
    noStroke(); 
    fill(0); 
    let r = random(25, 50);
    beginShape();
    let angleStep = TWO_PI / 7;
    for (let a = 0; a < TWO_PI; a += angleStep) {
      let x = this.location.x + cos(a) * r;
      let y = this.location.y + sin(a) * r;
      vertex(x, y);
      let x2 = this.location.x + cos(a + angleStep / 2) * (r * 0.75);
      let y2 = this.location.y + sin(a + angleStep / 2) * (r * 0.75);
      vertex(x2, y2);
    }
    endShape(CLOSE);
  } 
  
  update() { 
    this.location.add(this.velocity); 
  } 
  
  cekUjung() { 
    if (this.location.x > windowWidth) { 
      this.location.x = 0; 
    } else if (this.location.x < 0) { 
      this.location.x = windowWidth; 
    } 
   
    if (this.location.y > windowHeight) { 
      this.location.y = 0; 
    } else if (this.location.y < 0) { 
      this.location.y = windowHeight; 
    } 
  } 
}

let movers = [];
let numOfMovers = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < numOfMovers; i++) {
    movers.push(new Mover(random(width), random(height)));
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < movers.length; i++) {
    movers[i].cekUjung(); 
    movers[i].display(); 
    movers[i].update(); 
  }
}