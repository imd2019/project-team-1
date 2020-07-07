// workbenchScene variables

var workbenchScene;

var BWB = loadImage('Buttons/Button_Werkbank (2).png');
var BK = loadImage('Buttons/Button_Blumenkränze (2).png');
var BK_hover = loadImage('Buttons/Button_Blumenkränze_Text_Hover.png');
var GK = loadImage('Buttons/Button_Grußkarten (2).png');
var GK_hover = loadImage('Buttons/Button_Grußkarten_Text_Hover.png');
var BHa = loadImage('Buttons/Button_Handyhüllen (2).png');
var BHa_hover = loadImage('Buttons/Button_Handyhüllen_Text_Hover.png');
var BRo = loadImage('Buttons/Button_Rosentee-1 (2).png');
var BRo_hover = loadImage('Buttons/Button_Rosentee_Text_Hover.png');
var BWo = loadImage('Buttons/Button_Workshop (2).png');
var BWo_hover = loadImage('Buttons/Button_Workshop_Text_Hover.png');
var bbts = loadImage('Buttons/Button_BackToMenu.png');
var bbts_hover = loadImage('Buttons/Button_BackToMenu_Hover.png');
var ButtonCount_Workbench = 0;



//--------------------------------------------------------------------------------------------------------

function setupWorkbenchScene() {
    workbenchScene = new Group();

    //BUTTON BACKTOSHOP

    Button_BackToShop = createSprite(110, 50);
    Button_BackToShop.addImage("normal", bbts);
    Button_BackToShop.addImage("hover", bbts_hover);
    Button_BackToShop.scale = 0.1;

    workbenchScene.add(Button_BackToShop);

    //BUTTON BLUMENKRÄNZE

    Button_Blumenkränze = createSprite(width / 2, 150);
    Button_Blumenkränze.addImage("normal", BK);
    Button_Blumenkränze.addImage("hover", BK_hover);
    Button_Blumenkränze.scale = 0.18;
    Button_Blumenkränze.mouseActive = true;
    workbenchScene.add(Button_Blumenkränze);

    //BUTTON WERKBANK

    Button_Workbench = createSprite(width / 2, height / 2);
    Button_Workbench.addImage("normal", BWB);
    Button_Workbench.scale = 0.18;
    workbenchScene.add(Button_Workbench);

    //BUTTON GRUßKARTEN

    Button_Grußkarten = createSprite(width / 2, 560);
    Button_Grußkarten.addImage("normal", GK);
    Button_Grußkarten.addImage("hover", GK_hover);
    Button_Grußkarten.scale = 0.18;
    Button_Grußkarten.mouseActive = true;
    workbenchScene.add(Button_Grußkarten);


    //BUTTON HANDYHÜLLEN

    Button_Handyhüllen = createSprite(width / 6, height / 2);
    Button_Handyhüllen.addImage("normal", BHa);
    Button_Handyhüllen.addImage("hover", BHa_hover);
    Button_Handyhüllen.scale = 0.18;
    Button_Handyhüllen.mouseActive = true;
    workbenchScene.add(Button_Handyhüllen);

    //BUTTON ROSENTEE

    Button_Rosentee = createSprite(1050, height / 4);
    Button_Rosentee.addImage("normal", BRo);
    Button_Rosentee.addImage("hover", BRo_hover);
    Button_Rosentee.scale = 0.18;
    Button_Rosentee.mouseActive = true;
    workbenchScene.add(Button_Rosentee);

    //BUTTON WORKSHOP

    Button_Workshop = createSprite(1050, 450);
    Button_Workshop.addImage("normal", BWo);
    Button_Workshop.addImage("hover", BWo_hover);
    Button_Workshop.scale = 0.18;
    Button_Workshop.mouseActive = true;
    workbenchScene.add(Button_Workshop);


}

//INPUT BUTTON BACKTOSHOP

function Button_BackToShop_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
}

function Button_BackToShop_mouseOver() {
    Button_BackToShop.changeImage("hover");
}

function Button_BackToShop_mouseOut() {
    Button_BackToShop.changeImage("normal");
}

//INPUT BUTTON BLUMENKRÄNZE

function Button_Blumenkränze_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("crafting");
    changeMoney(1);
    Button_Blumenkränze.wasPressed = true;
    ButtonCount++;
    ButtonCount_Workbench++;
    lastButtonPressed = Button_Blumenkränze;
    geldBaumAnimSequenceRequested = true;
}

function Button_Blumenkränze_mouseOver() {
    Button_Blumenkränze.changeImage("hover");
}

function Button_Blumenkränze_mouseOut() {
    Button_Blumenkränze.changeImage("normal");
}

//INPUT BUTTON GRUßKARTEN

function Button_Grußkarten_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("crafting");
    changeMoney(1);
    Button_Grußkarten.wasPressed = true;
    ButtonCount++;
    ButtonCount_Workbench++;
    lastButtonPressed = Button_Grußkarten;
    geldBaumAnimSequenceRequested = true;
}

function Button_Grußkarten_mouseOver() {
    Button_Grußkarten.changeImage("hover");
}

function Button_Grußkarten_mouseOut() {
    Button_Grußkarten.changeImage("normal");
}

//INPUT BUTTON HANDYHÜLLEN

