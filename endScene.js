// endScene variables

var endScene;
var end_idle = loadImage('EndNegative/1.png');
var BMenu = loadImage('Buttons/Button_Neustart.png');
var BMenu_hover = loadImage('Buttons/Button_Neustart_Hover.png');

//--------------------------------------------------------------------------------------------------------

function setupEndScene() {
    endScene = new Group();

    end = createSprite(width / 2, height / 2);
    end.addImage(end_idle);
    let neg = loadAnimation("EndNegative/1.png", "EndNegative/2.png", "EndNegative/3.png", "EndNegative/4.png", "EndNegative/5.png", "EndNegative/6.png");
    let mid = loadAnimation("EndMiddle/1.png", "EndMiddle/2.png", "EndMiddle/3.png", "EndMiddle/4.png", "EndMiddle/5.png", "EndMiddle/6.png");
    let pos = loadAnimation("EndPositive/1.png", "EndPositive/2.png", "EndPositive/3.png", "EndPositive/4.png", "EndPositive/5.png", "EndPositive/6.png");
    neg.frameDelay = 6;
    mid.frameDelay = 6;
    pos.frameDelay = 6;
    end.addAnimation('negative', neg);
    end.addAnimation('middle', mid);
    end.addAnimation('positive', pos);
    end.scale = 1;
    end.visible = true;
    endScene.add(end);
    endScene.add(Geldbaum);

    //BACK TO MENU BUTTON

    Button_BackToMenu = createSprite(width / 2, 600);
    Button_BackToMenu.addImage("normal", BMenu);
    Button_BackToMenu.addImage("hover", BMenu_hover);
    Button_BackToMenu.scale = 0.17;
    endScene.add(Button_BackToMenu);



}

//INPUT BUTTON START

function Button_BackToMenu_mouseReleased() {
    changeGameState(GameStates.START);
}

function Button_BackToMenu_mouseOver() {
    Button_BackToMenu.changeImage("hover");
}

function Button_BackToMenu_mouseOut() {
    Button_BackToMenu.changeImage("normal");
}


function initEndScene() {
    Geldbaum.position.x = -60;
    Geldbaum.position.y = 400;
    Button_BackToMenu.onMouseReleased = Button_BackToMenu_mouseReleased;
    Button_BackToMenu.onMouseOver = Button_BackToMenu_mouseOver;
    Button_BackToMenu.onMouseOut = Button_BackToMenu_mouseOut;
}

function exitEndScene() {
    Button_BackToMenu.onMouseReleased = undefined;
    Button_BackToMenu.onMouseOver = undefined;
    Button_BackToMenu.onMouseOut = undefined;

}

function drawEndScene() {

    if (Umsatz < 12) {
        background(192, 211, 217);
        end.changeAnimation("negative");
    } else if (Umsatz >= 12 && Umsatz <= 21) {
        background(214, 228, 231);
        end.changeAnimation("middle");
    } else if (Umsatz >= 22) {
        background(254, 228, 179);
        end.changeAnimation("positive");
    }


    drawSprites(endScene);
}