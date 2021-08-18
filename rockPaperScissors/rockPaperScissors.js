const getUserChoice = userInput =>{
userInput = userInput.toLowerCase();
if(userInput === 'rock' || userInput==='paper' || userInput==='scissors' || userInput==='bomb'){
  return userInput;
}else{
  console.log('Error');
}
};
function getComputerChoice(){
  getComputerChoice = Math.floor(Math.random() * 3)
  if(getComputerChoice===1){
    return 'rock'
  }else if(getComputerChoice===2){
    return 'paper';
  }else{
    return 'scissors'
  }
} ;

function determineWinner(userChoice, computerChoice){
  if(userChoice==='bomb'){
    return 'You won';
  }
  if(userChoice === computerChoice){
    return 'The game was tie!';
  }
   if(userChoice==='rock'){
          if(computerChoice==='paper'){
      return 'The computer won';
    }else{
      return 'The you won';
    }
  }
  
  if(userChoice ==='paper'){
     if(computerChoice ==='scissors' || computerChoice==='rock'){
       return 'The computer won!';
     }else{
       return 'You won';
     }
  }
  if(userChoice ==='scissors'){
     if(computerChoice ==='rock' || computerChoice==='paper'){
       return 'The computer won!';
     }else{
       return 'You won';
     }
  }
}
const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
playGame()
