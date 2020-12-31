const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var umbrella;
var maxDrops=100;
var drops = [];
var thunder, thunder1, thunder2, thunder3, thunder4;

function preload(){
    walkingAnimation = loadAnimation('images/Walking Frame/walking_1.png', 'images/Walking Frame/walking_2.png', 'images/Walking Frame/walking_3.png', 'images/Walking Frame/walking_4.png', 'images/Walking Frame/walking_5.png', 'images/Walking Frame/walking_6.png', 'images/Walking Frame/walking_7.png', 'images/Walking Frame/walking_8.png');
    thunder1 = loadImage('images/thunderbolt/1.png');
    thunder2 = loadImage('images/thunderbolt/2.png');
    thunder3 = loadImage('images/thunderbolt/3.png');
    thunder4 = loadImage('images/thunderbolt/4.png');
}

function setup(){
   createCanvas(630,630);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(width/2-300, height-600, 110, walkingAnimation);
   umbrella.scale=0.05;
   
}

function draw(){
   background(0);

   Engine.update(engine);

    for(var i=0; i<maxDrops; i++) {
        drops.push(new RainDrops(random(0, 400), random(0, 400)));
        drops[i].updatePos();
        drops[i].display();
        spawnLightning();
        }
        console.log("Hi");
    
    umbrella.display();

function spawnLightning(){
    if(frameCount%150 === 0) {
        thunder=createSprite(100,50,10,80);
        var rand = Math.round(random(1,4));
        console.log("Ha");
        switch(rand) {
            case 1: thunder.addImage(thunder1);
                  break;
            case 2: thunder.addImage(thunder2);
                  break;
            case 3: thunder.addImage(thunder3);
                  break;
            case 4: thunder.addImage(thunder4);
                  break;
            default: break;
            }
        }
}
}