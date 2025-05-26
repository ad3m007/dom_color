document.addEventListener('DOMContentLoaded', function() {
  var box = document.getElementById("color-box");
  var btn = document.getElementById("change-color-btn");

  btn.addEventListener("click", function () {
    var x = getRandomColor();
    box.style.backgroundColor = x;
  });       
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let colorx = '#';
  for (let i = 0; i < 6; i++) {
    colorx += letters[Math.floor(Math.random() * 16)];
  }
  return colorx;
}
