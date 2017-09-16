const screen1 = document.querySelector('#screen1');
const screen2 = document.querySelector('#screen2');
const elementList = document.querySelectorAll('.digit');
const operatorList = document.querySelectorAll('.arithmetic');
const equalButton = document.querySelector('#numEql');
const clearAllButton = document.querySelector('#clearAll');
const parentheses = document.querySelectorAll('.special');
const deleteButton = document.querySelector('#delete');
const infoButton = document.querySelector('#info-mark');
const infoPanel = document.querySelector('#info-panel');
const specialLink = document.querySelector('#special-link')

let operatorBoolean = false;

operatorList.forEach((e) => {
  e.addEventListener('click', (event) => {
    if (screen1.innerHTML.length >= 25) {
      screen1.innerHTML += '';
    } else if (screen1.innerHTML.length === 0) {
      if (e.id === 'numMinus'){
        screen1.innerHTML += '-';
      }
    } else {
      if (operatorBoolean) {
        screen1.innerHTML += event.target.innerHTML;
        operatorBoolean = !operatorBoolean;
      } else {
        screen1.innerHTML += '';
      }
    }
  })
})

parentheses.forEach((e) => {
  e.addEventListener('click', (event) => {
    if (screen1.innerHTML.length >= 25) {
      screen1.innerHTML += '';
    } else {
      screen1.innerHTML += event.target.innerHTML;
    }
  })
})

elementList.forEach((e) => {
  e.addEventListener('click', (event) => {
      if (screen1.innerHTML.length >= 25) {
        screen1.innerHTML += '';
      } else {
        screen1.innerHTML += event.target.innerHTML;
        if (!operatorBoolean) {operatorBoolean = !operatorBoolean;}
      }
  })
})


deleteButton.addEventListener('click', (event) => {
  if (screen1.innerHTML.charAt(screen1.innerHTML.length - 1) !== '/' ||
      screen1.innerHTML.charAt(screen1.innerHTML.length - 1) !== '*' ||
      screen1.innerHTML.charAt(screen1.innerHTML.length - 1) !== '-' ||
      screen1.innerHTML.charAt(screen1.innerHTML.length - 1) !== '+' ||
      screen1.innerHTML.charAt(screen1.innerHTML.length - 1) !== '.' && 
      screen1.innerHTML.charAt(screen1.innerHTML.length - 2) === '/' ||
      screen1.innerHTML.charAt(screen1.innerHTML.length - 2) === '*' ||
      screen1.innerHTML.charAt(screen1.innerHTML.length - 2) === '-' ||
      screen1.innerHTML.charAt(screen1.innerHTML.length - 2) === '+' ||
      screen1.innerHTML.charAt(screen1.innerHTML.length - 2) === '.' ) {
        screen1.innerHTML = screen1.innerHTML.slice(0, -1);
        operatorBoolean = false;
      } else if (screen1.innerHTML.charAt(screen1.innerHTML.length - 1) === '/' ||
                  screen1.innerHTML.charAt(screen1.innerHTML.length - 1) === '*' ||
                  screen1.innerHTML.charAt(screen1.innerHTML.length - 1) === '-' ||
                  screen1.innerHTML.charAt(screen1.innerHTML.length - 1) === '+' ||
                  screen1.innerHTML.charAt(screen1.innerHTML.length - 1) === '.' && 
                  screen1.innerHTML.charAt(screen1.innerHTML.length - 2) !== '/' ||
                  screen1.innerHTML.charAt(screen1.innerHTML.length - 2) !== '*' ||
                  screen1.innerHTML.charAt(screen1.innerHTML.length - 2) !== '-' ||
                  screen1.innerHTML.charAt(screen1.innerHTML.length - 2) !== '+' ||
                  screen1.innerHTML.charAt(screen1.innerHTML.length - 2) !== '.' ) {
                    screen1.innerHTML = screen1.innerHTML.slice(0, -1);
                    operatorBoolean = true;
                } else {
                  screen1.innerHTML = screen1.innerHTML.slice(0, -1);
                }
})

screen1.addEventListener('click', (event) => {
  screen1.innerHTML = '';
  operatorBoolean = !operatorBoolean;
})


equalButton.addEventListener('click', (event) => {
  if (eval(screen1.innerHTML) === undefined) {
    screen2.innerHTML = 'INPUT ERROR';
  } else {
    screen2.innerHTML = eval(screen1.innerHTML);
  }
})

clearAllButton.addEventListener('click', (event) => {
  screen1.innerHTML = '';
  screen2.innerHTML = '';
  operatorBoolean = false;
})

const infoButtonAnimation = [
  { fill: '#CBC0D3' },
  { fill: '#FF6B6B' }   
];
const infoButtonAnimationReverse = [
  { fill: '#FF6B6B' },
  { fill: '#CBC0D3' }   
];

const infoPanelAnimation = [
  { opacity: '0' },
  { opacity: '1' }   
];
const infoPanelAnimationReverse = [
  { opacity: '1' },
  { opacity: '0' }   
];

let visibility = false;
infoButton.addEventListener('click', (event) => {
    
    if (!visibility){
      infoButton.animate(infoButtonAnimation, { fill: 'forwards', easing: 'steps(4, end)', duration: 500 })
      infoPanel.animate(infoPanelAnimation, { fill: 'forwards', easing: 'steps(4, end)', duration: 500 })
      specialLink.style.pointerEvents = 'auto';
      visibility = !visibility;
    } else if (visibility) {
      infoButton.animate(infoButtonAnimationReverse, { fill: 'forwards', easing: 'steps(4, end)', duration: 500 })
      infoPanel.animate(infoPanelAnimationReverse, { fill: 'forwards', easing: 'steps(4, end)', duration: 500 })
      specialLink.style.pointerEvents = 'none';
      visibility = !visibility;
    }
})