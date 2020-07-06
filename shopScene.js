// shopScene variables

var shopScene;


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
var fg = loadImage('Grounds/Foreground1.png');
var fg1 = loadImage('Grounds/Background4.png');
var fg2 = loadImage('Grounds/Background3.png');
var fg3 = loadImage('Grounds/Background2.png');
var fg4 = loadImage('Grounds/Background1.png');
var Kunde1_Tex = loadImage('Graphics/c1.png');
var cal_idle = loadImage('CalendarApril/1.png');
var feedback_sm = loadImage('Feedback/socialmedia.png');
var feedback_web = loadImage('Feedback/Marvin_Gut_Webseite.png');
var feedback_Werbung = loadImage('Feedback/Marvin_Gut_Onlinewerbung.png');
var feedback_Fernsehwerbung = loadImage('Feedback/Marvin_Bad_fernsehwerbung_1.png');
var feedback_Zubehoer = loadImage('Feedback/Marvin_Gut_Zubehör.png');
var feedback_Mitarbeiter = loadImage('Feedback/Marvin_Bad_mitarbeiter.png');
var feedback_Lieferservice = loadImage('Feedback/Marvin_Gut_Lieferdienst.png');
var feedback_Flyer = loadImage('Feedback/Marvin_Bad_flyer.png');

var feedback_Renovieren = loadImage('Feedback/Marvin_Bad_renovieren_1.png');
var feedback_Preise = loadImage('Feedback/Marvin_Gut_Preise_anpassen.png');
var feedback_Angebot = loadImage('Feedback/Marvin_Gut_Sonderangebote.png');

var feedback_Blumenkränze = loadImage('Feedback/Marvin_Gut_Blumenkranz.png');
var feedback_Grußkarten = loadImage('Feedback/Marvin_Gut_Grußkarten.png');
var feedback_Handyhüllen = loadImage('Feedback/Marvin_Gut_Handyhüllen.png');
var feedback_Rosentee = loadImage('Feedback/Marvin_Gut_Rosentee.png');
var feedback_Workshop = loadImage('Feedback/Marvin_Gut_Workshop.png');


var geldBaumAnimSequenceRequested = false;
var geldbaumSequenceState = 0;
var geldBaumAnimPlaying = false;

var geldBaumDelay = 1 * 30;
var geldBaumAnimationDelay = geldBaumDelay;
var lastUmsatz;

