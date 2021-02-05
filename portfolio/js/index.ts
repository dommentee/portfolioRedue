//mobile nav
//nav in header for toggle and display nav
const burgerMenue: any = document.querySelector('.uinav');
const nav: any = document.getElementsByClassName('mobile-nav');
const aboutLink: any = document.querySelector('.about-link');
const portfolioLink: any = document.querySelector('.portfolio-link');
const contactLink: any = document.querySelector('.contact-link');

function openNav() {
  if (nav[0].classList) {
    nav[0].classList.toggle('closeNav')

  }else {
    //IE9
    const classes = nav[0].className.split(" ");
    const i = classes.indexOf('closeNav');

    if (i >= 0)
      classes.splice(i, 1);
    else
      classes.push('closeNav');
      nav[0].className = classes.join(" ")
  }
  //nav[0].classList.toggle('closeNav')
  document.getElementById('barone').classList.toggle('disapear');
  document.getElementById('bartwo').classList.toggle('reverse');
  document.getElementById('barthree').classList.toggle('reversetwo');
};
burgerMenue.addEventListener('click', openNav);
aboutLink.addEventListener('click', openNav);
portfolioLink.addEventListener('click', openNav);
contactLink.addEventListener('click', openNav);

//infninite rotation of carousel

//inner hero varoables
const cursor: HTMLElement = document.getElementById('cursor');
//cursuer flicker
const flicker = () => {
  cursor.classList.toggle('flicker-out');
}
const curserFlicker = setInterval(flicker, 560);
//textnode
const newLineCharacter = '|';
const text = document.createTextNode('');
document.getElementById('greeting-wrap').appendChild(text);

const introWrap: any = document.getElementById('intro-wrap');
const showIntro = () => {
  introWrap.classList.add('show')
} 
const hideCursor = () => {
  cursor.classList.add('hide')
}

const printGreeting = (str) => {
  let i: any = 0;
  (function getLetters() {
    const char = str[i++];
    text.nodeValue += char == newLineCharacter ? '\n' : char;
    if (i < str.length) {
      setTimeout(getLetters, 68);
      introWrap.classList.add('hide')
    } else {
      setTimeout(hideCursor, 600)
      setTimeout(showIntro, 900)
    }
  })();
  
};
printGreeting
  ("Hello world, I'm Domacor Mentee.")
;

// printGreeting
//   ("Hello world, I'm Domacor Mentee. | I'm a Front-end front end Developer. ")
// ;





