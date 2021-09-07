var garden,rabbit, apple, oleaf, leaf, grass1, grass2, grass3, grass4;
var gardenImg,rabbitImg, appleImg, oleafImg, leafImg, grassImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  oleafImg = loadImage("orangeLeaf.png");
  leafImg = loadImage("leaf.png");
  grassImg = loadImage("grass.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//grass (randomly spawned)
grass1 = createSprite(random(50, 350),random(320, 340),30,30);
grass1.scale =0.09;
grass1.addImage(grassImg);

grass2 = createSprite(random(50, 350),random(320, 340),30,30);
grass2.scale =0.09;
grass2.addImage(grassImg);

grass3 = createSprite(random(50, 350),random(320, 340),30,30);
grass3.scale =0.09;
grass3.addImage(grassImg);

grass4 = createSprite(random(50, 350),random(320, 340),30,30);
grass4.scale =0.09;
grass4.addImage(grassImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  // rabit controls
  rabbit.x = mouseX;
  if(rabbit.x > 340){
 rabbit.x = 340;
  }
  if(rabbit.x < 40){
    rabbit.x = 40;
     }


     var select_sprites = Math.round(random(1,3));
     if (frameCount % 80 == 0){
       if (select_sprites == 1){
         makeapples();
       }
       if (select_sprites == 2){
        makeoleaf();
      }
      if (select_sprites == 3){
        makeleaf();
      }
       
     }

  drawSprites();
}

function makeapples(){
  apple = createSprite(random(50,350), 40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.08
  apple.velocityY = 5; 
  apple.lifetime = 100;

}

function makeoleaf(){
  oleaf = createSprite(random(50,350), 40, 10, 10);
  oleaf.addImage(oleafImg);
  oleaf.scale = 0.08
  oleaf.velocityY = 3; 
  oleaf.lifetime = 120;

}

function makeleaf(){
  leaf = createSprite(random(50,350), 40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.08
  leaf.velocityY = 3; 
  leaf.lifetime = 120;

}


