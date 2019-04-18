let run = document.getElementById('run');
let page3d = document.getElementById('page3d');
let reserver = document.getElementById('reserver');
run.addEventListener('click', function(){
  page3d.classList.toggle('is-view');
  reserver.classList.toggle('not-hidden');
  console.log('coucou');
})

let header = document.querySelector("header");
let headerButton = document.querySelector("header li:nth-child(4)");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 754) {
    header.classList.add("is-visible");
    headerButton.classList.add("is-white");
  } else {
    header.classList.remove("is-visible");
    headerButton.classList.remove("is-white");
  }
});
