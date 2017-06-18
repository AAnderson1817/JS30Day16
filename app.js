const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200; //100 pixels

let randomhue = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + 0.7 + ')';
let randomhue2 = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + 0.7 + ')';
let randomhue3 = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + 0.7 + ')';
let randomhue4 = 'rgba(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + 0.7 + ')';

function shadow(e){
  //const width = hero.offsetWidth;
  //const height = hero.offsetHeight;
  //The below uses ES6 destructuring to achieve the same as above
  const { offsetWidth: width, offsetHeight: height} = hero;
  let { offsetX: x, offsetY: y } = e;
  //'this' is in the context of the shadow function attached to the hero div via an event listener. Therefore, 'this' is the div 'hero'.
  if(this !== e.target){
    //In order to accomodate for elements within the div, we need some code. When you hover in the top left corner of the window, for example, the coordinates might be something like (2,5), and increase as you went further down or to the right. When you hit the element 'Woah', however, the coordinates localize to that element. Hovering in the top left of the 'Woah' element should not read (0,0)-- it's not in the top left corner of the page! We need the coordinates to be accurate in the larger scope of the window. Therefore, we add however many pixels the element is currently offset by inside the document context. This is not the clearest explanation. In practice, this makes much more sense. Use a console.log to see.
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }
// If we have a Walk of 100, 50 is the highest we should go, and -50 is the lowest we should go. (We need a range of -50 <--> 50, not -100 <--> 100) We use .round to shorten our readout.
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  console.log(xWalk, yWalk);

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0 ${randomhue},
  ${xWalk * -1}px ${yWalk}px 0 ${randomhue2},
  ${yWalk}px ${xWalk * -1}px 0 ${randomhue3},
  ${yWalk * -1}px ${xWalk * -1}px 0 ${randomhue4}
  `;
}

hero.addEventListener('mousemove',shadow);
