'use strict';

function main() {


  let subscribe = document.querySelectorAll('.subscribe');

  subscribe.forEach((e) => {
    e.addEventListener('click', () => {
      document.getElementById('pricing').scrollIntoView();
    })
  })

}


window.addEventListener('load', main);