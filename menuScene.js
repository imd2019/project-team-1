// menuScene variables

var menuScene;
var character;
var character_left = loadImage('Graphics/Verkäuferin_links1.png');
var character_right = loadImage('Graphics/Verkäuferin_rechts1.png');



//--------------------------------------------------------------------------------------------------------

function setupMenuScene() {
    menuScene = new Group();
    pressed = false;

    character = createSprite(width / 2, height / 2);
    character.addImage(character_left);
    character.addAnimation('crafting', 'Basteln/vk1.png', 'Basteln/vk6.png');




    menuScene.add(character);
}

function initMenuScene() {

}

function drawMenuScene() {
    background("pink");

    if (keyIsDown(RIGHT_ARROW)) {
        character.position.x += 5;
        character.addImage(character_right);
    }

    if (keyIsDown(LEFT_ARROW)) {
        character.position.x -= 5;
        character.addImage(character_left);
    }

    if (mouseIsPressed) {

        character.changeAnimation('crafting');
    }



    drawSprites(menuScene);
}