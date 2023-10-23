class Jasmine{
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.imgSrc = imgSrc;
        this.element = document.createElement("img");
        this.state = false;
        this.count= 0;

        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        
        this.gameScreen.appendChild(this.element);
    }

    updateState(){
        if(count===3){
            this.state = true
        }else{
            this.state=false
        }
        let counterLoop = 0;


    let times = 0

    let myCounterLoop = setInterval(() => {
        counterLoop ++;
        if (counterLoop > 0 && counterLoop <= 3){
            console.log(counterLoop);               // FAZER COUNTER VISIVEL NO SCREEN
        } else if (counterLoop >= 4 && counterLoop <= 5){
            this.state = true;                   // JASMIN STATE ACTIVATE
        } else if (counterLoop >= 5){
            counterLoop = 0;
            times++
        } 
      if(times===6){
        clearInterval(myCounterLoop)
      }
    }, 1000)
    }

    
}


