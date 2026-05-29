import initKaplay from "./kaplayCtx";

export default function initGame() {
    const k = initKaplay();
//////////// Load Sprites //////////////////////////////////////
    k.loadSprite("background", "./background.jpg");
    k.loadSprite("avatar_default", "./avatar_default.png", {
        sliceY: 2,
        sliceX: 2,
        anims: {
            "idle": 0,
            idle_anim: {from: 0, to: 1, loop: true, speed: 2.5},
            wink_right: {from: 2, to: 0, loop: false, speed: 4},
            wink_left: {from: 3, to: 0, loop: false, speed: 4}
        }
    });
    k.loadSprite("record_btn", "./record_btn.png", {
        sliceY: 2,
        anims: {
            "idle": 0,
            pressed_anim: {from: 0, to: 1, loop: false, speed: 2}
        }
    });

    k.loadSprite("startStop_btn", "./startStop_btn.png", {
        sliceY: 2,
        anims: {
            "start_idle": 1,
            stop_anim: {from: 1, to: 0, loop: false, speed: 2},
            start_anim: {from: 0, to: 1, loop: false, speed: 2},
            "stop_idle": 0
        }
    });

    k.loadSprite("startDelete_btn", "./startDelete_btn.png", {
        sliceY: 2,
        anims: {
            "start_idle": 0,
            "delete_idle": 1
        }
    });
    
    k.loadSprite("timer", "./timer.png");

//////////// Add Sprites //////////////////////////////////////

// TODO: Define areas for the buttons
    k.add([k.sprite("background"), k.pos(0, -150), k.scale(1)]);
    k.add([k.sprite("timer"), k.pos(k.width() / 8, k.height() / 8), k.scale(0.8)]);
    const record_btn = k.add([k.sprite("record_btn"),
        k.pos(k.width() / 1.6, k.height() / 2.22),
        k.scale(0.5),
        k.area()
    ]);

    const startStop_btn = k.add([k.sprite("startStop_btn"),
        k.pos(k.width() / 2.55, k.height() / 2.2),
        k.scale(0.5),
        k.area(),
    ]);

    const startDelete_btn = k.add([k.sprite("startDelete_btn"),
        k.pos(k.width() / 4.2, k.height() / 2.2),
        k.scale(0.6),
        k.area(),
    ]);

    const character = k.add([k.sprite("avatar_default"), {anim: "up-idle"}, 
        k.area(),
        k.anchor("center"),
        k.scale(0.8),
        k.pos(k.width() / 6, k.height() / 1.245),
        "character",
        {
            speed: 100, 
            direction: k.vec2(0,0)
        }
    ]);

//////////// Hover Effects //////////////////////////////////////

    startStop_btn.onHover(() => {
        k.setCursor("pointer");
        startStop_btn.scale = k.vec2(0.55);
    });

    startStop_btn.onHoverEnd(() => {
        k.setCursor("default");
        startStop_btn.scale = k.vec2(0.5)
    });

    record_btn.onHover(() => {
        k.setCursor("pointer");
        record_btn.scale = k.vec2(0.53);
    });

    record_btn.onHoverEnd(() => {
        k.setCursor("default");
        record_btn.scale = k.vec2(0.5)
    });

//////////// Animations Effects //////////////////////////////////////
    startStop_btn.play("start_idle");
    character.play("idle_anim");
    startDelete_btn.play("start_idle");

    // FIXME: need to loop idle_anim after winking
    character.onClick(() => {
        character.play("wink_right");
        character.play("wink_left");
    });

    record_btn.onClick(() => {
        record_btn.play("pressed_anim");
    });

    // TODO: Add timer text

    const timerText = k.add([
        k.text("00:00"),
        k.pos(k.width() / 1.9, k.height() / 2.4),
        k.anchor("center"),
        k.scale(3.5)
    ]);

    startStop_btn.onClick(() => {
        startStop_btn.play("stop_anim");
    });

}