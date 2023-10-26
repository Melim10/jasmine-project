class Obstacle {
    constructor (gameScreen){
        this.gameScreen = gameScreen;
        //this.left = Math.floor(Math.random() * 300 + 70);  
        //this.top = 0;
        //this.width = 100;
       // this.height = 150;
        
       this.element = document.querySelectAll(".obstacle")
        //this.element.src = "./images/car.png" 
        //this.element.style.width = `${this.width}px`;
        //this.element.style.height = `${this.height}px`;
       // this.element.style.left = `${this.left}px`;
        //this.element.style.top = `${this.top}px`;
        this.element.style.position = "absolute";
        
        this.gameScreen.appendChild(this.element)
    }
    /*
    updatePosition(){
        this.element.style.top = `${this.top}px`;  
    }
    move(){
        this.updatePosition();
    }
    */
    
}