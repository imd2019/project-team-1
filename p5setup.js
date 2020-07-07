let sketch = new p5();
let width = 1280 //windowWidth;
let height = 720 //windowHeight;
var click_sound;
var shrink_sound;
var grow_sound;
var song;


function preload() {
  console.log("preload()");
  soundFormats('mp3', 'ogg');
  click_sound = loadSound('Sounds/multimedia_button_click_012.mp3');
  shrink_sound = loadSound('Sounds/swoosh_1.mp3');
  grow_sound = loadSound('Sounds/swoosh_2.mp3');
  song = loadSound('Sounds/The_Opening.mp3');

  setupShopScene();
  setupGameScene();
  setupWorkbenchScene();
  setupIntroScene();
  setupKasseScene();
  setupComputerScene();
  setupStartScene();
  setupEndScene();

  console.log("preload() done");
}




function setup() {
  console.log("setup()");
  sketch.createCanvas(1280, 720);
  sketch.frameRate(30);
  gameRunning = false;

  changeGameState(GameStates.START);
  ButtonCount = 0;

  console.log("setup() done");
}
window.setup = setup;

function windowResized() {
  //sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);