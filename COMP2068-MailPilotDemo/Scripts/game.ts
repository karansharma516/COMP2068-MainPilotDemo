/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />





var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

var manifest = [
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "ocean", src: "assets/images/ocean.png" },
    { id: "plane", src: "assets/images/plane.png" }
];
// Game Objects 

function preload() {

    var assetLoader = new createjs.LoadQueue();
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this);
    assetLoader.loadManifest(manifest);

}

function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);

    main();
}

function gameLoop() {
   

    stage.update(); // Refreshes our stage
}



// Our Game Kicks off in here
function main() {
    
    console.log("Getting the game started");

    var plane: createjs.Bitmap = new createjs.Bitmap(assetLoader.getResult("plane"));
    stage.addChild(plane);
}