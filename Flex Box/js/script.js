const ulOn = document.querySelector('.body-card-doubt')


const cardToggle = document.querySelector('.card-one')
const cardToggleTwo = document.querySelector('.card-one-2')
const cardToggleThree = document.querySelector('.card-one-3')
const cardToggleFour = document.querySelector('.card-one-4')
const cardToggleFive = document.querySelector('.card-one-5')
const cardToggleSix = document.querySelector('.card-one-6')


const btnToggle = document.querySelector('.btn-one-1')
const btnToggleTwo = document.querySelector('.btn-one-2')
const btnToggleThree = document.querySelector('.btn-one-3')
const btnToggleFour = document.querySelector('.btn-one-4')
const btnToggleFive = document.querySelector('.btn-one-5')
const btnToggleSix = document.querySelector('.btn-one-6')


const degOne = document.querySelector('.deg')
const degTwo = document.querySelector('.deg-two')
const degThree = document.querySelector('.deg-three')
const degFour = document.querySelector('.deg-four')
const degFive = document.querySelector('.deg-five')
const degSix = document.querySelector('.deg-six')



ulOn.addEventListener('click', (e) => {
    const el = e.target

    // Card Dúvida 1

    if(el.classList.contains('btn-on')) {
        cardToggle.classList.toggle('card-one-toggle')
        cardToggleTwo.classList.remove('card-one-toggle')
        cardToggleThree.classList.remove('card-one-toggle')
        cardToggleFour.classList.remove('card-one-toggle')
        cardToggleFive.classList.remove('card-one-toggle')
        cardToggleSix.classList.remove('card-one-toggle')
    }

    if(el.classList.contains('btn-on')) {
        btnToggle.classList.toggle('btn-on-toggle')
        btnToggleTwo.classList.remove('btn-on-toggle')
        btnToggleThree.classList.remove('btn-on-toggle')
        btnToggleFour.classList.remove('btn-on-toggle')
        btnToggleFive.classList.remove('btn-on-toggle')
        btnToggleSix.classList.remove('btn-on-toggle')
    } 

    if(el.classList.contains('btn-on')) {
        degOne.classList.toggle('deg45-one')
        degTwo.classList.remove('deg45-two')
        degThree.classList.remove('deg45-three')
        degFour.classList.remove('deg45-four')
        degFive.classList.remove('deg45-five')
        degSix.classList.remove('deg45-six')
    }


    // Card Dúvida 2

    if(el.classList.contains('btn-two')) {
        degTwo.classList.toggle('deg45-two')
        degOne.classList.remove('deg45-one')
        degThree.classList.remove('deg45-three')
        degFour.classList.remove('deg45-four')
        degFive.classList.remove('deg45-five')
        degSix.classList.remove('deg45-six')
    }
    if(el.classList.contains('btn-two')) {
        btnToggleTwo.classList.toggle('btn-on-toggle')
        btnToggle.classList.remove('btn-on-toggle')
        btnToggleThree.classList.remove('btn-on-toggle')
        btnToggleFour.classList.remove('btn-on-toggle')
        btnToggleFive.classList.remove('btn-on-toggle')
        btnToggleSix.classList.remove('btn-on-toggle')
    }
    if(el.classList.contains('btn-two')) {
        cardToggleTwo.classList.toggle('card-one-toggle')
        cardToggle.classList.remove('card-one-toggle')
        cardToggleThree.classList.remove('card-one-toggle')
        cardToggleFour.classList.remove('card-one-toggle')
        cardToggleFive.classList.remove('card-one-toggle')
        cardToggleSix.classList.remove('card-one-toggle')
    }


    // Card Dúvida 3

    if(el.classList.contains('btn-three')) {
        degThree.classList.toggle('deg45-three')
        degSix.classList.remove('deg45-six')
        degFive.classList.remove('deg45-five')
        degFour.classList.remove('deg45-four')
        degTwo.classList.remove('deg45-two')
        degOne.classList.remove('deg45-one')
    }

    if(el.classList.contains('btn-three')) {
        btnToggleThree.classList.toggle('btn-on-toggle')
        btnToggleSix.classList.remove('btn-on-toggle')
        btnToggleFive.classList.remove('btn-on-toggle')
        btnToggleFour.classList.remove('btn-on-toggle')
        btnToggleTwo.classList.remove('btn-on-toggle')
        btnToggle.classList.remove('btn-on-toggle')
    }

    if(el.classList.contains('btn-three')) {
        cardToggleThree.classList.toggle('card-one-toggle')
        cardToggleSix.classList.remove('card-one-toggle')
        cardToggleFive.classList.remove('card-one-toggle')
        cardToggleFour.classList.remove('card-one-toggle')
        cardToggleTwo.classList.remove('card-one-toggle')
        cardToggle.classList.remove('card-one-toggle')
        
    }

    // // Card Dúvida 4
// 
    if(el.classList.contains('btn-four')) {
        degFour.classList.toggle('deg45-four')
        degSix.classList.remove('deg45-six')
        degFive.classList.remove('deg45-five')
        degThree.classList.remove('deg45-three')
        degTwo.classList.remove('deg45-two')
        degOne.classList.remove('deg45-one')
    }
    if(el.classList.contains('btn-four')) {
        btnToggleFour.classList.toggle('btn-on-toggle')
        btnToggleSix.classList.remove('btn-on-toggle')
        btnToggleFive.classList.remove('btn-on-toggle')
        btnToggleThree.classList.remove('btn-on-toggle')
        btnToggleTwo.classList.remove('btn-on-toggle')
        btnToggle.classList.remove('btn-on-toggle')
    }
    if(el.classList.contains('btn-four')) {
        cardToggleFour.classList.toggle('card-one-toggle')
        cardToggleSix.classList.remove('card-one-toggle')
        cardToggleFive.classList.remove('card-one-toggle')
        cardToggleThree.classList.remove('card-one-toggle')
        cardToggleTwo.classList.remove('card-one-toggle')
        cardToggle.classList.remove('card-one-toggle')
    }
 
     
    // Card Dúvida 5

    if(el.classList.contains('btn-five')) {
        degFive.classList.toggle('deg45-five')
        degSix.classList.remove('deg45-six')
        degFour.classList.remove('deg45-four')
        degThree.classList.remove('deg45-three')
        degTwo.classList.remove('deg45-two')
        degOne.classList.remove('deg45-one')
    }
    if(el.classList.contains('btn-five')) {
        btnToggleFive.classList.toggle('btn-on-toggle')
        btnToggleSix.classList.remove('btn-one-toggle')
        btnToggleFour.classList.remove('btn-on-toggle')
        btnToggleThree.classList.remove('btn-on-toggle')
        btnToggleTwo.classList.remove('btn-on-toggle')
        btnToggle.classList.remove('btn-on-toggle')
    }
    if(el.classList.contains('btn-five')) {
        cardToggleFive.classList.toggle('card-one-toggle')
        cardToggleSix.classList.remove('card-one-toggle')
        cardToggleFour.classList.remove('card-one-toggle')
        cardToggleThree.classList.remove('card-one-toggle')
        cardToggleTwo.classList.remove('card-one-toggle')
        cardToggle.classList.remove('card-one-toggle')
    }
    

    // Card Dúvida 6

    if(el.classList.contains('btn-six')) {
        degSix.classList.toggle('deg45-six')
        degFive.classList.remove('deg45-five')
        degFour.classList.remove('deg45-four')
        degThree.classList.remove('deg45-three')
        degTwo.classList.remove('deg45-two')
        degOne.classList.remove('deg45-one')
    }
    if(el.classList.contains('btn-six')) {
        btnToggleSix.classList.toggle('btn-one-toggle')
        btnToggleFive.classList.remove('btn-on-toggle')
        btnToggleFour.classList.remove('btn-on-toggle')
        btnToggleThree.classList.remove('btn-on-toggle')
        btnToggleTwo.classList.remove('btn-on-toggle')
        btnToggle.classList.remove('btn-on-toggle')
    }
    if(el.classList.contains('btn-five')) {
        cardToggleSix.classList.toggle('card-one-toggle')
        cardToggleFive.classList.remove('card-one-toggle')
        cardToggleFour.classList.remove('card-one-toggle')
        cardToggleThree.classList.remove('card-one-toggle')
        cardToggleTwo.classList.remove('card-one-toggle')
        cardToggle.classList.remove('card-one-toggle')
    }

})
