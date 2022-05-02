// Project by House Moses: Cyd V., Alexx H., Deneille D., James P., Joshua F., Kelly Ch., Mecca Y., Tiago D., Will S., Nafeesah S.

/* Step 1: creating an object called game that contains properties of the game and
methods to run when users play the game*/
const game = {
    //Step 2: giving player one and player two a property to specify the symbol associated with it (game pieces)
    playerOne:'x', 
    playerTwo:'o',
    //Step 3:taking each div from the document and turning them into an array (assigning them numbers) to target that specific part, easier to compare when determining the winner of the game.
    array : Array.from(document.querySelectorAll('.box')),
    // starting the turn count at zero, will be reassigned on each click
    turn: 0,
    //Create an array listing all of the possible winning combinations based on the index numbers of the divs in your HTML
    winningArray: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]],
    //Step 5: the function we want to run every time someone clicks a div
    runGame(event){
    // filling in an X or O when the div is clicked
        // if the div is already occupied by an X or O (or anything really), function will end
       if (event.target.innerText !== ''){
            return
       }
       game.turnTracker()
       // if the number of turns is odd, it will add an X to the div
       if (game.turn % 2 !== 0){
           event.target.innerText = game.playerOne
           document.querySelector('.playerTurn').innerText = "It is Player O's turn!"
           //consider adding innertext in dom
       }else{ // if the number of turns is even, it will add an O to the div
           event.target.innerText = game.playerTwo
           document.querySelector('.playerTurn').innerText = "It is Player X's turn!"
       }
      //check if anyone has won, do this before isTie in the event that someone wins on the last turn. If there is a winner, then isTie won't run. isWin contains the stop game function.
      game.isWin()
      //check if there's a tie
      game.isTie()
    },

    // increments the turn every time it is called
    turnTracker(){
        this.turn++
    },

    //HOW DO WE KNOW WE WIN??? VICTORY ROYALE
    isWin() {
      for (let i = 0; i < this.winningArray.length; i++){
           if (this.array[this.winningArray[i][0]].innerText !== '' &&
             this.array[this.winningArray[i][0]].innerText === this.array[this.winningArray[i][1]].innerText &&
            this.array[this.winningArray[i][0]].innerText === this.array[this.winningArray[i][2]].innerText){
               game.stopGame()
               game.colorWin(i)
               if (this.turn % 2 !== 0){
                  document.querySelector('.winner').innerText = 'Player X wins!'
                  document.querySelector('.playerTurn').innerText = ''
               }else{
                 document.querySelector('.winner').innerText = 'Player 0 wins!'
                 document.querySelector('.playerTurn').innerText = ''
               }
            } 
        }
    },
  
    isTie(){
      // if the board is filled with the 9 turns, call it a tie!
      if (this.turn === 9 && document.querySelector('.winner').innerText === ''){
        document.querySelector('.winner').innerText = 'It\s a tie!'
        game.stopGame()
      }
    },

    stopGame(){
        document.querySelector('.playField').removeEventListener('click', game.runGame)    
    },

    resetGame(){
      document.querySelector('.playField').addEventListener('click', game.runGame)
      game.turn = 0
      document.querySelector('.winner').innerText = ''
      document.querySelector('.playerTurn').innerText = "Player X will begin!"
      game.array.forEach(box => box.style.backgroundColor = 'rgba(54, 8, 92, 0)')
      game.array.forEach(box => box.innerText = '')
    },
    colorWin(winIndex){
      for (let i = 0; i < this.winningArray[winIndex].length; i++){
        this.array[this.winningArray[winIndex][i]].style.backgroundColor = 'rgba(54, 8, 92, 0.5)'
      }
    }
}

//Step 4: putting an event listener on the entire section containing all of the divs
//when the user clicks, this runs a function in object "game"
document.querySelector('.playField').addEventListener('click', game.runGame)
document.querySelector('.reset').addEventListener('click', game.resetGame)


// // Project by House Moses: Cyd V., Alexx H., Deneille D., James P., Joshua F., Kelly Ch., Mecca Y., Tiago D., Will S., Nafeesah S.
// class Game {
//   constructor(playerOne, playerTwo, turn, board, boardArray, winningArray, playerTurn, winner){
//     this.playerOne = playerOne
//     this.playerTwo = playerTwo
//     this.turn = turn
//     this.board = document.querySelector(board)
//     this.boardArray = Array.from(document.querySelectorAll(boardArray))
//     this.winningArray = winningArray
//     this.playerTurn = document.querySelector(playerTurn)
//     this.winner = document.querySelector(winner)
//   }

  
//   runGame(event){
//     if (event.target.innerText !== ''){
//       return
//     }
//     // this.turnTracker()
//     if (this.turn % 2 !== 0){
//       event.target.innerText = this.playerOne
//       // console.log(this.playerTurn.innerText)
//       // this.playerTurn.innerText = "It is Player O's turn!"
//     }else{ 
//       event.target.innerText = this.playerTwo
//       this.playerTurn.innerText = "It is Player X's turn!"
//     }
//     this.isWin()
//     this.isTie()
//   }
  
//   // turnTracker(){
//   //   this.turn++
//   // }

// isWin() {
//   for (let i = 0; i < this.winningArray.length; i++){
//        if (this.boardArray[this.winningArray[i][0]].innerText !== '' &&
//          this.boardArray[this.winningArray[i][0]].innerText === this.boardArray[this.winningArray[i][1]].innerText &&
//         this.boardArray[this.winningArray[i][0]].innerText === this.boardArray[this.winningArray[i][2]].innerText){
//            this.stopGame()
//            if (this.turn % 2 !== 0){
//               this.winner.innerText = 'player X wins!'
//               this.playerTurn.innerText('.playerTurn') = ''
//            }else{
//              this.winner.innerText = 'player 0 wins!'
//              this.playerTurn.innerText('.playerTurn') = ''
//            }
//         } 
//     }
// }

// isTie(){
//   if (this.turn === 9 && this.winner.innerText === ''){
//     this.winner.innerText = 'issa tie'
//     this.stopGame()
//   }
// }

// stopGame(){
//   this.board.removeEventListener('click', this.runGame)    
// }

// resetGame(){
//   this.board.addEventListener('click', this.runGame)
//   this.turn = 0
//   this.winner.innerText = ''
//   this.playerTurn.innerText = "Player X will begin!"
//   for (let i = 0; i < this.boardArray.length; i++){
//     this.boardArray[i].innerText = ''
//   }
// }

// }

// const tictactoeWins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
// const tictactoe = new Game('x', 'o', 0, '.playField','.box', tictactoeWins, '.playerTurn', '.winner')

// document.querySelector('.playField').addEventListener('click', tictactoe.runGame)
// document.querySelector('.reset').addEventListener('click', tictactoe.resetGame)


