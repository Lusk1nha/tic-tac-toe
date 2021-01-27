const body = document.querySelector('body')
const subtitle = document.querySelector('#subtitle')
var container = ''

const matrix = []
let ticTacToe = 0
let currentPlayer = ''
let whoWin = ''


createGame()


// * Shows the current player
function subtitleChanger(init) {
    if ( init == 'ticTacToe' ) {        
        matrix.forEach(box => {
            box.classList.add('winner')
            
        });

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 1000)

    }

    if ( init == true ) {
        let firstPlayer = ['X', 'O']
        
        let choose = Math.floor(Math.random() * firstPlayer.length)
        
        currentPlayer = firstPlayer[choose]
        
        return subtitle.innerHTML = `Primeiro jogador começa com <span>${currentPlayer}</span>`        

    } else if ( !init ) { 
        return subtitle.innerHTML = `É a vez do <span>${currentPlayer}</span>`

    }
}


// * Creating the matrix and putting in the HTML
function createGame() {
    let div = document.createElement('div')
    body.appendChild(div)

    div.setAttribute('id', 'container')

    container = document.querySelector('#container')

    subtitleChanger(true)
    const width = 3
    
    for ( var i = 0; i < width*width; i++) {
        let box = document.createElement('div')
        container.appendChild(box)
        
        box.classList.add('box')
        box.classList.add('empty')
        
        matrix.push(box)
        
    }
    
    ticTacToe = 0
    return keys()
    
}


// * Entering the click events in the boxes and if any is pressed, place the X or O
function keys() {
    matrix.forEach(box => {
        box.addEventListener('click', () => {
            if ( box.innerHTML === "" ) {
        
                box.innerHTML = currentPlayer
                box.classList.remove('empty')
                
                currentPlayer = (currentPlayer == "X") ? "O" : "X" // Ternary Operator

                gameValidation()
                subtitleChanger(false)
                
            }
        })
    });
}


// * Validate the win conditions
function gameValidation() {
    ticTacToe++

    if ( matrix[0].innerHTML == 'X' && matrix[1].innerHTML == 'X' && matrix[2].innerHTML == 'X' ) {
        matrix[0].classList.add('winner')
        matrix[1].classList.add('winner')
        matrix[2].classList.add('winner')
    

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 1500)

    } 
    
    else if ( matrix[3].innerHTML == 'X' && matrix[4].innerHTML == 'X' && matrix[5].innerHTML == 'X' ) {
        matrix[3].classList.add('winner')
        matrix[4].classList.add('winner')
        matrix[5].classList.add('winner')
    

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    } 
    
    else if ( matrix[6].innerHTML == 'X' && matrix[7].innerHTML == 'X' && matrix[8].innerHTML == 'X' ) {
        matrix[6].classList.add('winner')
        matrix[7].classList.add('winner')
        matrix[8].classList.add('winner')
    

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    } 
    
    else if ( matrix[0].innerHTML == 'X' && matrix[3].innerHTML == 'X' && matrix[6].innerHTML == 'X' ) {
        matrix[0].classList.add('winner')
        matrix[3].classList.add('winner')
        matrix[6].classList.add('winner')
    

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    }

    else if ( matrix[1].innerHTML == 'X' && matrix[4].innerHTML == 'X' && matrix[7].innerHTML == 'X' ) {
        matrix[1].classList.add('winner')
        matrix[4].classList.add('winner')
        matrix[7].classList.add('winner')
    

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    }

    else if ( matrix[2].innerHTML == 'X' && matrix[5].innerHTML == 'X' && matrix[8].innerHTML == 'X' ) {
        matrix[2].classList.add('winner')
        matrix[5].classList.add('winner')
        matrix[8].classList.add('winner')
    

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    }
    
    else if ( matrix[0].innerHTML == 'X' && matrix[4].innerHTML == 'X' && matrix[8].innerHTML == 'X' ) {
        matrix[0].classList.add('winner')
        matrix[4].classList.add('winner')
        matrix[8].classList.add('winner')

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    }

    else if ( matrix[2].innerHTML == 'X' && matrix[4].innerHTML == 'X' && matrix[6].innerHTML == 'X' ) {
        matrix[2].classList.add('winner')
        matrix[4].classList.add('winner')
        matrix[6].classList.add('winner')

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)
    }
    
    // ! O win

    else if ( matrix[0].innerHTML == 'O' && matrix[1].innerHTML == 'O' && matrix[2].innerHTML == 'O' ) {
        matrix[0].classList.add('winner')
        matrix[1].classList.add('winner')
        matrix[2].classList.add('winner')
   

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 1500)

    } 
    
    else if ( matrix[3].innerHTML == 'O' && matrix[4].innerHTML == 'O' && matrix[5].innerHTML == 'O' ) {
        matrix[3].classList.add('winner')
        matrix[4].classList.add('winner')
        matrix[5].classList.add('winner')
               

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    } 
    
    else if ( matrix[6].innerHTML == 'O' && matrix[7].innerHTML == 'O' && matrix[8].innerHTML == 'O' ) {
        matrix[6].classList.add('winner')
        matrix[7].classList.add('winner')
        matrix[8].classList.add('winner')
        
        

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    } 
    
    else if ( matrix[0].innerHTML == 'O' && matrix[3].innerHTML == 'O' && matrix[6].innerHTML == 'O' ) {
        matrix[0].classList.add('winner')
        matrix[3].classList.add('winner')
        matrix[6].classList.add('winner')
        

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    }

    else if ( matrix[1].innerHTML == 'O' && matrix[4].innerHTML == 'O' && matrix[7].innerHTML == 'O' ) {
        matrix[1].classList.add('winner')
        matrix[4].classList.add('winner')
        matrix[7].classList.add('winner')
        

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    }

    else if ( matrix[2].innerHTML == 'O' && matrix[5].innerHTML == 'O' && matrix[8].innerHTML == 'O' ) {
        matrix[2].classList.add('winner')
        matrix[5].classList.add('winner')
        matrix[8].classList.add('winner')
        

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    }
    
    else if ( matrix[0].innerHTML == 'O' && matrix[4].innerHTML == 'O' && matrix[8].innerHTML == 'O' ) {
        matrix[0].classList.add('winner')
        matrix[4].classList.add('winner')
        matrix[8].classList.add('winner')


        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)

    } 
    
    else if ( matrix[2].innerHTML == 'O' && matrix[4].innerHTML == 'O' && matrix[6].innerHTML == 'O' ) {
        matrix[2].classList.add('winner')
        matrix[4].classList.add('winner')
        matrix[6].classList.add('winner')
        

        container.style = `pointer-events: none;`
        return setTimeout(gameReboot, 2000)
    }

    if ( ticTacToe > 8 ) {
        whoWin = 'velha'
        subtitleChanger('ticTacToe')

    }
}


// * Rebooting the game
function gameReboot() {
    if ( whoWin != "velha") {
        whoWin = (currentPlayer == "X") ? "O" : "X" // Ternary Operator
    }

    matrix.forEach(element => {
        element.remove()
    });

    matrix.length = 0   // ! reset the matrix

    container.style = `pointer-events: auto;` // ! enable the all events to user

    if ( whoWin == 'velha' ) {
        subtitle.innerHTML = `O jogo deu <span>velha</span>`

    } else {
        subtitle.innerHTML = `O jogador <span>${whoWin}</span> ganhou`

    }

    whoWin = ""
    container.remove()

    return setTimeout(createGame, 3000)

} 