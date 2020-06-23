// menuScene variables

var menuScene;


var character_left = loadImage('Graphics/Verkäuferin_links1.png');
var character_right = loadImage('Graphics/Verkäuferin_rechts1.png');
var customer1 = loadImage('Graphics/Laufen_Frame1_Kunde1.png');
var button_weiter = loadImage('Graphics/Button_beige.png');
var pc_texture = loadImage('Elemente/PC-einzeln2.png');
var pc_hover = loadImage('Elemente/PC-einzeln-hover2.png');
var cash_texture = loadImage('Elemente/Kasse-einzeln2.png');
var cash_hover = loadImage('Elemente/Kasse-einzeln-hover2.png');
var wb_texture = loadImage('Elemente/Werkzeug-einzeln2.png');
var wb_hover = loadImage('Elemente/Werkzeug-einzeln-hover2.png');
var fg = loadImage('Graphics/Foreground.png');
var fg2 = loadImage('Graphics/Foreground2.png');


const CharacterStates = {
    IDLE_LEFT: 0,
    IDLE_RIGHT: 2,
    WALKING_LEFT: 3,
    WALKING_RIGHT: 4,
    CRAFTING: 5,
};
var character_state = CharacterStates.IDLE_LEFT;

//--------------------------------------------------------------------------------------------------------

function setupShopScene() {
    menuScene = new Group();
    pressed = false;


    //FOREGROUND2

    foreground2 = createSprite(width / 2 - 100, height / 2 - 33);
    foreground2.addImage(fg2);
    menuScene.add(foreground2);

    //WORKBENCH

    workbench = createSprite(180, 300);
    workbench.addImage("normal", wb_texture);
    workbench.addImage("hover", wb_hover);
    workbench.scale = 0.15;
    menuScene.add(workbench);
    workbench.mouseActive = true;


    //CHARACTER

    character = createSprite(width / 2, height / 2 - 15);
    character.addImage("left", character_left);
    character.addImage("right", character_right);
    character.addAnimation('walking', 'Laufen/laufen1.png', 'Laufen/laufen9.png');
    character.addAnimation('walking_right', 'Laufen_Rechts/laufenrechts1.png', 'Laufen_Rechts/laufenrechts9.png');
    character.scale = 0.9;
    menuScene.add(character);

    //FOREGROUND

    foreground = createSprite(width / 2 - 100, height / 2 - 33);
    foreground.addImage(fg);
    menuScene.add(foreground);


    //BUTTON

    button1 = createSprite(1200, 600);
    button1.addImage(button_weiter);
    menuScene.add(button1);
    button1.mouseActive = true;

    //PC

    pc = createSprite(720, 336);
    pc.addImage("normal", pc_texture);
    pc.addImage("hover", pc_hover);
    pc.scale = 0.17;
    menuScene.add(pc);
    pc.mouseActive = true;

    //CASHREGISTER

    cash_register = createSprite(500, 348);
    cash_register.addImage("normal", cash_texture);
    cash_register.addImage("hover", cash_hover);
    cash_register.scale = 0.17;
    menuScene.add(cash_register);
    cash_register.mouseActive = true;

    //CUSTOMER

    // customer = createSprite(width / 2 - 200, height / 2 + 120);
    // customer.addImage(customer1);
    // customer.addAnimation('walking', 'Kundin1/laufen0.png', 'Kundin1/laufen10.png');
    // customer.scale = 0.16;
    // menuScene.add(customer);

}

function initShopScene() {
    character.position.x = width / 2;
    character.changeImage("right");
}

function drawShopScene() {
    background(0);
    fill(254, 228, 179);
    rect(-10, -10, 1300, 539);
    fill(247, 235, 223);
    rect(-10, 529, 1300, 580);

    if (character_state == CharacterStates.WALKING_RIGHT) { // State: Walking right
        if (character.position.x < width - character.width) {
            character.position.x += 5;
        }
        if (keyIsPressed) {
            if (keyIsDown(LEFT_ARROW)) {
                character_state = CharacterStates.WALKING_LEFT;
                character.changeAnimation('walking');
            }
        } else {
            character_state = CharacterStates.IDLE_RIGHT;
            character.changeImage('right');
        }
    } else if (character_state == CharacterStates.WALKING_LEFT) { // State: Walking left
        if (character.position.x > 0 + character.width / 5) {
            character.position.x -= 5;
        }
        if (keyIsPressed) {
            if (keyIsDown(RIGHT_ARROW)) {
                character_state = CharacterStates.WALKING_RIGHT;
                character.changeAnimation('walking_right');
            }
        } else {
            character_state = CharacterStates.IDLE_LEFT;
            character.changeImage('left');
        }
    } else if (character_state == CharacterStates.IDLE_LEFT || character_state == CharacterStates.IDLE_RIGHT) {
        if (keyIsDown(RIGHT_ARROW)) {
            character_state = CharacterStates.WALKING_RIGHT;
            character.changeAnimation('walking_right');
        } else if (keyIsDown(LEFT_ARROW)) {
            character_state = CharacterStates.WALKING_LEFT;
            character.changeAnimation('walking');
        }
    }

    if (mouseIsPressed) {
        //character.scale = 0.165;
        //character.changeAnimation('walking_right');
    }

    if (button1.mouseIsPressed) {
        changeGameState(0);
    }

    if (pc.mouseIsOver) {
        pc.changeImage("hover");
    } else pc.changeImage("normal");


    if (workbench.mouseIsOver) {
        workbench.changeImage("hover");
    } else workbench.changeImage("normal");

    if (cash_register.mouseIsOver) {
        cash_register.changeImage("hover");
    } else cash_register.changeImage("normal");

    drawSprites(menuScene);
}