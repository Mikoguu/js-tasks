const leftArrow = document.querySelector('#arrow-left');
const rightArrow = document.querySelector('#arrow-right');
const itemsList = document.querySelector('#items');
const computedStyles = getComputedStyle(itemsList);
const items = document.querySelectorAll('.item');

const itemWidht = getComputedStyle(items[0]).width;
const step = parseInt(itemWidht);
const preDisplayeditems = 300 / step;
const minRight = 0;
const maxRight = (items.length - preDisplayeditems) * step;

let currentRight = 0;

itemsList.style.right = currentRight;



rightArrow.addEventListener('click' , e => {
  e.preventDefault();

  let currentRight = parseInt(computedStyles.right);

  if (currentRight < maxRight) {

    currentRight += step;

    itemsList.style.right = `${currentRight}px`;
  
}

})

leftArrow.addEventListener('click' , e => {
  e.preventDefault();

  let currentRight = parseInt(computedStyles.right);

  if (currentRight !== minRight) {

    currentRight -= step;

    itemsList.style.right = `${currentRight}px`;
  
}
})
