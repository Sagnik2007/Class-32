const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var score=0;
var game_state="attach";


function preload() {
    changeBackground();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 480, 300, 220);

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1 = new Pig(810, 550);
    log1 = new Log(810,460,300, PI/2);

    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig2 = new Pig(810, 420);

    log3 =  new Log(810,380,300, PI/2);

    box5 = new Box(810,360,70,70);
    log4 = new Log(760,320,150, PI/7);
    log5 = new Log(870,320,150, -PI/7);

    bird = new Bird(215,200);
    slingshot = new Slingshot(bird.body,{x:215,y:200});
    
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    pig1.score();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();
    pig2.score();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    slingshot.display();
    textSize(25);
    fill("red");
    text("Score :" + score,1000,50);
}

    function mouseDragged(){
        if(game_state === "attach"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
        }
    }
    
    function mouseReleased(){
        slingshot.fly();
        game_state = "flying";
    }

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        slingshot.attach(bird.body)
        game_state = "attach";
    }

}
async function changeBackground(){
    var wapi = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var wapiJson = await wapi.json();
    var wapiJsonDatetime = wapiJson.datetime;
    var hour = wapiJsonDatetime.slice(11,13);
    console.log(hour);
    if(hour > 6 && hour < 16){
        bg = "sprites/bg.png"
    }
    else{
        bg = "sprites/bg2.jpg"
    }

    backgroundImg = loadImage(bg);
}