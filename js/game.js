class Game {
    // constructor with the properties needed
    constructor(){
        this.startScreen = document.querySelector("#game-intro")
        this.gameScreen = document.querySelector("#game-screen")
        this.gameEndScreen = document.querySelector("#game-end")
        this.player = new Player(
            this.gameScreen,
            425,
            1000,
            150,
            150,
            "images/student happy.png"
          );

          this.jasmine=new Jasmine(this.gameScreen, 425, 0, 150, 150, "images/jasmin-sleeping.png")
        this.height = 850
        this.width = 1000
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

        
        this.gameLoop();
        this.jasmine.updateState()
        
    }
    
    gameLoop(){
        if(this.gameIsOver === true){
            return
        }
        
        this.update()
        
        window.requestAnimationFrame(() => this.gameLoop());
        
        
    }
    
    update(){
        if(this.jasmine.state===true && this.player.isMoving===true){
            this.endGame()
        } else if(this.jasmine.state===true && this.player.isMoving===false){
            this.jasmine.element.src = "images/jasmin angry.png"
        } else if(this.jasmine.state===false){
            this.jasmine.element.src = "images/jasmin-sleeping.png"
        }else if(this.jasmine.loop===false){
            this.endGame()
        }

        if(this.player.top===0){
            this.endGame()
        }
        

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
    }

    
    
}
