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


    Umsatz = 0;
    lastUmsatz = 0;
    ButtonCount_PC = 0;
    ButtonCount = 0;
    ButtonCount_Workbench = 0;
    ButtonCount_Cashregister = 0;
    lastButtonPressed = undefined;
    Button_Preise.wasPressed = false;
    Button_Renovieren.mouseActive = false;
    Button_Angebot.wasPressed = false;
    Button_Fernsehwerbung.wasPressed = false;
    Button_Flyer.wasPressed = false;
    Button_Lieferservice.wasPressed = false;
    Button_Mitarbeiter.wasPressed = false;
    Button_SM.wasPressed = false;
    Button_Website.wasPressed = false;
    Button_Werbung.wasPressed = false;
    Button_Zubehoer.wasPressed = false;
    Button_Blumenkränze.wasPressed = false;
    Button_Grußkarten.wasPressed = false;
    Button_Handyhüllen.wasPressed = false;
    Button_Rosentee.wasPressed = false;
    Button_Workshop.wasPressed = false;

    screenNumber = 1;
    Geldbaum.position.x = 670;
    Geldbaum.position.y = 440;

    Geldbaum.animation.rewind();
    geldBaumAnimSequenceRequested = false;
    geldbaumSequenceState = 0;
    cal.changeAnimation("change");
    cal.animation.rewind();
    cal.animation.stop();

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
    clear();
    background(startscreen);
    drawSprites(startScene);
}