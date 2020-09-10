var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var part1, part2, part3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageBody_options = {
		restitution : 0.5
	}
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	engine = Engine.create();
	world = engine.world;

	part1 = new Rectangle(375, 650, 200, 20);
	part2 = new Rectangle(475, 620, 20, 100);
	part3 = new Rectangle(275, 620, 20, 100);


	
	packageBody = Bodies.circle(width/2 , 200 , 5 , packageBody_options);
	Matter.Body.setStatic(packageBody, true);
	var pos = packageBody.position;
	var angle = packageBody.angle;
	World.add(world, packageBody);
	push();
    translate(pos.x, pos.y);
	rotate(angle);
	ellipse(0, 0, packageBody.width, packageBody.height);
	pop();
    
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  part1.display();
  part2.display();
  part3.display();
  drawSprites();

  console.log(packageSprite.y);
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
  if (keyCode === LEFT_ARROW){
	helicopterSprite.x=helicopterSprite.x-20; 
	   translation={x:-20,y:0} ;
	   Matter.Body.translate(packageBody, translation)
   }
	   
	   if (keyCode === RIGHT_ARROW) {
		   helicopterSprite.x=helicopterSprite.x+20;
		   translation={x:+20,y:0} ;
		   Matter.Body.translate(packageBody, translation) 
	   }
   }




