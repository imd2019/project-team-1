let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

function setup() {
  console.log("setup");
  sketch.createCanvas(1280, 720);
  sketch.frameRate(30);

  gameRunning = false;
  gameState = GameStates.SHOP;

  setupShopScene();
  setupGameScene();
  setupWorkbenchScene();

}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);