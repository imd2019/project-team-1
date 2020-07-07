// KasseScene variables

var kassenScene;

var BC = loadImage('Buttons_C/Button_Computer.png')
var BF = loadImage('Buttons_C/Button_Fernsehwerbung.png');
var BF_hover = loadImage('Buttons_C/Button_Fernsehwerbung_Text_Hover.png');
var BFl = loadImage('Buttons_C/Button_Flyer.png');
var BFl_hover = loadImage('Buttons_C/Button_Flyer_Text_Hover.png');
var BLi = loadImage('Buttons_C/Button_Lieferservice.png');
var BLi_hover = loadImage('Buttons_C/Button_Lieferdienst_Text_Hover.png');
var BMi = loadImage('Buttons_C/Button_Mitarbeiter.png');
var BMi_hover = loadImage('Buttons_C/Button_Mitarbeiter_Text_Hover.png');
var BSo = loadImage('Buttons_C/Button_Social Media.png');
var BSo_hover = loadImage('Buttons_C/Button_Social Media_Text_Hover.png');
var BWe = loadImage('Buttons_C/Button_Webseite.png');
var BWe_hover = loadImage('Buttons_C/Button_Webseite_Text_Hover.png');
var BWer = loadImage('Buttons_C/Button_Werbung.png');
var BWer_hover = loadImage('Buttons_C/Button_Werbung_Text_Hover.png');
var BZu = loadImage('Buttons_C/Button_Zubehör.png');
var BZu_hover = loadImage('Buttons_C/Button_Zubehör_Text_Hover.png');
var ButtonCount_PC = 0;

//--------------------------------------------------------------------------------------------------------

function setupComputerScene() {
    computerScene = new Group();


    //BUTTON FERNSEHWERBUNG

    Button_Fernsehwerbung = createSprite(width / 2, 150);
    Button_Fernsehwerbung.addImage("normal", BF);
    Button_Fernsehwerbung.addImage("hover", BF_hover);
    Button_Fernsehwerbung.scale = 0.18;
    computerScene.add(Button_Fernsehwerbung);


    //BUTTON COMPUTER

    Button_Computer = createSprite(width / 2, height / 2);
    Button_Computer.addImage("normal", BC);
    Button_Computer.scale = 0.18;
    computerScene.add(Button_Computer)

    //BUTTON FLYER

    Button_Flyer = createSprite(width / 2, 560);
    Button_Flyer.addImage("normal", BFl);
    Button_Flyer.addImage("hover", BFl_hover);
    Button_Flyer.scale = 0.18;
    computerScene.add(Button_Flyer);

    //BUTTON LIEFERSERVICE

    Button_Lieferservice = createSprite(width / 6, height / 2);
    Button_Lieferservice.addImage("normal", BLi);
    Button_Lieferservice.addImage("hover", BLi_hover);
    Button_Lieferservice.scale = 0.18;
    computerScene.add(Button_Lieferservice);

    //BUTTON MITARBEITER

    Button_Mitarbeiter = createSprite(1050, height / 2);
    Button_Mitarbeiter.addImage("normal", BMi);
    Button_Mitarbeiter.addImage("hover", BMi_hover);
    Button_Mitarbeiter.scale = 0.18;
    computerScene.add(Button_Mitarbeiter);

    //BUTTON SOCIAL MEDIA

    Button_SM = createSprite(1050, height / 6);
    Button_SM.addImage("normal", BSo);
    Button_SM.addImage("hover", BSo_hover);
    Button_SM.scale = 0.18;
    computerScene.add(Button_SM);

    //BUTTON WEBSITE

    Button_Website = createSprite(200, height / 6);
    Button_Website.addImage("normal", BWe);
    Button_Website.addImage("hover", BWe_hover);
    Button_Website.scale = 0.18;
    computerScene.add(Button_Website);

    //BUTTON WEBRUNG ONLINE

    Button_Werbung = createSprite(200, 600);
    Button_Werbung.addImage("normal", BWer);
    Button_Werbung.addImage("hover", BWer_hover);
    Button_Werbung.scale = 0.18;
    computerScene.add(Button_Werbung);

    //BUTTON ZUBEHÖR 

    Button_Zubehoer = createSprite(1050, 600);
    Button_Zubehoer.addImage("normal", BZu);
    Button_Zubehoer.addImage("hover", BZu_hover);
    Button_Zubehoer.scale = 0.18;
    computerScene.add(Button_Zubehoer);

    //BACK TO SHOP BUTTON
    computerScene.add(Button_BackToShop);
}


//BUTTON FERNSEHWERBUNG INPUT

function Button_Fernsehwerbung_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    pc.changeAnimation("shining");
    changeMoney(-8);
    Button_Fernsehwerbung.wasPressed = true;
    ButtonCount++;
    ButtonCount_PC++;
    geldBaumAnimSequenceRequested = true;
    lastButtonPressed = Button_Fernsehwerbung;
}

