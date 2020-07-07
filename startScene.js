// startScene variables

var startScene;

var B1 = loadImage('Buttons_Start/Einführung überspringen Button einzeln.png');
var B1_hover = loadImage('Buttons_Start/Einführung überspringen Button einzeln hover.png');
var B2 = loadImage('Buttons_Start/Start Button.png');
var B2_hover = loadImage('Buttons_Start/Start Button hover.png');
startscreen = loadImage('Graphics/Startscreen.png');
var Button_Ueberspringen;


//--------------------------------------------------------------------------------------------------------

function setupStartScene() {
    startScene = new Group();

    Button_Ueberspringen = createSprite(width / 2 + 350, 600);
    Button_Ueberspringen.addImage("normal", B1);
    Button_Ueberspringen.addImage("hover", B1_hover);
    Button_Ueberspringen.scale = 0.3;
    startScene.add(Button_Ueberspringen);


    Button_Start = createSprite(width / 2 + 50, 600);
    Button_Start.addImage("normal", B2);
    Button_Start.addImage("hover", B2_hover);
    Button_Start.scale = 0.3;
    startScene.add(Button_Start);
}

//INPUT BUTTON ÜBERSPRINGEN

function Button_Ueberspringen_mouseReleased() {
    changeGameState(GameStates.SHOP);
    click_sound.setVolume(0.2);
    click_sound.play();

}

function Button_Ueberspringen_mouseOver() {
    Button_Ueberspringen.changeImage("hover");
}

function Button_Ueberspringen_mouseOut() {
    Button_Ueberspringen.changeImage("normal");
}

//INPUT BUTTON START

function Button_Start_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    song.stop();
    song.setVolume(0.1);
    song.play();
    song.loop();
    changeGameState(GameStates.INTRO);
}

function Button_Start_mouseOver() {
    Button_Start.changeImage("hover");
}

function Button_Start_mouseOut() {
    Button_Start.changeImage("normal");
}



function initStartScene() {
    console.log("initStartScene()");
    Button_Ueberspringen.onMouseReleased = Button_Ueberspringen_mouseReleased;
    Button_Ueberspringen.onMouseOver = Button_Ueberspringen_mouseOver;
    Button_Ueberspringen.onMouseOut = Button_Ueberspringen_mouseOut;

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
    Button_Ueberspringen.onMouseReleased = undefined;
    Button_Ueberspringen.onMouseOver = undefined;
    Button_Ueberspringen.onMouseOut = undefined;

    Button_Start.onMouseReleased = undefined;
    Button_Start.onMouseOver = undefined;
    Button_Start.onMouseOut = undefined;
}

function drawStartScene() {
    clear();
    background(startscreen);
    drawSprites(startScene);

}