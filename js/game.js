class Game {
  // constructor with the properties needed
  constructor() {
    this.startScreen = document.querySelector("#game-intro");
    this.gameScreen = document.querySelector("#game-screen");
    this.gameEndScreen = document.querySelector("#game-end");
    this.gameWonScreen = document.querySelector("#game-won");
    

    this.statsContainer = document.getElementById("stats");
    this.player = new Player(
      this.gameScreen,
      700,
      1000,
      150,
      150,
      "images/student 02.png"
      );
      
      this.jasmine = new Jasmine(
        this.gameScreen,
        1200,
        35,
        150,
        150,
        "images/jasmin-sleeping.png"
        );
        this.height = 930;
        this.width = 1550;
        this.tickets = [];
        this.gameIsOver = false;
        this.loadingTicket = false;
        this.ticketCount = 0;
        this.fpsCounter = null;
        this.audioStart = document.querySelector("#audio-start");
        this.audioWin = document.querySelector("#audio-win");
        this.audioLose = document.querySelector("#audio-lose");
        
      }
      
      start() {
        // this.audioStart.play();

        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.height = `${this.height}px`;
        
        this.startScreen.style.display = "none";
        
        this.gameScreen.style.display = "block";

        
        
        this.gameLoop();
        this.jasmine.updateState();
      }
      
      gameLoop() {
        if (this.gameIsOver === true) {
          return;
        }
        
        this.update();
        
        window.requestAnimationFrame(() => this.gameLoop());
      }
      
      update() {
        
        

        if(this.fpsCounter != null){
          this.fpsCounter++;
        }
        
        // const jasmine1 = new Audio("./audio/hello-02.wav")
        // jasmine1.volume = 0.04

        if (this.jasmine.state === true && this.player.isMoving === true) {
          this.jasmine.loop=false
          this.statsContainer.style.display="none"
          this.endGame();

        } else if (this.jasmine.state === true && this.player.isMoving === false) {

          this.jasmine.element.src = "images/jasmin angry.png";
          // jasmine1.play()

        } else if (this.jasmine.state === false) {
            this.jasmine.element.src = "images/jasmin-sleeping.png";
      } 

    if (this.jasmine.loop === false) {
      this.endGame();
    }

    if (this.player.top === 0) {
      this.gameWon();
    }

    this.player.move();

    if (!this.tickets.length && !this.loadingTicket) {
      // Info Varible that ticket is being loaded
      this.loadingTicket = true;
      let newTicket;
      setTimeout(() => {
        newTicket = new Ticket(this.gameScreen, this.player.top - 200);
        this.tickets.push(newTicket);
        this.loadingTicket = false;
        this.fpsCounter = 0;
      }, 6000);
    } else {
      for (let i = 0; i < this.tickets.length; i++) {
        const ticket = this.tickets[i];

        if (this.player.didGetTicket(ticket)) {

          // Counter
          this.ticketCount++;

          // Removing the Ticket from HTML + Class
          ticket.element.remove();
          this.tickets.splice(i, 1);
        }

        else if(this.fpsCounter % 400 === 0) {
            ticket.element.remove();
            this.tickets.splice(i, 1);
        }
      }
    }
  }

  endGame() {
    
    this.gameIsOver = true;
    // this.audioLose.play();
    this.player.element.remove();
    this.tickets.forEach((ticket) => {
      ticket.element.remove();
    });

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";

    
}

  ticketCounter() {
    return this.ticketCount;
  }

  gameWon(){
    // this.audioWin.play();
    this.gameWonScreen.style.display = "block";
    this.gameEndScreen.style.display = "none";
    this.gameScreen.style.display = "none"
    this.statsContainer.style.display="none"
  }

  
}
