var canvasWidth = 1920;
var CanvasHeight = 1080;
var gameRunning;
var gameState;
var Umsatz;
var ButtonCount;
var lastButtonPressed;

const GameStates = {
    SHOP: 0,
    GAME: 1,
    WORKBENCH: 2,
    INTRO: 3,
    KASSE: 4,
    COMPUTER: 5,
    START: 6,
    END: 7
};

//--------------------------------------------------------------------------------------------------------


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
    if (gameState == GameStates.START) {
        drawStartScene();
    }
    if (gameState == GameStates.END) {
        drawEndScene();
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
    if (gameState == GameStates.START) {
        exitStartScene();
    }
    if (gameState == GameStates.END) {
        exitEndScene();
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
    if (newState == GameStates.START) {
        initStartScene();
    }
    if (newState == GameStates.END) {
        initEndScene();
    }


    mouseIsPressed = false;
    gameState = newState;
}