var backgroundColor;


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
    shopScene = new Group();
    pressed = false;
    Umsatz = 0;
    lastUmsatz = 0;

    //FOREGROUND2

    foreground2 = createSprite(width / 2, height / 2);
    foreground2.addImage("stage1", fg1);
    foreground2.addImage("stage2", fg2);
    foreground2.addImage("stage3", fg3);
    foreground2.addImage("stage4", fg4);
    shopScene.add(foreground2);

    //WORKBENCH

    workbench = createSprite(180, 300);
    workbench.addImage("normal", wb_texture);
    workbench.addImage("hover", wb_hover);
    workbench.scale = 0.15;
    shopScene.add(workbench);
    workbench.mouseActive = true;


    //KALENDER

    cal = createSprite(width / 2 - 270, height / 2 - 40);
    cal.addImage(cal_idle);
    let april = loadAnimation("CalendarApril/1.png", "CalendarApril/2.png", "CalendarApril/3.png", "CalendarApril/4.png", "CalendarApril/5.png", "CalendarApril/6.png", "CalendarApril/7.png", "CalendarMay/1.png");
    let may = loadAnimation("CalendarMay/1.png", "CalendarMay/2.png", "CalendarMay/3.png", "CalendarMay/4.png", "CalendarMay/5.png", "CalendarMay/6.png", "CalendarMay/7.png", "CalendarJune/1.png");
    let june = loadAnimation("CalendarJune/1.png", "CalendarJune/2.png", "CalendarJune/3.png", "CalendarJune/4.png", "CalendarJune/5.png", "CalendarJune/6.png", "CalendarJune/7.png", "CalendarJuly/1.png");
    let july = loadAnimation("CalendarJuly/1.png", "CalendarJuly/2.png", "CalendarJuly/3.png", "CalendarJuly/4.png", "CalendarJuly/5.png", "CalendarJuly/6.png", "CalendarJuly/7.png", "CalendarAug/1.png");
    let aug = loadAnimation("CalendarAug/1.png", "CalendarAug/2.png", "CalendarAug/3.png", "CalendarAug/4.png", "CalendarAug/5.png", "CalendarAug/6.png", "CalendarAug/7.png", "CalendarSep/1.png");
    let sep = loadAnimation("CalendarSep/1.png", "CalendarSep/2.png", "CalendarSep/3.png", "CalendarSep/4.png", "CalendarSep/5.png", "CalendarSep/6.png", "CalendarSep/7.png", "CalendarSep/8.png");
    april.looping = false;
    april.frameDelay = 4;
    may.looping = false;
    may.frameDelay = 4;
    june.looping = false;
    june.frameDelay = 4;
    july.looping = false;
    july.frameDelay = 4;
    aug.looping = false;
    aug.frameDelay = 4;
    sep.looping = false;
    sep.frameDelay = 4;
    cal.addAnimation('change', april);
    cal.addAnimation('change2', may);
    cal.addAnimation('change3', june);
    cal.addAnimation('change4', july);
    cal.addAnimation('change5', aug);
    cal.addAnimation('change6', sep);
    cal.scale = 0.25;
    cal.visible = true;
    shopScene.add(cal);

    //CHARACTER

    character = createSprite(width / 2, height / 2 + 10);
    character.addImage("left", character_left);
    character.addImage("right", character_right);
    character.addAnimation('walking', 'Laufen/laufen1.png', 'Laufen/laufen10.png');
    character.addAnimation('walking_right', 'Laufen_Rechts/laufenrechts1.png', 'Laufen_Rechts/laufenrechts10.png');
    character.addAnimation('typing', 'Tippen/tippen1.png', 'Tippen/tippen6.png');
    character.addAnimation('crafting', 'Basteln/basteln1.png', 'Basteln/basteln8.png');
    character.scale = 0.9;
    shopScene.add(character);



    //FOREGROUND

    foreground = createSprite(width / 2, height / 2);
    foreground.addImage(fg);
    shopScene.add(foreground);


    //PC

    pc = createSprite(750, 336);
    pc.addImage("normal", pc_texture);
    pc.addImage("hover", pc_hover);
    pc.addAnimation('shining', 'PC_Shiny/shiny1.png', 'PC_Shiny/shiny3.png');
    pc.scale = 0.17;
    shopScene.add(pc);
    pc.mouseActive = true;

    //CASHREGISTER

    cash_register = createSprite(520, 348);
    cash_register.addImage("normal", cash_texture);
    cash_register.addImage("hover", cash_hover);
    cash_register.addAnimation("shine", 'Kasse_Glow/1.png', 'Kasse_Glow/6.png')
    cash_register.scale = 0.17;
    shopScene.add(cash_register);


    //GELDBAUM
    Geldbaum = createSprite(670, 440);

    Geldbaum.addAnimation("states",
        "Geldbaum/1_1.png", "Geldbaum/1_2.png", "Geldbaum/1_3.png",
        "Geldbaum/2_1.png", "Geldbaum/2_2.png", "Geldbaum/2_3.png",
        "Geldbaum/3_1.png", "Geldbaum/3_2.png", "Geldbaum/3_3.png",
        "Geldbaum/4_1.png", "Geldbaum/4_2.png", "Geldbaum/4_3.png",
        "Geldbaum/5_1.png", "Geldbaum/5_2.png", "Geldbaum/5_3.png",
        "Geldbaum/6_1.png", "Geldbaum/6_2.png", "Geldbaum/6_3.png",
        "Geldbaum/7_1.png", "Geldbaum/7_2.png", "Geldbaum/7_3.png",
        "Geldbaum/8_1.png", "Geldbaum/8_2.png", "Geldbaum/8_3.png",
        "Geldbaum/9_1.png", "Geldbaum/9_2.png", "Geldbaum/9_3.png",
        "Geldbaum/10_1.png", "Geldbaum/10_2.png", "Geldbaum/10_3.png",
    );
    Geldbaum.changeAnimation("states");
    Geldbaum.animation.rewind();
    Geldbaum.animation.stop();
    Geldbaum.animation.frameDelay = 8;


    Geldbaum.scale = 0.15;
    shopScene.add(Geldbaum);



    //MARVIN

    Marvin = createSprite(960, height / 7);
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
    shopScene.add(Marvin);


    //KUNDE 1

    // Kunde1 = createSprite(1400, height / 2 + 100);
    // Kunde1.addImage("idle", Kunde1_Tex);
    // Kunde1.addAnimation('walking', 'Kunde_Laufen/1.png', 'Kunde_Laufen/24.png');
    // Kunde1.scale = 0.2;
    // Kunde1.visible = false;
    // shopScene.add(Kunde1);

    //FEEDBACK

    Feedback = createSprite(width / 2, height / 2);
    Feedback.addImage("sm", feedback_sm);
    Feedback.addImage("website", feedback_web);
    Feedback.addImage("Werbung", feedback_Werbung);
    Feedback.addImage("Fernsehwerbung", feedback_Fernsehwerbung);
    Feedback.addImage("Lieferservice", feedback_Lieferservice);
    Feedback.addImage("Flyer", feedback_Flyer);
    Feedback.addImage("Mitarbeiter", feedback_Mitarbeiter);
    Feedback.addImage("Zubehoer", feedback_Zubehoer);

    Feedback.addImage("Preise", feedback_Preise);
    Feedback.addImage("Angebot", feedback_Angebot);
    Feedback.addImage("Renovieren", feedback_Renovieren);

    Feedback.addImage("Blumenkränze", feedback_Blumenkränze);
    Feedback.addImage("Grußkarten", feedback_Grußkarten);
    Feedback.addImage("Handyhüllen", feedback_Handyhüllen);
    Feedback.addImage("Rosentee", feedback_Rosentee);
    Feedback.addImage("Workshop", feedback_Workshop);

    Feedback.scale = 0.2;
    Feedback.visible = false;
    shopScene.add(Feedback);

}

