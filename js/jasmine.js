class Jasmine{
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.imgSrc = imgSrc
        // this.element = document.createElement("img")
        this.state=false
        this.count= 0
        this.startedInterval=false

        // this.element.src = imgSrc
        // this.element.style.position = "absolute"
        // this.element.style.width = `${this.width}px`
        // this.element.style.height = `${this.height}px`
        // this.element.style.left = `${this.left}px`
        // this.element.style.top = `${this.top}px`
        
        // this.gameScreen.appendChild(this.element);
    }

    updateState(){
        let counterLoop = 0;
        let times = 0
        if(!this.startedInterval){
        this.startedInterval = true;
        let myCounterLoop = setInterval(() => {
        counterLoop ++;
        if (counterLoop > 0 && counterLoop <= 3){
            console.log(counterLoop); 
            this.state= false
            // console.log(this.state)               // FAZER COUNTER VISIVEL NO SCREEN
        } else if (counterLoop >= 4 && counterLoop <= 5){
            this.state = true;
            // console.log(this.state)                   // JASMIN STATE ACTIVATE
        } else if (counterLoop >= 5){
            counterLoop = 0;
            times++
            this.state=false
            // console.log(this.state) 
        } 
      if(times===6){
        clearInterval(myCounterLoop);
        this.startedInterval = false;
      }
    }, 1000)
}
    }

    
}