function Button_Fernsehwerbung_mouseOver() {
    Button_Fernsehwerbung.changeImage("hover");
}

function Button_Fernsehwerbung_mouseOut() {
    Button_Fernsehwerbung.changeImage("normal");
}




//BUTTON FLYER INPUT

function Button_Flyer_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    pc.changeAnimation("shining");
    changeMoney(-2);
    Button_Flyer.wasPressed = true;
    ButtonCount++;
    ButtonCount_PC++;
    lastButtonPressed = Button_Flyer;
    geldBaumAnimSequenceRequested = true;
}

function Button_Flyer_mouseOver() {
    Button_Flyer.changeImage("hover");
}

function Button_Flyer_mouseOut() {
    Button_Flyer.changeImage("normal");
}

//BUTTON LIEFERSERVICE INPUT

function Button_Lieferservice_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    pc.changeAnimation("shining");
    changeMoney(6);
    Button_Lieferservice.wasPressed = true;
    ButtonCount++;
    ButtonCount_PC++;
    lastButtonPressed = Button_Lieferservice;
    geldBaumAnimSequenceRequested = true;
}

function Button_Lieferservice_mouseOver() {
    Button_Lieferservice.changeImage("hover");
}

function Button_Lieferservice_mouseOut() {
    Button_Lieferservice.changeImage("normal");
}

//BUTTON MITARBEITER INPUT

function Button_Mitarbeiter_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    pc.changeAnimation("shining");
    changeMoney(-6);
    Button_Mitarbeiter.wasPressed = true;
    ButtonCount++;
    ButtonCount_PC++;
    lastButtonPressed = Button_Mitarbeiter;
    geldBaumAnimSequenceRequested = true;
}

function Button_Mitarbeiter_mouseOver() {
    Button_Mitarbeiter.changeImage("hover");
}

function Button_Mitarbeiter_mouseOut() {
    Button_Mitarbeiter.changeImage("normal");
}

//BUTTON SOCIAL MEDIA INPUT

function Button_SM_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    pc.changeAnimation("shining");
    changeMoney(3);
    Button_SM.wasPressed = true;
    ButtonCount++;
    ButtonCount_PC++;
    lastButtonPressed = Button_SM;
    geldBaumAnimSequenceRequested = true;
    // Feedback.visible = true;
    // Feedback.changeImage("sm");
}

function Button_SM_mouseOver() {
    Button_SM.changeImage("hover");
}

function Button_SM_mouseOut() {
    Button_SM.changeImage("normal");
}

//BUTTON WEBSITE INPUT

function Button_Website_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    pc.changeAnimation("shining");
    changeMoney(3);
    Button_Website.wasPressed = true;
    ButtonCount++;
    ButtonCount_PC++;
    lastButtonPressed = Button_Website;
    geldBaumAnimSequenceRequested = true;
}

function Button_Website_mouseOver() {
    Button_Website.changeImage("hover");
}

function Button_Website_mouseOut() {
    Button_Website.changeImage("normal");
}


//BUTTON WERBUNG INPUT

function Button_Werbung_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    pc.changeAnimation("shining");
    changeMoney(2);
    Button_Werbung.wasPressed = true;
    ButtonCount++;
    ButtonCount_PC++;
    lastButtonPressed = Button_Werbung;
    geldBaumAnimSequenceRequested = true;
}

function Button_Werbung_mouseOver() {
    Button_Werbung.changeImage("hover");
}

function Button_Werbung_mouseOut() {
    Button_Werbung.changeImage("normal");
}

//BUTTON ZUBEHÖR INPUT

function Button_Zubehoer_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("typing");
    pc.changeAnimation("shining");
    changeMoney(3);
    Button_Zubehoer.wasPressed = true;
    ButtonCount++;
    ButtonCount_PC++;
    lastButtonPressed = Button_Zubehoer;
    geldBaumAnimSequenceRequested = true;
}

function Button_Zubehoer_mouseOver() {
    Button_Zubehoer.changeImage("hover");
}

function Button_Zubehoer_mouseOut() {
    Button_Zubehoer.changeImage("normal");
}


