//<code/>
//Create variables here
var dog1,happyDog;
var foodS,foodStock;
var database;

function preload()
{
	//load images here
  dog1=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png");

}

function setup() {
  database=firebase.database();
  console.log(database);

	createCanvas(500, 500);
  dog=createSprite(250,250,20,20)
  dog.addImage(dog1);
  dog.scale=0.2

 foodStock=database.ref('Food')
  foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW))
{
  writeStock(foodS)
  dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
textSize(20);
fill("white");
//stroke();;
text("Food remaining: "+foodS,170,150);
//console.log(foodS);
textSize(15)
text("Note:Press UP_ARROW Key To Feed Drago Milk!",100,30)
}

function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  database.ref('/').update({
    'Food':foodS-1
  })
}
