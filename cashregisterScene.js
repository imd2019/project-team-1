// KasseScene variables

var kassenScene;

var BA = loadImage('Buttons_K/Button_Angebote.png');
var BA_hover = loadImage('Buttons_K/Button_Angebote_Text_Hover.png');
var BKa = loadImage('Buttons_K/Button_Kasse.png');
var BP = loadImage('Buttons_K/Button_Preise.png');
var BP_hover = loadImage('Buttons_K/Button_Preise_Text_Hover.png');
var BRe = loadImage('Buttons_K/Button_Renovieren.png');
var BRe_hover = loadImage('Buttons_K/Button_Renovieren_Text_Hover.png');
var ButtonCount_Cash = 0;

//--------------------------------------------------------------------------------------------------------

function setupKasseScene() {
    kasseScene = new Group();

    //BUTTON ROSENTEE

    Button_Angebot = createSprite(width / 2, 150);
    Button_Angebot.addImage("normal", BA);
    Button_Angebot.addImage("hover", BA_hover);
    Button_Angebot.scale = 0.18;
    Button_Angebot.mouseActive = true;
    kasseScene.add(Button_Angebot);

    //BUTTON KASSE
    Button_Kasse = createSprite(width / 2, height / 2);
    Button_Kasse.addImage(BKa);
    Button_Kasse.scale = 0.18;
    kasseScene.add(Button_Kasse);

    //BUTTON PREISE

    Button_Preise = createSprite(width / 2, 560);
    Button_Preise.addImage("normal", BP);
    Button_Preise.addImage("hover", BP_hover);
    Button_Preise.scale = 0.18;
    Button_Preise.mouseActive = true;
    kasseScene.add(Button_Preise);

    //BUTTON RENOVIEREN

    Button_Renovieren = createSprite(width / 6, height / 2);
    Button_Renovieren.addImage("normal", BRe);
    Button_Renovieren.addImage("hover", BRe_hover);
    Button_Renovieren.scale = 0.18;
    Button_Renovieren.mouseActive = true;
    kasseScene.add(Button_Renovieren);
}


//BUTTON ANGEBOT INPUT
function Button_Angebot_mouseReleased() {
    changeMoney(3);
    ButtonCount++;
    ButtonCount_Cash++;
    lastButtonPressed = Button_Angebot;
    Button_Angebot.wasPressed = true;
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    cash_register.changeAnimation("shine");
}

function Button_Angebot_mouseOver() {
    Button_Angebot.changeImage("hover");
}

function Button_Angebot_mouseOut() {
    Button_Angebot.changeImage("normal");
}


//BUTTON PREISE INPUT
function Button_Preise_mouseReleased() {
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    changeMoney(3);
    ButtonCount++;
    ButtonCount_Cash++;
    lastButtonPressed = Button_Preise;
    Button_Preise.wasPressed = true;
    console.log(ButtonCount);

}

function Button_Preise_mouseOver() {
    Button_Preise.changeImage("hover");
}

function Button_Preise_mouseOut() {
    Button_Preise.changeImage("normal");
}

//BUTTON RENOVIEREN INPUT
function Button_Renovieren_mouseReleased() {
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    changeMoney(-8);
    ButtonCount++;
    ButtonCount_Cash++;
    lastButtonPressed = Button_Renovieren;
    Button_Renovieren.wasPressed = true;
}

function Button_Renovieren_mouseOver() {
    Button_Renovieren.changeImage("hover");
}

function Button_Renovieren_mouseOut() {
    Button_Renovieren.changeImage("normal");
}






function initKassenScene() {
    console.log("initKassenScene()");
    if (!Button_Angebot.wasPressed) {
        Button_Angebot.onMouseReleased = Button_Angebot_mouseReleased;
        Button_Angebot.onMouseOver = Button_Angebot_mouseOver;
        Button_Angebot.onMouseOut = Button_Angebot_mouseOut;
    }
    if (!Button_Preise.wasPressed) {
        Button_Preise.onMouseReleased = Button_Preise_mouseReleased;
        Button_Preise.onMouseOver = Button_Preise_mouseOver;
        Button_Preise.onMouseOut = Button_Preise_mouseOut;
    }
    if (!Button_Renovieren.wasPressed) {
        Button_Renovieren.onMouseReleased = Button_Renovieren_mouseReleased;
        Button_Renovieren.onMouseOver = Button_Renovieren_mouseOver;
        Button_Renovieren.onMouseOut = Button_Renovieren_mouseOut;
    }
}

function exitKassenScene() {
    console.log("exitKassenScene()");
    Button_Angebot.onMouseReleased = undefined;
    Button_Angebot.onMouseOver = undefined;
    Button_Angebot.onMouseOut = undefined;
    Button_Angebot.changeImage("normal");

    Button_Preise.onMouseReleased = undefined;
    Button_Preise.onMouseOver = undefined;
    Button_Preise.onMouseOut = undefined;
    Button_Preise.changeImage("normal");

    Button_Renovieren.onMouseReleased = undefined;
    Button_Renovieren.onMouseOver = undefined;
    Button_Renovieren.onMouseOut = undefined;
    Button_Renovieren.changeImage("normal");
}


function drawKassenScene() {
    background(backgroundColor);



    drawSprites(kasseScene);
}