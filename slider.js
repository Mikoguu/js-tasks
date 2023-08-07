const leftArrow = document.querySelector('#arrow-left');
const rightArrow = document.querySelector('#arrow-right');
const itemsList = document.querySelector('#items');


const loop = (direction , e) => {
  e.preventDefault();

  if (direction === 'right') {
    
    itemsList.appendChild(itemsList.firstElementChild);
  
  } else {
    
    itemsList.insertBefore(itemsList.lastElementChild, items.firstElementChild);
  }
}

rightArrow.addEventListener('click' , e => {
  loop('right' , e)
  
})


leftArrow.addEventListener('click' , e => {
  loop('left' , e)
 
})