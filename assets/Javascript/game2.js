/*supperhero names at least 10*/
let word = ['Batman','Superman','Cyborg','AquaMan','Wonder Women','Joker', 'Catwomen', 'The Riddler','Supergirl', 'Robin','Batgirl', 'Green Lantern','Bane', 'Two Face', 'Lex Luther' ];
const getRandWord = function(){
 return word[Math.floor(Math.random() * word.length)].toLowerCase()
}

let wins = 0
let losses = 0
let guesses = 10
const letterGuessed = []



const reset = _ => {
    word = getRandWord()
    letterGuessed = []
    guesses = 10
    displayWord()
    document.getElementById('guesses').textContent = guesses
    document.getElementById('wins').textContent = wins
    document.getElementById('losses').textContent = losses
    document.getElementById('letters').textContent = letterGuessed.join(',')
}


const displayWord = _ => { 
    let wordStr = ''
    let winStatus = true
    word.split('').forEach(letter => {
        if(letterGuessed.indexOf(letter) ==! -1){
            wordStr += '${letter}'
 } else {
    wordStr += '_'
    winStatus = false
}
    })
   document.getElementById('word').textContent = wordStr
 
    if(winStatus) {alert('You Won!')
    wins++
    reset()
    } 
}
    

const checkletter = letter => {
            letterGuessed.push(event.key)
           document.getElementById('letters').textContent = letterGuessed.join(',')
             if(word.includes(event.key)){ 
        displayWord()
            } else {
                guesses --
                document.getElementById('guesses').textContent = guesses
                if(guesses<= 0){
                    alert('You Lost!')
                    losses ++
                    reset()
                   
                }
            }
        }

document.onkeyup = event => event.keyCode >= 65 && event.keyCode <= 90 && letterGuessed.indexOf(event.key) === -1? checkletter(event.key) : null

reset()









