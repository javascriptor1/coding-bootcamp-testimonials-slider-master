"use strict";

// john data
const johnImage = document.querySelector('[src="images/image-john.jpg"]');
const johnQuote = document.querySelector(
  " .quote-div blockquote:nth-of-type(1)"
);
const johnDetailsDiv = document.querySelector(".quote-div div:nth-of-type(1)");
//Tanya data
const tanyaImage = document.querySelector('[src="images/image-tanya.jpg"]');
const tanyaQuote = document.querySelector(
  " .quote-div blockquote:nth-of-type(2)"
);
const tanyaDetailsDiv = document.querySelector(".quote-div div:nth-of-type(2)");
const leftArrow = document.querySelector('[src="images/icon-prev.svg"]');
const rightArrow = document.querySelector('[src="images/icon-next.svg"]');

rightArrow.addEventListener('click',slide)
leftArrow.addEventListener('click',slide)

function slide(){
    johnImage.classList.toggle('hide') 
    johnQuote.classList.toggle('hide') 
    johnDetailsDiv.classList.toggle('hide')

    tanyaImage.classList.toggle('hide') 
    tanyaQuote.classList.toggle('hide') 
    tanyaDetailsDiv.classList.toggle('hide') 
}