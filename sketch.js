const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var umbrella;
var maxDrops=100;
var drops = [];
var thunder, thunder1, thunder2, thunder3, thunder4;
var thunderCreatedAt;

function preload(){
    walkingAnimation = loadAnimation('images/Walking Frame/walking_1.png', 'images/Walking Frame/walking_2.png', 'images/Walking Frame/walking_3.png', 'images/Walking Frame/walking_4.png', 'images/Walking Frame/walking_5.png', 'images/Walking Frame/walking_6.png', 'images/Walking Frame/walking_7.png', 'images/Walking Frame/walking_8.png');
    thunder1 = loadImage('images/thunderbolt/1.png');
    thunder2 = loadImage('images/thunderbolt/2.png');
    thunder3 = loadImage('images/thunderbolt/3.png');
    thunder4 = loadImage('images/thunderbolt/4.png');
}

function setup(){
   createCanvas(600,600);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(width/2, height-200, 110, walkingAnimation);
    
   for(let i=0; i<maxDrops; i++) {
    drops.push(new RainDrops(random(0, 400), random(0, 400)));
 }
}

function draw(){
   background(0);

   Engine.update(engine);

   if(frameCount % 80 === 0){

    randX = random(100, 700);
    randY = random(50, 70);

    thunder = createSprite(randX, randY);
    thunderCreatedAt = frameCount;
   switch(rand) {
    case 1: thunder.addImage(thunderImg1);
            break;
    case 2: thunder.addImage(thunderImg2);
            break;
    case 3: thunder.addImage(thunderImg3);
            break;
    case 4: thunder.addImage(thunderImg4);
            break;
    default: break;
        }
    
    }
    if (thunderCreatedAt + 15 === frameCount) {
        thunder.destroy();
        }

    umbrella.display();
    
  
    drawSprites();
}   

