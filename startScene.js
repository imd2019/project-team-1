// startScene variables

var startScene;

var B1 = loadImage('Buttons_Start/Einführung überspringen Button einzeln.png');
var B1_hover = loadImage('Buttons_Start/Einführung überspringen Button einzeln hover.png');
var B2 = loadImage('Buttons_Start/Start Button.png');
var B2_hover = loadImage('Buttons_Start/Start Button hover.png');
startscreen = loadImage('Graphics/Startscreen.png');



//--------------------------------------------------------------------------------------------------------

function setupStartScene() {
    startScene = new Group();

    Button_Überspringen = createSprite(width / 2 + 350, 600);
    Button_Überspringen.addImage("normal", B1);
    Button_Überspringen.addImage("hover", B1_hover);
    Button_Überspringen.scale = 0.3;
    startScene.add(Button_Überspringen);


    Button_Start = createSprite(width / 2 + 50, 600);
    Button_Start.addImage("normal", B2);
    Button_Start.addImage("hover", B2_hover);
    Button_Start.scale = 0.3;
    startScene.add(Button_Start);
}

//INPUT BUTTON ÜBERSPRINGEN

function Button_Überspringen_mouseReleased() {
    changeGameState(GameStates.SHOP);
}

function Button_Überspringen_mouseOver() {
    Button_Überspringen.changeImage("hover");
}

function Button_Überspringen_mouseOut() {
    Button_Überspringen.changeImage("normal");
}

//INPUT BUTTON START

function Button_Start_mouseReleased() {
    changeGameState(GameStates.INTRO);
}

function Button_Start_mouseOver() {
    Button_Start.changeImage("hover");
}

function Button_Start_mouseOut() {
    Button_Start.changeImage("normal");
}



function initStartScene() {
    Button_Überspringen.onMouseReleased = Button_Überspringen_mouseReleased;
    Button_Überspringen.onMouseOver = Button_Überspringen_mouseOver;
    Button_Überspringen.onMouseOut = Button_Überspringen_mouseOut;

    Button_Start.onMouseReleased = Button_Start_mouseReleased;
    Button_Start.onMouseOver = Button_Start_mouseOver;
    Button_Start.onMouseOut = Button_Start_mouseOut;
}

function exitStartScene() {
    Button_Überspringen.onMouseReleased = undefined;
    Button_Überspringen.onMouseOver = undefined;
    Button_Überspringen.onMouseOut = undefined;

    Button_Start.onMouseReleased = undefined;
    Button_Start.onMouseOver = undefined;
    Button_Start.onMouseOut = undefined;
}

function drawStartScene() {
    background(startscreen);
    drawSprites(startScene);
}