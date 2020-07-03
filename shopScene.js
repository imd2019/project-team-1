// menuScene variables

var menuScene;
var Umsatz;

var marvin = loadImage('Marvin_Laden/Marvin fliegt_1.png');
var character_left = loadImage('Graphics/Verkäuferin_links1.png');
var character_right = loadImage('Graphics/Verkäuferin_rechts1.png');
var button_weiter = loadImage('Graphics/Button_beige.png');
var pc_texture = loadImage('Elemente/PC-einzeln2.png');
var pc_hover = loadImage('Elemente/PC-einzeln-hover2.png');
var cash_texture = loadImage('Elemente/Kasse-einzeln2.png');
var cash_hover = loadImage('Elemente/Kasse-einzeln-hover2.png');
var wb_texture = loadImage('Elemente/Werkzeug-einzeln2.png');
var wb_hover = loadImage('Elemente/Werkzeug-einzeln-hover2.png');
var fg = loadImage('Graphics/Foreground.png');
var fg2 = loadImage('Graphics/Foreground2.png');
var Kunde1_Tex = loadImage('Graphics/c1.png');
var one_one = loadImage('Geldbaum/1_1.png');
var ten_three = loadImage('Geldbaum/10_3.png');



const CharacterStates = {
    IDLE_LEFT: 0,
    IDLE_RIGHT: 2,
    WALKING_LEFT: 3,
    WALKING_RIGHT: 4,
    CRAFTING: 5,
    WALKING_TO_CASHREGISTER: 6,
    WALKING_TO_PC: 7,
    WALKING_TO_WORKBENCH: 8
};
var character_state = CharacterStates.IDLE_LEFT;

//--------------------------------------------------------------------------------------------------------

function setupShopScene() {
    menuScene = new Group();
    pressed = false;
    Umsatz = 5;


    //FOREGROUND2

    foreground2 = createSprite(width / 2, height / 2);
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

    character = createSprite(width / 2, height / 2 + 10);
    character.addImage("left", character_left);
    character.addImage("right", character_right);
    character.addAnimation('walking', 'Laufen/laufen1.png', 'Laufen/laufen10.png');
    character.addAnimation('walking_right', 'Laufen_Rechts/laufenrechts1.png', 'Laufen_Rechts/laufenrechts10.png');
    character.addAnimation('typing', 'Tippen/tippen1.png', 'Tippen/tippen6.png');
    character.scale = 0.9;
    menuScene.add(character);



    //FOREGROUND

    foreground = createSprite(width / 2, height / 2);
    foreground.addImage(fg);
    menuScene.add(foreground);


    //PC

    pc = createSprite(750, 336);
    pc.addImage("normal", pc_texture);
    pc.addImage("hover", pc_hover);
    pc.addAnimation('shining', 'PC_Shiny/shiny1.png', 'PC_Shiny/shiny3.png');
    pc.scale = 0.17;
    menuScene.add(pc);
    pc.mouseActive = true;

    //CASHREGISTER

    cash_register = createSprite(520, 348);
    cash_register.addImage("normal", cash_texture);
    cash_register.addImage("hover", cash_hover);
    cash_register.scale = 0.17;
    menuScene.add(cash_register);
    //cash_register.mouseActive = true;

    //GELDBAUM

    Geldbaum = createSprite(670, 440);
    //Geldbaum.addImage("normal", ten_three);
    Geldbaum.addImage("hover", one_one);
    Geldbaum.scale = 0.15;
    menuScene.add(Geldbaum);



    //MARVIN

    Marvin = createSprite(960, height / 6);
    Marvin.addAnimation('flying',
        'Marvin_Laden/Marvin fliegt_1.png',
        'Marvin_Laden/Marvin fliegt_2.png',
        'Marvin_Laden/Marvin fliegt_3.png',
        'Marvin_Laden/Marvin fliegt_4.png',
        'Marvin_Laden/Marvin fliegt_5.png',
        'Marvin_Laden/Marvin fliegt_6.png',
        'Marvin_Laden/Marvin fliegt_7.png',
        'Marvin_Laden/Marvin fliegt_8.png',
        'Marvin_Laden/Marvin fliegt_9.png',
        'Marvin_Laden/Marvin fliegt_10.png',
        'Marvin_Laden/Marvin fliegt_11.png',
        'Marvin_Laden/Marvin fliegt_12.png',
        'Marvin_Laden/Marvin fliegt_13.png',
        'Marvin_Laden/Marvin fliegt_14.png',
        'Marvin_Laden/Marvin fliegt_15.png',
        'Marvin_Laden/Marvin fliegt_16.png',
        'Marvin_Laden/Marvin fliegt_17.png',
        'Marvin_Laden/Marvin fliegt_18.png'
    );
    Marvin.scale = 0.15;
    menuScene.add(Marvin);


    //KUNDE1

    // Kunde1 = createSprite(width / 2 + 200, height / 2 + 10);
    // Kunde1.addImage(Kunde1_Tex);
    // Kunde1.addAnimation('laufen', 'Kunde_Laufen/1.png', 'Kunde_Laufen/24.png');
    // Kunde1.scale = 0.2;
    // menuScene.add(Kunde1);

}

