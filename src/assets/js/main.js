let header = document.querySelector("header");
let headerButton = document.querySelector("header li:nth-child(4)");
let h2 = document.querySelector("#h2");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 754) {
    header.classList.add("is-visible");
    headerButton.classList.add("is-white");
  } else {
    header.classList.remove("is-visible");
    headerButton.classList.remove("is-white");
  }
  if (window.pageYOffset > 280) {
    h2.classList.add("is-translating");
  }
});
<<<<<<< HEAD
import Rellax from "rellax";
var rellax = new Rellax(".rellax");
=======
import Rellax from 'rellax';
var rellax = new Rellax('.rellax');

let caseElementsTest = document.querySelectorAll('.is-hidden');
console.log(caseElementsTest);
let elementsArray = [];
for ( let i = 1; i < caseElementsTest.length + 1; i++ ) {
    let caseElement = caseElementsTest[i];
    i < 10 ? elementsArray.push(`element-0${i}`) : elementsArray.push(`element-${i}`);
}

elementsArray.forEach( ( id ) => {
let element = document.getElementById( id );
let waypoint = new Waypoint({
    element: element,
    handler: function( direction ) {
    element.classList.add( 'is-visible2' );
    },
    offset: '70%'
});
});
>>>>>>> cdb932fc25a73a3b45323b24092a237784b1180f
