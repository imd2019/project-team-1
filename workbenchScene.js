// workbenchScene variables

var workbenchScene;
var blurry = loadImage('Graphics/blurry.png');
var BK = loadImage('Buttons/Button_Blumenkränze (2).png');
var BK_hover = loadImage('Buttons/Button_Blumenkränze_Hover (2).png');
var BK_long = loadImage('Buttons/Button_Blumenkränze_Text (2).png');


//--------------------------------------------------------------------------------------------------------

function setupWorkbenchScene() {
    workbenchScene = new Group();

    Button_Blumenkränze = createSprite(650, 150);
    Button_Blumenkränze.addImage("normal", BK);
    Button_Blumenkränze.addImage("hover", BK_hover);
    Button_Blumenkränze.addImage("long", BK_long);
    Button_Blumenkränze.scale = 0.15;
    Button_Blumenkränze.mouseActive = true;
    workbenchScene.add(Button_Blumenkränze);
}

function initWorkbenchScene() {

}

function drawWorkbenchScene() {
    background(200, 200, 200, 20);

    if (Button_Blumenkränze.mouseIsOver) {
        Button_Blumenkränze.changeImage("hover");
    } else Button_Blumenkränze.changeImage("normal");
    // if (Button_Blumenkränze.mouseIsPressed) {
    //     Button_Blumenkränze.changeImage("long");
    // }

    drawSprites(workbenchScene);
}