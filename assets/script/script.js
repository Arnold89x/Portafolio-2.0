const logo = document.querySelector('.nav__logo');

logo.addEventListener('animationend',(e)=>{
  if(e.animationName === 'afuera'){
    logo.style.animation = 'vida 2s ease-in-out 0s 1 forwards';

  }
})

logo.addEventListener('mouseenter',()=>{
  logo.style.animation = 'scan 2s ease-in 0s infinite';
})

logo.addEventListener('mouseleave',()=>{
  logo.style.animation = 'vida 2s ease-in-out 0s 1 forwards';
})
