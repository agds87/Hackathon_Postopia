'use strict';

function main() {
  let subscribe = document.querySelectorAll('.subscribe');

  subscribe.forEach((e) => {
    e.addEventListener('click', () => {
      document.getElementById('pricing').scrollIntoView();
    })
  })



}

var myNav = document.getElementById('mynav');

window.onscroll = () => { 
    if (window.scrollY >= 50 ) {
      myNav.classList.add("nav-colored");
      myNav.classList.remove("nav-transparent");
    } 
    else {
      
      myNav.classList.add("nav-transparent");
      myNav.classList.remove("nav-colored");
    }
};


window.addEventListener('load', main);