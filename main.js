var canvasWidth = 1920;
var CanvasHeight = 1080;
var gameRunning;
var gameState;
var Umsatz;

const GameStates = {
    SHOP: 0,
    GAME: 1,
    WORKBENCH: 2,
    INTRO: 3,
    KASSE: 4,
    COMPUTER: 5,
};

//--------------------------------------------------------------------------------------------------------

// function preload() {
//     soundFormats('mp3', 'ogg');
//     //mySound = loadSound('sounds/bounce.mp3');

// }

//--------------------------------------------------------------------------------------------------------

function draw() {
    if (gameState == GameStates.SHOP) {
        drawShopScene();
    }
    if (gameState == GameStates.GAME) {
        drawGameScene();
    }
    if (gameState == GameStates.WORKBENCH) {
        drawWorkbenchScene();
    }
    if (gameState == GameStates.INTRO) {
        drawIntroScene();
    }
    if (gameState == GameStates.KASSE) {
        drawKassenScene();
    }
    if (gameState == GameStates.COMPUTER) {
        drawComputerScene();
    }
}

//--------------------------------------------------------------------------------------------------------


function changeGameState(newState) {
    if (gameState == GameStates.SHOP) {
        exitShopScene();
    }
    if (gameState == GameStates.GAME) {
        exitGameScene();
    }
    if (gameState == GameStates.WORKBENCH) {
        exitWorkbenchScene();
    }
    if (gameState == GameStates.INTRO) {
        exitIntroScene();
    }
    if (gameState == GameStates.KASSE) {
        exitKassenScene();
    }
    if (gameState == GameStates.COMPUTER) {
        exitComputerScene();
    }


    if (newState == GameStates.SHOP) {
        initShopScene();
    }
    if (newState == GameStates.GAME) {
        initGameScene();
    }
    if (newState == GameStates.WORKBENCH) {
        initWorkbenchScene();
    }
    if (newState == GameStates.INTRO) {
        initIntroScene();
    }
    if (newState == GameStates.KASSE) {
        initKassenScene();
    }
    if (newState == GameStates.COMPUTER) {
        initComputerScene();
    }


    mouseIsPressed = false;
    gameState = newState;
}