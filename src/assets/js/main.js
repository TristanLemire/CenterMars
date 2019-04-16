let cursor = document.querySelector("#cursor");
window.addEventListener("scroll", () => {
  let y = window.pageYOffset;
  var height = document.height !== undefined ? document.height : document.body.offsetHeight;
  let calc = 1 - (y * 2) / height;
  let doit = 100 * (1 - calc);
  cursor.style.top = doit + "%";
});
