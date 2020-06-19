let sketch = new p5();
let width = windowWidth;
let height = windowHeight;

function setup() {
  console.log("setup");
  sketch.createCanvas(width, height);
  sketch.frameRate(30);

  gameRunning = false;
  gameState = GameStates.MENU;

  setupMenuScene();
  setupGameScene();
  setupWorkbenchScene();

}
window.setup = setup;

function windowResized() {
  sketch.resizeCanvas(windowWidth, windowHeight);
}
window.addEventListener("resize", windowResized);