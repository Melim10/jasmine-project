class Jasmine{
    constructor(gameScreen, left, top, width, height, imgSrc){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.imgSrc = imgSrc
        this.element = document.createElement("img")
        this.state=false
        this.count= 0

        this.element.src = imgSrc
        this.element.style.position = "absolute"
        this.element.style.width = `${this.width}px`
        this.element.style.height = `${this.height}px`
        this.element.style.left = `${this.left}px`
        this.element.style.top = `${this.top}px`
        
        this.gameScreen.appendChild(this.element);
    }

    updateState(){
        if(count===3){
            this.state = true
        }else{
            this.state=false
        }
    }

    
}
function countUntil30() {
    let count = 1;
    const interval = setInterval(function () {
      console.log(count);
      count++;
      if (count > 30) {
        clearInterval(interval);
      }
    }, 1000); // Count every 1 second (1000 milliseconds)
  }
  
  // Start the counting process
  countUntil30();