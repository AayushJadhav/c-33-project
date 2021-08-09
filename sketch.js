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


  snow = new Snow(width / 2, 10);

  /*
  snow2 = new Snow(10, 20);
  snow3 = new Snow(10, 30);
  snow4 = new Snow(10, 40);
  snow5 = new Snow(10, 50);
  snow6 = new Snow(10, 60);
  snow7 = new Snow(10, 70);
  snow8 = new Snow(10, 80);
  snow9 = new Snow(10, 90);
  snow10 = new Snow(10, 100);
  snow11 = new Snow(10, 110);
  snow12 = new Snow(10, 120);
  snow13 = new Snow(10, 130);
  snow14 = new Snow(10, 140);
  snow15 = new Snow(10, 150);
  snow16 = new Snow(10, 160);
  snow17 = new Snow(10, 170);
  snow18 = new Snow(10, 180);
  snow19 = new Snow(10, 190);
  snow20 = new Snow(10, 200);
  snow21 = new Snow(10, 210);
  snow22 = new Snow(10, 220);
  snow22 = new Snow(10, 230);
  snow23 = new Snow(10, 240);
  snow24 = new Snow(10, 250);
  snow25 = new Snow(10, 260);
  snow26 = new Snow(10, 270);
  snow27 = new Snow(10, 280);
  snow28 = new Snow(10, 290);
  snow29 = new Snow(10, 300);
  snow30 = new Snow(10, 10);
  snow31 = new Snow(10, 10);
  snow32 = new Snow(10, 10);
  snow33 = new Snow(10, 10);
  snow34 = new Snow(10, 10);
  snow35 = new Snow(10, 10);
  snow36 = new Snow(10, 10);
  snow37 = new Snow(10, 10);
  snow38 = new Snow(10, 10);
  snow39 = new Snow(10, 10);
  snow40 = new Snow(10, 10);
  snow41 = new Snow(10, 10);
  snow42 = new Snow(10, 10);
  snow43 = new Snow(10, 10);
  snow44 = new Snow(10, 10);
  snow45 = new Snow(10, 10);
  snow46 = new Snow(10, 10);
  snow47 = new Snow(10, 10);
  snow48 = new Snow(10, 10);
  snow49 = new Snow(10, 10);
  snow50 = new Snow(10, 10);
  */

  // createSprite(400, 200, 50, 50);
}

function draw()
{
  background(bg);
  Engine.update(engine);
  // text(mouseX + "," + mouseY, mouseX, mouseY);


  snow.display();
  /*
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow19.display();
  snow20.display();
  snow21.display();
  snow22.display();
  snow22.display();
  snow23.display();
  snow24.display();
  snow25.display();
  snow26.display();
  snow27.display();
  snow28.display();
  snow29.display();
  snow30.display();
  snow31.display();
  snow32.display();
  snow33.display();
  snow34.display();
  snow35.display();
  snow36.display();
  snow37.display();
  snow38.display();
  snow39.display();
  snow40.display();
  snow41.display();
  snow42.display();
  snow43.display();
  snow44.display();
  snow45.display();
  snow46.display();
  snow47.display();
  snow48.display();
  snow49.display();
  snow50.display();
  */

  // spawnSnow();

  // drawSprites();
}

/* I wanted to create multiple snow balls, but it didn't work :(,
function spawnSnow()
{
  var snow = [];
  snow.length == 80;

  for (var i = 10; i < 80; i = i + 10) {
    var snow = new Snow(i, 10);
  }

  for(var a = 0; a < snow.length; a++) {
    snow[a].display();
  }
}
*/