//INPUT KASSE

function cash_register_mouseReleased() {
    character_state = CharacterStates.WALKING_TO_CASHREGISTER;
}

function cash_register_mouseOver() {
    if (ButtonCount_Cash < 3) {
        cash_register.changeImage("hover");
    }
}

function cash_register_mouseOut() {
    cash_register.changeImage("normal");
}

//INPUT PC

function pc_mouseReleased() {
    character_state = CharacterStates.WALKING_TO_PC;
}

function pc_mouseOver() {
    if (ButtonCount_PC < 8) {
        pc.changeImage("hover");
    }
}

function pc_mouseOut() {
    pc.changeImage("normal");
}


//INPUT WORKBENCH

function workbench_mouseReleased() {
    character_state = CharacterStates.WALKING_TO_WORKBENCH;
}

function workbench_mouseOver() {
    if (ButtonCount_Workbench < 5) {
        workbench.changeImage("hover");
    }
}

function workbench_mouseOut() {
    workbench.changeImage("normal");
}



function initShopScene() {
    console.log("initShopScene()");
    activateAllShopButtons();

    character_state = CharacterStates.IDLE_LEFT;
    character.changeImage('left');

    cash_register.changeImage("normal");
    workbench.changeImage("normal");
    pc.changeImage("normal");
}

function exitShopScene() {
    console.log("exitShopScene()");
    deactivateAllShopButtons();
}


