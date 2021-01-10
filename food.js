class Food{
    constructor(){
        this.foodStock=20;
        this.lastFed;
        this.image=loadImage("Milk.png");

    }
    getFoodStock(){
        var foodRef  = database.ref('food');
    foodRef.on("value",function(data){
       foodRef = data.val();
    })
    }

    updateFoodStock(food){
        database.ref('/').update({
            foodRef: food
          });

    }

    deductFood(){
        if(this.foodStock>0){
            this.foodStock=this.foodStock-1;
           }
    }

display(){
    var x=80,y=100;   
    imageMode(CENTER);
    if(this.foodStock!=0){
      for(var i=0;i<this.foodStock;i++){
       if(i%10==0){
        x=80;
        y=y+50;
      }
    image(this.image,x,y,50,50);
    x=x+30;
        }
    }
    }
}