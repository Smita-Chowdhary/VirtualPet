//Create variables here
var dog, happyDog,database,foodS,foodStock,dogImg;
var feed, add;
var fedTime, lastfed;
var foodObj;

function preload()
{
  //load images here
  happyDog=loadImage("images/dogImg1.png");
  dogImg=loadImage("images/dogImg.png");
}

function setup() {
  database=firebase.database();

  createCanvas(1000, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg);
  dog.scale=0.2;

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  foodObj= new Food(300,250,50,50);

  feed=createButton("Feed the Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  add=createButton("Add Food");
  add.position(800,95);
  add.mousePressed(addFoodS);

  



  
}


function draw() { 
  background(46,139,87);
  
  drawSprites();
  //add styles here
  textSize(30);
  fill("black");
  text("Food Remaining: "+ foodS, 100,100);
  foodObj.display();

}

function readStock(data){
  foodS=data.val();

}

function writeStock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}