function drawShopScene() {
    background(0);

    // rgb(254, 228, 179);
    // ...
    // rgb(192,211,217)


    backgroundColor = color(192 + (254 - 192) * (Umsatz / 28),
        211 + (228 - 211) * (Umsatz / 28),
        217 + (179 - 217) * (Umsatz / 28));

    fill(backgroundColor);

    // console.log(Math.floor(192 + (254 - 192) * (Umsatz / 28)) + "," +
    //     Math.floor(211 + (228 - 211) * (Umsatz / 28)) + "," +
    //     Math.floor(217 + (179 - 217) * (Umsatz / 28)));

    rect(-10, -10, 1300, 539);
    noStroke();
    fill(247, 235, 223);
    rect(-10, 529, 1300, 980);

    if (Umsatz < 6) {
        foreground2.changeImage("stage4");
    } else if (Umsatz > 6 && Umsatz < 12) {
        foreground2.changeImage("stage3");
    } else if (Umsatz > 12 && Umsatz < 18) {
        foreground2.changeImage("stage2");
    } else if (Umsatz > 18) {
        foreground2.changeImage("stage1");
    }


    switch (character_state) {
        case (CharacterStates.WALKING_TO_CASHREGISTER): // State: Walking to Cashregister
            if (Math.abs(character.position.x - (cash_register.position.x - 40)) < 10) {
                console.log("reached cash reg: " + ButtonCount_Workbench);
                if (ButtonCount_Cash < 3) {
                    changeGameState(GameStates.KASSE);
                }
            } else if (character.position.x < (cash_register.position.x - 40)) {
                character.position.x += 5;
                character.changeAnimation('walking_right');
            } else {
                character.position.x -= 5;
                character.changeAnimation('walking');
            }
            break;


        case (CharacterStates.WALKING_TO_PC): // State: Walking to PC
            if (Math.abs(character.position.x - (pc.position.x - 40)) < 10) {
                if (ButtonCount_PC < 8) {
                    changeGameState(GameStates.COMPUTER);
                }
            } else if (character.position.x < (pc.position.x - 40)) {
                character.position.x += 5;
                character.changeAnimation('walking_right');
            } else {
                character.position.x -= 5;
                character.changeAnimation('walking');
            }
            break;


        case (CharacterStates.WALKING_TO_WORKBENCH): // State: Walking to Workbench
            if (Math.abs(character.position.x - workbench.position.x) < 10) {
                if (ButtonCount_Workbench < 5) {
                    changeGameState(GameStates.WORKBENCH);
                }
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

    let lastBaumState = Math.floor((lastUmsatz / 28) * 29);
    let baumState = Math.floor((Umsatz / 28) * 29);

    if (geldBaumAnimSequenceRequested) { // Umsatz hat sich gegenüber letztem Frame geändert -> sequenz
        switch (geldbaumSequenceState) {
            case (0):
                deactivateAllShopButtons();
                geldbaumSequenceState++;
                break;
            case (1): // Feedback animation
                console.log("Play Feedback Animation till done");
                if (Feedback.visible) {
                    if (mouseIsPressed) {
                        geldbaumSequenceState++;
                        Feedback.visible = false;
                    }
                } else {
                    if (lastButtonPressed === Button_SM) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("sm");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Website) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("website");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Fernsehwerbung) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Fernsehwerbung");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Werbung) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Werbung");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Lieferservice) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Lieferservice");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Flyer) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Flyer");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Mitarbeiter) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Mitarbeiter");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Zubehoer) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Zubehoer");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Preise) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Preise");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Angebot) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Angebot");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Blumenkränze) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Blumenkränze");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Grußkarten) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Grußkarten");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Handyhüllen) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Handyhüllen");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Rosentee) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Rosentee");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Workshop) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Workshop");
                        Feedback.visible = true;
                    } else if (lastButtonPressed === Button_Renovieren) {
                        lastButtonPressed = undefined;
                        Feedback.changeImage("Renovieren");
                        Feedback.visible = true;
                    } else {
                        geldbaumSequenceState++;
                    }
                }
                break;

            case (2):
                changeCalendar();
                geldbaumSequenceState++
                break;
            case (3): // Geldbaum Animation
                geldBaumAnimationDelay--;
                if (geldBaumAnimationDelay <= 0) {
                    if (!geldBaumAnimPlaying) {
                        console.log("Start geldbaum animation. lastBaumState=" + lastBaumState + ", baumState=" + baumState);
                        Geldbaum.animCnt = Math.abs(lastBaumState - baumState);
                        if (Geldbaum.animCnt == 0) { // no frame change needed
                            geldBaumAnimationDelay = geldBaumDelay;
                            geldbaumSequenceState++;
                            geldBaumAnimPlaying = false;
                        } else {
                            lastBaumFrame = baumState;
                            Geldbaum.animation.goToFrame(baumState);
                            geldBaumAnimPlaying = true;
                        }
                    } else { // already playing
                        console.log("Run geldbaum animation");
                        if (Geldbaum.animation.getFrame() != lastBaumFrame) {
                            console.log("Frame Changed");
                            lastBaumFrame = Geldbaum.animation.getFrame();
                            Geldbaum.animCnt--;
                            if (Geldbaum.animCnt == 0) { // letzter frame erreicht
                                geldBaumAnimationDelay = geldBaumDelay;
                                geldbaumSequenceState++;
                                geldBaumAnimPlaying = false;
                            }
                        }

                    }
                }
                break;

            case (4): // Ende der Sequenz
                if (ButtonCount == 12) {
                    changeGameState(GameStates.END);
                } else {
                    console.log("End of sequence");
                    baumState = lastBaumState;
                    lastUmsatz = Umsatz;
                    geldbaumSequenceState = 0;
                    geldBaumAnimSequenceRequested = false;
                    activateAllShopButtons();
                }
                break;
        }

    }







    drawSprites(shopScene);
}

