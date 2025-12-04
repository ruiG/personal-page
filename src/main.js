// this is client side
import confetti from 'canvas-confetti';

let count = 0;

var triangle = confetti.shapeFromPath({ path: 'M0 10 L5 0 L10 10z' });
var pineapple = confetti.shapeFromText({ text: '🍍', scalar: 1.5 });
var pizza = confetti.shapeFromText({ text: '🍕', scalar: 1.5 });

document.getElementById('confetti').addEventListener('click', () => {
  count++;
  if (count === 5) {
    count = 0;
    setTimeout(() => {
      confetti({
        angle: 270,
        particleCount: 50,
        spread: 100,
        ticks: 500,
        origin: { y: -0.25 },
        scalar: 1.5,
        shapes: ['square', triangle, pineapple, pizza],
        colors: ['#3b82f6', '#1d4ed8', '#ffffff'],
        disableForReducedMotion: true,
      });
    }, 200);
  }
});

document.getElementById('date').textContent = new Date().getFullYear();