const rulesBtn = document.getElementById('rules-btn');
const firstContainer = document.querySelector('.first-container')
const secondContainer = document.querySelector('.second-container')
const divRules = document.getElementById('div-rules');
const closeBtn = document.querySelector('.close')
const closeDiv = document.querySelector('.close-div')
const psr = document.querySelectorAll('.inner-div')
const contest = document.querySelector('.contest');
const score = document.getElementById('score')
let count = 0;


rulesBtn.addEventListener('click',()=>{
    if (contest.classList.contains('contest-flex')) {
        secondContainer.classList.toggle('div-rules')
        contest.classList.toggle('contest-flex')
    }
    firstContainer.classList.toggle('div-rules');
    secondContainer.classList.toggle('div-rules');
    divRules.classList.toggle('show-rules');
    rulesBtn.classList.toggle('div-rules');
    closeDiv.classList.toggle('div-rules');
    
})

closeBtn.addEventListener('click',()=>{
    firstContainer.classList.toggle('div-rules');
    secondContainer.classList.toggle('div-rules');
    divRules.classList.toggle('show-rules');
    rulesBtn.classList.toggle('div-rules');
    closeDiv.classList.toggle('div-rules')
    if(secondContainer.classList.contains('div-rules')){
        contest.style.display='flex'
    }
    
})

psr.forEach(ele=>{ 
    ele.addEventListener('click',(e)=>{
        
        secondContainer.classList.toggle('div-rules')
        contest.classList.add('contest-flex')
        //********************** */
        const userDiv = document.querySelector('.user-div');
        userDiv.innerHTML=`
        <p class="user-title">YOU PICKED</p>
        <div class="user-outer-div outer-div outer-${ele.id}">
          <div class="inner-div">
            <img class="user-img" src="./images/icon-${ele.id}.svg" alt="${ele.id}" />
          </div>
        </div>
        `
        
        let computerHand = psr[Math.floor(Math.random()*(psr.length))].id

        const computerDiv = document.querySelector('.computer-choice')
        computerDiv.innerHTML=`
        <p class="computer-title">THE HOUSE PICKED</p>
        <div class="computer-outer-div outer-div outer-${computerHand}">
          <div class="inner-div" id="${computerHand}">
            <img src="./images/icon-${computerHand}.svg" alt="${computerHand}" />
          </div>
        </div>
        `
        let result;
        
        switch(ele.id+computerHand){
            case"paperrock":
            case"rockscissors":
            case"scissorspaper":
            result ="YOU WIN"
            count++
            break;
            case"rockpaper":
            case"scissorsrock":
            case"paperscissors":
            result ="YOU LOSE"
            break;
            case"paperpaper":
            case"rockrock":
            case"scissorsscissors":
            result ="IT'S A DRAW"
        }

        const displayResult=document.querySelector('.game-title')
        displayResult.innerHTML=result;
        score.value = count;
        
        const playAgain = document.querySelector('.play-again')

        playAgain.addEventListener('click', ()=>{
            contest.classList.remove('contest-flex')
            secondContainer.classList.remove('div-rules')
        })





        })
    })