function changeCalendar() {
    if (ButtonCount === 2) {
        cal.visible = true;
        cal.changeAnimation("change");
        cal.animation.play();
    }
    if (ButtonCount === 4) {
        cal.visible = true;
        cal.changeAnimation("change2");
        cal.animation.play();
    }
    if (ButtonCount === 6) {
        cal.visible = true;
        cal.changeAnimation("change3");
        cal.animation.play();
    }
    if (ButtonCount === 8) {
        cal.visible = true;
        cal.changeAnimation("change4");
        cal.animation.play();
    }
    if (ButtonCount === 10) {
        cal.visible = true;
        cal.changeAnimation("change5");
        cal.animation.play();
    }
    if (ButtonCount === 12) {
        cal.visible = true;
        cal.changeAnimation("change6");
        cal.animation.play();
    }
}


function changeMoney(amount) {
    Umsatz += amount;
    if (Umsatz > 28) {
        Umsatz = 28;
    } else if (Umsatz < 0) {
        Umsatz = 0;
    }
    console.log("Umsatz :" + Umsatz);
}

function deactivateAllShopButtons() {
    cash_register.onMouseReleased = undefined;
    cash_register.onMouseOver = undefined;
    cash_register.onMouseOut = undefined;

    pc.onMouseReleased = undefined;
    pc.onMouseOver = undefined;
    pc.onMouseOut = undefined;

    workbench.onMouseReleased = undefined;
    workbench.onMouseOver = undefined;
    workbench.onMouseOut = undefined;
}

function activateAllShopButtons() {
    cash_register.onMouseReleased = cash_register_mouseReleased;
    cash_register.onMouseOver = cash_register_mouseOver;
    cash_register.onMouseOut = cash_register_mouseOut;

    pc.onMouseReleased = pc_mouseReleased;
    pc.onMouseOver = pc_mouseOver;
    pc.onMouseOut = pc_mouseOut;

    workbench.onMouseReleased = workbench_mouseReleased;
    workbench.onMouseOver = workbench_mouseOver;
    workbench.onMouseOut = workbench_mouseOut;

}