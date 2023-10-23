class Game {
    // constructor with the properties needed
    constructor(){
        this.startScreen = document.querySelector("#game-intro")
        this.gameScreen = document.querySelector("#game-screen")
        this.gameEndScreen = document.querySelector("#game-end")
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "images/car.png"
          );
        this.height = 600
        this.width = 500
        this.tickets = []
        this.gameIsOver = false
        this.loadingTicket = false
        this.time = 30
    }

    start(){
        this.gameScreen.style.width = `${this.width}px`
        this.gameScreen.style.height = `${this.height}px`

        this.startScreen.style.display = "none"

        this.gameScreen.style.display = "block"

        this.player.didGetCaught()
        this.gameLoop();
    }

    gameLoop(){
        if(this.gameIsOver === true){
            return
        }

        this.update()

        window.requestAnimationFrame(() => this.gameLoop());


    }

    update(){

        this.player.move()

        if(!this.tickets.length && !this.loadingTicket){
            this.loadingTicket = true
            setTimeout(()=>{
                this.loadingTicket=false
            }, 500)
        }

       for(let i=0; i<this.tickets.length; i++){
        const ticket= this.tickets[i]
        ticket.move()

        if (this.player.didGetTicket(ticket)) {
            ticket.element.remove()

            this.tickets.splice(i,1)
        }
        else if(ticket.top > this.height){
            this.score++
            ticket.element.remove()
            this.tickets.splice(i,1)
        }


       }
       if(this.time === 0){
        this.endGame();
       }
    }

    endGame(){
        this.gameIsOver=true
        this.player.element.remove();
        this.tickets.forEach(ticket=>{
            ticket.element.remove();
        })

        this.gameScreen.style.display="none"
        this.gameEndScreen.style.display="block"
        lives.innerHTML=0
    }

    
    
}
