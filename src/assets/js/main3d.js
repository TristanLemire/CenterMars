let run = document.getElementById('run');
let page3d = document.getElementById('page3d');
let reserver = document.getElementById('reserver');
run.addEventListener('click', function(){
  page3d.classList.toggle('is-view');
  reserver.classList.toggle('not-hidden');
  console.log('coucou');
})