//INPUT KASSE

function cash_register_mouseReleased() {
    character_state = CharacterStates.WALKING_TO_CASHREGISTER;
}

function cash_register_mouseOver() {
    cash_register.changeImage("hover");
}

function cash_register_mouseOut() {
    cash_register.changeImage("normal");
}

//INPUT PC

function pc_mouseReleased() {
    character_state = CharacterStates.WALKING_TO_PC;;
}

function pc_mouseOver() {
    pc.changeImage("hover");
}

function pc_mouseOut() {
    pc.changeImage("normal");
}


//INPUT WORKBENCH

function workbench_mouseReleased() {
    character_state = CharacterStates.WALKING_TO_WORKBENCH;
}

function workbench_mouseOver() {
    workbench.changeImage("hover");
}

function workbench_mouseOut() {
    workbench.changeImage("normal");
}



function initShopScene() {
    console.log("initShopScene()");
    cash_register.onMouseReleased = cash_register_mouseReleased;
    cash_register.onMouseOver = cash_register_mouseOver;
    cash_register.onMouseOut = cash_register_mouseOut;

    pc.onMouseReleased = pc_mouseReleased;
    pc.onMouseOver = pc_mouseOver;
    pc.onMouseOut = pc_mouseOut;

    workbench.onMouseReleased = workbench_mouseReleased;
    workbench.onMouseOver = workbench_mouseOver;
    workbench.onMouseOut = workbench_mouseOut;


    character_state = CharacterStates.IDLE_LEFT;
    character.changeImage('left');


}

function exitShopScene() {
    console.log("exitShopScene()");

    cash_register.onMouseReleased = undefined;
    cash_register.onMouseOver = undefined;
    cash_register.onMouseOut = undefined;

    pc.onMouseReleased = undefined;
    pc.onMouseOver = undefined;
    pc.onMouseOut = undefined;


    workbench.onMouseReleased = undefined;
    workbench.onMouseOver = undefined;
    workbench.onMouseOut = undefined;

    cash_register.changeImage("normal");
}


function drawShopScene() {
    background(0);
    fill(254, 228, 179);
    rect(-10, -10, 1300, 539);
    fill(247, 235, 223);
    rect(-10, 529, 1300, 580);

    switch (character_state) {
        case (CharacterStates.WALKING_TO_CASHREGISTER): // State: Walking to Cashregister
            if (Math.abs(character.position.x - cash_register.position.x) < 10) {
                changeGameState(GameStates.KASSE);
            } else if (character.position.x < cash_register.position.x) {
                character.position.x += 5;
                character.changeAnimation('walking_right');
            } else {
                character.position.x -= 5;
                character.changeAnimation('walking');
            }
            break;


        case (CharacterStates.WALKING_TO_PC): // State: Walking to PC
            if (Math.abs(character.position.x - pc.position.x) < 10) {
                changeGameState(GameStates.COMPUTER);
            } else if (character.position.x < pc.position.x) {
                character.position.x += 5;
                character.changeAnimation('walking_right');
            } else {
                character.position.x -= 5;
                character.changeAnimation('walking');
            }
            break;


        case (CharacterStates.WALKING_TO_WORKBENCH): // State: Walking to Workbench
            if (Math.abs(character.position.x - workbench.position.x) < 10) {
                changeGameState(GameStates.WORKBENCH);
            } else if (character.position.x < workbench.position.x) {
                character.position.x += 5;
                character.changeAnimation('walking_right');
            } else {
                character.position.x -= 5;
                character.changeAnimation('walking');
            }
            break;



        case (CharacterStates.WALKING_RIGHT): // State: Walking right
            if (character.position.x < 1200) {
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
            break;
        case (CharacterStates.WALKING_LEFT): // State: Walking left
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
            break;
        case (CharacterStates.IDLE_LEFT):
        case (CharacterStates.IDLE_RIGHT):
            if (keyIsDown(RIGHT_ARROW)) {
                character_state = CharacterStates.WALKING_RIGHT;
                character.changeAnimation('walking_right');
            } else if (keyIsDown(LEFT_ARROW)) {
                character_state = CharacterStates.WALKING_LEFT;
                character.changeAnimation('walking');
            }
            break;
    }


    // if (mouseIsPressed) {
    //     pc.changeAnimation("shining");
    // }

    drawSprites(menuScene);
}