function initComputerScene() {
    console.log("initComputerScene()");

    if (!Button_SM.wasPressed) {
        Button_SM.onMouseReleased = Button_SM_mouseReleased;
        Button_SM.onMouseOver = Button_SM_mouseOver;
        Button_SM.onMouseOut = Button_SM_mouseOut;
    }

    if (!Button_Fernsehwerbung.wasPressed) {
        Button_Fernsehwerbung.onMouseReleased = Button_Fernsehwerbung_mouseReleased;
        Button_Fernsehwerbung.onMouseOver = Button_Fernsehwerbung_mouseOver;
        Button_Fernsehwerbung.onMouseOut = Button_Fernsehwerbung_mouseOut;
    }

    if (!Button_Flyer.wasPressed) {
        Button_Flyer.onMouseReleased = Button_Flyer_mouseReleased;
        Button_Flyer.onMouseOver = Button_Flyer_mouseOver;
        Button_Flyer.onMouseOut = Button_Flyer_mouseOut;
    }
    if (!Button_Lieferservice.wasPressed) {
        Button_Lieferservice.onMouseReleased = Button_Lieferservice_mouseReleased;
        Button_Lieferservice.onMouseOver = Button_Lieferservice_mouseOver;
        Button_Lieferservice.onMouseOut = Button_Lieferservice_mouseOut;
    }
    if (!Button_Mitarbeiter.wasPressed) {
        Button_Mitarbeiter.onMouseReleased = Button_Mitarbeiter_mouseReleased;
        Button_Mitarbeiter.onMouseOver = Button_Mitarbeiter_mouseOver;
        Button_Mitarbeiter.onMouseOut = Button_Mitarbeiter_mouseOut;
    }
    if (!Button_Website.wasPressed) {
        Button_Website.onMouseReleased = Button_Website_mouseReleased;
        Button_Website.onMouseOver = Button_Website_mouseOver;
        Button_Website.onMouseOut = Button_Website_mouseOut;
    }
    if (!Button_Werbung.wasPressed) {
        Button_Werbung.onMouseReleased = Button_Werbung_mouseReleased;
        Button_Werbung.onMouseOver = Button_Werbung_mouseOver;
        Button_Werbung.onMouseOut = Button_Werbung_mouseOut;
    }
    if (!Button_Zubehoer.wasPressed) {
        Button_Zubehoer.onMouseReleased = Button_Zubehoer_mouseReleased;
        Button_Zubehoer.onMouseOver = Button_Zubehoer_mouseOver;
        Button_Zubehoer.onMouseOut = Button_Zubehoer_mouseOut;
    }


    Button_BackToShop.onMouseReleased = Button_BackToShop_mouseReleased;
    Button_BackToShop.onMouseOver = Button_BackToShop_mouseOver;
    Button_BackToShop.onMouseOut = Button_BackToShop_mouseOut;

    Button_Zubehoer.mouseActive = true;
    Button_Werbung.mouseActive = true;
    Button_Website.mouseActive = true;
    Button_SM.mouseActive = true;
    Button_Mitarbeiter.mouseActive = true;
    Button_Lieferservice.mouseActive = true;
    Button_Flyer.mouseActive = true;
    Button_Fernsehwerbung.mouseActive = true;
}

function exitComputerScene() {
    console.log("exitComputerScene()");

    Button_SM.onMouseReleased = undefined;
    Button_SM.onMouseOver = undefined;
    Button_SM.onMouseOut = undefined;
    Button_SM.changeImage("normal");

    Button_Fernsehwerbung.onMouseReleased = undefined;
    Button_Fernsehwerbung.onMouseOver = undefined;
    Button_Fernsehwerbung.onMouseOut = undefined;
    Button_Fernsehwerbung.changeImage("normal");

    Button_Flyer.onMouseReleased = undefined;
    Button_Flyer.onMouseOver = undefined;
    Button_Flyer.onMouseOut = undefined;
    Button_Flyer.changeImage("normal");

    Button_Lieferservice.onMouseReleased = undefined;
    Button_Lieferservice.onMouseOver = undefined;
    Button_Lieferservice.onMouseOut = undefined;
    Button_Lieferservice.changeImage("normal");

    Button_Mitarbeiter.onMouseReleased = undefined;
    Button_Mitarbeiter.onMouseOver = undefined;
    Button_Mitarbeiter.onMouseOut = undefined;
    Button_Mitarbeiter.changeImage("normal");

    Button_Website.onMouseReleased = undefined;
    Button_Website.onMouseOver = undefined;
    Button_Website.onMouseOut = undefined;
    Button_Website.changeImage("normal");

    Button_Werbung.onMouseReleased = undefined;
    Button_Werbung.onMouseOver = undefined;
    Button_Werbung.onMouseOut = undefined;
    Button_Werbung.changeImage("normal");

    Button_Zubehoer.onMouseReleased = undefined;
    Button_Zubehoer.onMouseOver = undefined;
    Button_Zubehoer.onMouseOut = undefined;
    Button_Zubehoer.changeImage("normal");

    Button_Zubehoer.mouseActive = false;
    Button_Werbung.mouseActive = false;
    Button_Website.mouseActive = false;
    Button_SM.mouseActive = false;
    Button_Mitarbeiter.mouseActive = false;
    Button_Lieferservice.mouseActive = false;
    Button_Flyer.mouseActive = false;
    Button_Fernsehwerbung.mouseActive = false;


    Button_BackToShop.onMouseReleased = undefined;
    Button_BackToShop.onMouseOver = undefined;
    Button_BackToShop.onMouseOut = undefined;
    Button_BackToShop.changeImage("normal");
}


function drawComputerScene() {
    background(backgroundColor);



    drawSprites(computerScene);
}