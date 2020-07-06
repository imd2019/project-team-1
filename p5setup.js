let sketch = new p5();
let width = 1280 //windowWidth;
let height = 720 //windowHeight;


function preload() {
  console.log("preload()");
  setupShopScene();
  setupGameScene();
  setupWorkbenchScene();
  setupIntroScene();
  setupKasseScene();
  setupComputerScene();
  setupStartScene();
  setupEndScene();
}

function setup() {
  console.log("setup");
  sketch.createCanvas(1280, 720);
  sketch.frameRate(30);
  gameRunning = false;
  changeGameState(GameStates.START);
  ButtonCount = 0;
}
window.setup = setup;

function windowResized() {
  //sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);