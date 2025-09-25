// Move the mouse across the screen as a sine wave.
const robot = require('@jitsi/robotjs');
const { sleep } = require('sleep');
const thread = require('sleep');

const Z = [
  { x: 0, y: 0 },
  { x: 1000, y: 0 },
  { x: 0, y: 1000 },
  { x: 1000, y: 1000 }
];

const secondsBetween = 5 * 60;

function sign() {
  const start = robot.getMousePos();

  for (let index = 0; index < Z.length; index++) {
    const coords = Z[index];
    if (index === Z.length - 1) {
      robot.moveMouse(start.x + coords.x, start.y + coords.y);
    } else {
      const next = Z[index + 1];
      const deltaX = (next.x - coords.x) / 10;
      const deltaY = (next.y - coords.y) / 10;

      for (let pad = 0; pad < 10; pad++) {
        robot.moveMouse(start.x + coords.x + deltaX * pad, start.y + coords.y + deltaY * pad);
        thread.msleep(100);
      }
    }
  }

  thread.msleep(1000);
  robot.moveMouse(start.x, start.y);
}

function until(hours) {
  const periods = (3600 / secondsBetween) * hours;
  for (let cpt = 0; cpt < periods; cpt++) {
    sign();
    sleep(secondsBetween);
  }
}

if (process.argv.length > 2) {
  until(process.argv[2]);
} else {
  until(5);
}