function Button_Handyhüllen_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("crafting");
    changeMoney(3);
    Button_Handyhüllen.wasPressed = true;
    ButtonCount++;
    ButtonCount_Workbench++;
    lastButtonPressed = Button_Handyhüllen;
    geldBaumAnimSequenceRequested = true;
}

function Button_Handyhüllen_mouseOver() {
    Button_Handyhüllen.changeImage("hover");
}

function Button_Handyhüllen_mouseOut() {
    Button_Handyhüllen.changeImage("normal");
}

//INPUT BUTTON ROSENTEE

function Button_Rosentee_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("crafting");
    changeMoney(2);
    Button_Rosentee.wasPressed = true;
    ButtonCount++;
    ButtonCount_Workbench++;
    lastButtonPressed = Button_Rosentee;
    geldBaumAnimSequenceRequested = true;
}

function Button_Rosentee_mouseOver() {
    Button_Rosentee.changeImage("hover");
}

function Button_Rosentee_mouseOut() {
    Button_Rosentee.changeImage("normal");
}

//INPUT BUTTON WORKSHOP

function Button_Workshop_mouseReleased() {
    click_sound.setVolume(0.2);
    click_sound.play();
    changeGameState(GameStates.SHOP);
    character.changeAnimation("crafting");
    changeMoney(3);
    Button_Workshop.wasPressed = true;
    ButtonCount++;
    ButtonCount_Workbench++;
    lastButtonPressed = Button_Workshop;
    geldBaumAnimSequenceRequested = true;
}

function Button_Workshop_mouseOver() {
    Button_Workshop.changeImage("hover");
}

function Button_Workshop_mouseOut() {
    Button_Workshop.changeImage("normal");
}

function initWorkbenchScene() {
    console.log("initWorkbenchScene()");
    if (!Button_Blumenkränze.wasPressed) {
        Button_Blumenkränze.onMouseReleased = Button_Blumenkränze_mouseReleased;
        Button_Blumenkränze.onMouseOver = Button_Blumenkränze_mouseOver;
        Button_Blumenkränze.onMouseOut = Button_Blumenkränze_mouseOut;
    }
    if (!Button_Grußkarten.wasPressed) {
        Button_Grußkarten.onMouseReleased = Button_Grußkarten_mouseReleased;
        Button_Grußkarten.onMouseOver = Button_Grußkarten_mouseOver;
        Button_Grußkarten.onMouseOut = Button_Grußkarten_mouseOut;
    }
    if (!Button_Handyhüllen.wasPressed) {
        Button_Handyhüllen.onMouseReleased = Button_Handyhüllen_mouseReleased;
        Button_Handyhüllen.onMouseOver = Button_Handyhüllen_mouseOver;
        Button_Handyhüllen.onMouseOut = Button_Handyhüllen_mouseOut;
    }
    if (!Button_Rosentee.wasPressed) {
        Button_Rosentee.onMouseReleased = Button_Rosentee_mouseReleased;
        Button_Rosentee.onMouseOver = Button_Rosentee_mouseOver;
        Button_Rosentee.onMouseOut = Button_Rosentee_mouseOut;
    }
    if (!Button_Workshop.wasPressed) {
        Button_Workshop.onMouseReleased = Button_Workshop_mouseReleased;
        Button_Workshop.onMouseOver = Button_Workshop_mouseOver;
        Button_Workshop.onMouseOut = Button_Workshop_mouseOut;
    }

    Button_BackToShop.onMouseReleased = Button_BackToShop_mouseReleased;
    Button_BackToShop.onMouseOver = Button_BackToShop_mouseOver;
    Button_BackToShop.onMouseOut = Button_BackToShop_mouseOut;



}

function exitWorkbenchScene() {
    console.log("exitWorkbenchScene()");

    Button_Blumenkränze.onMouseReleased = undefined;
    Button_Blumenkränze.onMouseOver = undefined;
    Button_Blumenkränze.onMouseOut = undefined;
    Button_Blumenkränze.changeImage("normal");

    Button_Grußkarten.onMouseReleased = undefined;
    Button_Grußkarten.onMouseOver = undefined;
    Button_Grußkarten.onMouseOut = undefined;
    Button_Grußkarten.changeImage("normal");

    Button_Handyhüllen.onMouseReleased = undefined;
    Button_Handyhüllen.onMouseOver = undefined;
    Button_Handyhüllen.onMouseOut = undefined;
    Button_Handyhüllen.changeImage("normal");

    Button_Rosentee.onMouseReleased = undefined;
    Button_Rosentee.onMouseOver = undefined;
    Button_Rosentee.onMouseOut = undefined;
    Button_Rosentee.changeImage("normal");

    Button_Workshop.onMouseReleased = undefined;
    Button_Workshop.onMouseOver = undefined;
    Button_Workshop.onMouseOut = undefined;
    Button_Workshop.changeImage("normal");

    Button_BackToShop.onMouseReleased = undefined;
    Button_BackToShop.onMouseOver = undefined;
    Button_BackToShop.onMouseOut = undefined;
    Button_BackToShop.changeImage("normal");
}


function drawWorkbenchScene() {
    background(backgroundColor);


    drawSprites(workbenchScene);
}