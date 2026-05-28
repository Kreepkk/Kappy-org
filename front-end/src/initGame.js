import initKaplay from "./kaplayCtx";

export default function initGame() {
    const k = initKaplay();

    k.loadSprite("background", "./background.jpg");

    k.add([k.sprite("background"), k.pos(0, -150), k.scale(1)]);
}