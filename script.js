var minhaArray = ['rock', 'paper', 'scissors'];

function getChoice(choice) {
    let myChoiceElement = document.getElementById('myChoice')  

    myChoiceElement.innerHTML = `<img name="${choice}" id="me" src="images/${choice}.jpeg" alt="">`

}

function play() {
    let playElement = document.getElementById('botChoice')
    let response = Math.floor(Math.random() * 3)

    playElement.innerHTML = `<img name="${minhaArray[response]}" id="bot" src="images/${minhaArray[response]}.jpeg" alt="">`

    check()
}

function check() {
    let myChoice = document.getElementById('me')
    let botChoice = document.getElementById('bot')
    let me = myChoice.name
    let bot = botChoice.name 
    let result = document.getElementById('result')
    if(me === 'rock') {
        switch(bot) {
            case 'rock':
                result.innerHTML = 'Tie'
                break;
            case 'paper':
                result.innerHTML = 'Lose'
                break;
            case 'scissors':
                result.innerHTML = 'Win'
                break;
        }
    }
    if(me === 'paper') {
        switch(bot) {
            case 'rock':
                result.innerHTML = 'Win'
                break;
            case 'paper':
                result.innerHTML = 'Tie'
                break;
            case 'scissors':
                result.innerHTML = 'Lose'
                break;
        }
    }
    if(me === 'scissors') {
        switch(bot) {
            case 'rock':
                result.innerHTML = 'Lose'
                break;
            case 'paper':
                result.innerHTML = 'Win'
                break;
            case 'scissors':
                result.innerHTML = 'Tie'
                break;
        }
    }
}