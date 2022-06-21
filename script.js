'use strict';

const progress = document.querySelector('.progress');
const circles = document.querySelectorAll('.circle');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

let movement = 1;
next.addEventListener('click', function () {
  movement++;

  if (movement > circles.length) {
    movement = circles.length;
  }
  update();
});

prev.addEventListener('click', function () {
  movement--;

  if (movement < 1) {
    movement = 1;
  }
  update();
});

const update = function () {
  circles.forEach(function (circle, i) {
    if (i < movement) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  console.log(actives.length, circles.length);

  const move = ((actives.length - 1) / (circles.length - 1)) * 100;

  progress.style.width = `${move}%`;

  if (movement === 1) {
    prev.disabled = true;
  } else if (movement === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
