var s ;
var scl = 20;
var food;
var time = 10;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  s = new Snake();
  frameRate(time);
  pick();

}

function draw() {
  // put drawing code here
  background(60);
  s.show();
  s.update();
  s.food();
  s.death();
  if(s.eat(food)){
    pick();
  }
}

function pick(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    s.dir(0, -1);
  }
  if(keyCode === DOWN_ARROW){
    s.dir(0, 1);
  }
  if(keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }
  if(keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  }
  
  }
    


  if(this.xspeed == -1){
    
  }




function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.update = function(){
    if(this.total === this.tail.length){
      for(var i = 0; i < this.tail.length - 1; i++){
        this.tail[i] = this.tail[i+1];
      }
    }
    this.tail[this.total-1] = createVector(this.x, this.y);
    

    this.x += this.xspeed*scl;
    this.y += this.yspeed*scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  }

  this.show = function(){
    fill(225);
    for(var i = 0; i < this.tail.length ; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }

  this.dir = function(x, y){
      this.xspeed = x;
      this.yspeed = y;
  }

  this.food = function(){
    fill(225, 0, 100);
    rect(food.x, food.y, scl, scl);
  }

  this.death = function(){
    for(var i = 0; i < this.tail.length; i++){
      var por = this.tail[i];
      var d = dist(this.x, this.y, por.x, por.y);
      if(d < 1){
        alert('GAME OVER');
        this.total = 0;
        this.tail = [];
      }
    }
  }

  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y)
    if(d < 1){
      this.total++;
      return true;
    }else {
      return false;
    }
  }

}
