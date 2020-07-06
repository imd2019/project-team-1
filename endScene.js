// endScene variables

var endScene;
var end_idle = loadImage('EndNegative/1.png');

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
}

function initEndScene() {
    Geldbaum.position.x = -60;
    Geldbaum.position.y = 400;

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