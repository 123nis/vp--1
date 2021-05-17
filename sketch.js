var dog,sadDog,happyDog, database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;

function preload(){
sadDog=loadImage("Images/Dog.png");
happyDog=loadImage("Images/happydog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,700);

  

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  

}

function draw() {
  background("black");
  if(KeyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(happyDog)
  }
 
  drawSprites();
  text("food remaining:"+foodS,170,200)
  text("place Up-Arrow to feed the dog " ,130,10)
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  
}


function writeStock(x){
  if(x<=0){
x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
}