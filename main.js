'use strict';

function main () {
  let subscribe = document.getElementsByClassName('subscribe');

  function scroll(){
    document.getElementById('pricing').scrollIntoView();
  }

  subscribe.forEach((e) => {
    e.addEventListener('click', scroll); 
  })
  

}




window.addEventListener('load', main);