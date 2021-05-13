


var song;




let mic;

 function setup(){
  song = loadSound("18-Fan-10min.mp3", loaded);
  song.setVolume(0.5);
  //sliderRate = createSlider(0, 1.5, 1, 0.01);
  //sliderPan = createSlider(-1, 1, 0, 0.01);
  let cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  r = color(0,0,6);
  b = color(0,0,255)
}

function loaded() {
  song.play();
}


//Fuction for the type color tied to sound

function draw(){
  textSize(42)
  //Shout to start text
//text('shout to start', width/2, height/1.2); 

  micLevel = mic.getLevel();
  var x = (0,20,micLevel/2);
  let y = x * height * 2;
  let b = x * height * 10;

  
 
  fill(y,x,200);
 // circle(width/2, height/2, y/5 + 350);
  text('10/16/20', width/2, 160);
  text('The noise at my home is as loud as it was before the companys claim of attenuation!', width/2, 250);
  text('How is the noise level at Clemente Ranch? I know we are all tired of the fight,', width/2, 300);
  text('but we must continue and not be fatigued into accepting the Atrocity.', width/2, 350);

text('The noise is really bad tonight.', width/2, 100);
 //text('October 12', width/2, 500);
//text('We need clout! Can we get the HOA involved?', width/2, 600);
  //text('How is the noise level at Clemente Ranch? I know we are all tired of the fight,', width/2, 300);
  //text('but we must continue and not be fatigued into accepting the Atrocity.', width/2, 350);

  //text('4 10/15/2020 11.27pm C', width/2, height/5);
  //text('5 10/15/2020 11.27pm C', width/2, height/6);

 

  //stroke(20)
  //noFill();
 //circle(width/2, height/2, 800);
  
  //} if (x > 2) {
  //x = (1300)
  }


  



