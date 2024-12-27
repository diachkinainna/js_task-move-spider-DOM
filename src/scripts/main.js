'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallPosition = wall.getBoundingClientRect();
  let topPosition = e.clientY - wallPosition.top - spider.clientHeight / 2;
  let leftPosition = e.clientX - wallPosition.left - spider.clientWidth / 2;

  leftPosition = Math.max(
    0,
    Math.min(leftPosition, wall.clientWidth - spider.clientWidth),
  );

  topPosition = Math.max(
    0,
    Math.min(topPosition, wall.clientHeight - spider.clientHeight),
  );

  spider.style.top = `${topPosition - 10}px`;
  spider.style.left = `${leftPosition - 10}px`;
});
