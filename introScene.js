// introScene variables

var introScene;
var intro0;
var bn = loadImage('Einführung_button/button_weiter.png');
var bn_hover = loadImage('Einführung_button/button_weiter_hover.png');
var i = loadImage('Graphics/introscreen1.png');
var i1 = loadImage('Graphics/introscreen1.png');


var ms;
var screenNumber = 1;

//--------------------------------------------------------------------------------------------------------

function setupIntroScene() {
    introScene = new Group();




    //BUTTON NEXT

    intro0 = createSprite(width / 2, height / 2);
    //intro0.addImage("1", i);
    intro0.addAnimation('screen1',
        'introscreen1/intro1.png',
        'introscreen1/intro2.png',
        'introscreen1/intro3.png',
        'introscreen1/intro4.png',
        'introscreen1/intro5.png',
        'introscreen1/intro6.png'
    );

    intro0.addAnimation('screen2',
        'introscreen2/intro1.png',
        'introscreen2/intro2.png',
        'introscreen2/intro3.png',
        'introscreen2/intro4.png',
        'introscreen2/intro5.png'
    );

    intro0.addAnimation('screen3',
        'introscreen3/intro1.png',
        'introscreen3/intro2.png',
        'introscreen3/intro3.png',
        'introscreen3/intro4.png',
        'introscreen3/intro5.png',
        'introscreen3/intro6.png'
    );

    intro0.addAnimation('screen4',
        'introscreen4/intro1.png',
        'introscreen4/intro2.png',
        'introscreen4/intro3.png',
        'introscreen4/intro4.png',
        'introscreen4/intro5.png',
        'introscreen4/intro6.png'
    );

    intro0.addAnimation('screen5',
        'introscreen5/intro1.png',
        'introscreen5/intro2.png',
        'introscreen5/intro3.png',
        'introscreen5/intro4.png',
        'introscreen5/intro5.png',
        'introscreen5/intro6.png',
        'introscreen5/intro7.png'
    );

    intro0.addAnimation('screen6',
        'introscreen6/intro1.png',
        'introscreen6/intro2.png',
        'introscreen6/intro3.png',
        'introscreen6/intro4.png',
        'introscreen6/intro5.png',
        'introscreen6/intro6.png',
        'introscreen6/intro7.png'
    );

    intro0.addAnimation('screen7',
        'introscreen7/intro1.png',
        'introscreen7/intro2.png',
        'introscreen7/intro3.png',
        'introscreen7/intro4.png',
        'introscreen7/intro5.png',
        'introscreen7/intro6.png'
    );

    introScene.add(intro0);

    //BUTTON NEXT
    button_next = createSprite(1100, 600);
    button_next.addImage("normal", bn);
    button_next.addImage("hover", bn_hover);
    button_next.scale = 0.2;
    button_next.mouseActive = true;
    introScene.add(button_next);

}

function buttonNext_mouseReleased() {
    console.log("Introscene Screen: " + screenNumber);
    if (screenNumber == 7) {
        console.log("Change to Shop Scene");
        click_sound.setVolume(0.2);
        click_sound.play();
        changeGameState(GameStates.SHOP);
    } else {
        screenNumber++;
        intro0.changeAnimation("screen" + screenNumber);
        click_sound.setVolume(0.2);
        click_sound.play();
        console.log("Changed animation to screen" + screenNumber);
    }
}

function buttonNext_mouseOver() {
    button_next.changeImage("hover");
}

function buttonNext_mouseOut() {
    button_next.changeImage("normal");
}

function initIntroScene() {
    console.log("initIntroScene()");
    screenNumber = 1;
    intro0.changeAnimation("screen1");
    button_next.onMouseReleased = buttonNext_mouseReleased;
    button_next.onMouseOver = buttonNext_mouseOver;
    button_next.onMouseOut = buttonNext_mouseOut;
}

function exitIntroScene() {
    console.log("exitIntroScene()");
    button_next.onMouseReleased = undefined;
    button_next.onMouseOver = undefined;
    button_next.onMouseOut = undefined;
}




function drawIntroScene() {
    //background(254, 228, 179);


    drawSprites(introScene);
}