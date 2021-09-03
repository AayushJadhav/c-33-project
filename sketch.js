const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var engine, world;

var snow;

var bg;

function preload()
{
  bg = loadImage("snow1.jpg");
}

function setup()
{
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  snow = new Snow(0, 10);

  // createSprite(400, 200, 50, 50);
}

function draw()
{
  background(bg);
  Engine.update(engine);
  // text(mouseX + "," + mouseY, mouseX, mouseY);


  snow.display();

  spawnSnow();

  // drawSprites();
}

function spawnSnow()
{
  var snow = [];

  for (var i = 0; i < 800; i += 10) {
    snow.push(new Snow(i, 10));
  }

  for(var a = 0; a < snow.length; a++) {
    snow[a].display();
  }
}
