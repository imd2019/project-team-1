var canvasWidth = 1920;
var CanvasHeight = 1080;
var gameRunning;
var gameState;

const GameStates = {
    MENU: 0,
    GAME: 1,
    WORKBENCH: 2,
    COMPUTER: 3,
};

//--------------------------------------------------------------------------------------------------------

// function preload() {
//     soundFormats('mp3', 'ogg');
//     //mySound = loadSound('sounds/bounce.mp3');

// }

//--------------------------------------------------------------------------------------------------------

function draw() {
    if (gameState == GameStates.MENU) {
        drawMenuScene();
    }
    if (gameState == GameStates.GAME) {
        drawGameScene();
    }
    if (gameState == GameStates.WORKBENCH) {
        drawWorkbenchScene();
    }
    if (gameState == GameStates.COMPUTER) {
        drawStageClearScene();
    }
}

//--------------------------------------------------------------------------------------------------------


function changeGameState(newState) {
    if (newState == GameStates.MENU) {
        initMenuScene();
    }
    if (newState == GameStates.GAME) {
        initGameScene();
    }
    if (newState == GameStates.WORKBENCH) {
        initWorkbenchScene();
    }
    if (newState == GameStates.COMPUTER) {
        initStageClearScene();
    }


    mouseIsPressed = false;
    gameState = newState;
}