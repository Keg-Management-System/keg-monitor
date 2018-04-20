import five from 'johnny-five';

const board = new five.Board();

let flow0Ticks = 0;
let flow1Ticks = 0;

board.on('ready', () => {
  console.log('Ready!');

  const flow0 = new five.Pin(2);
  const flow1 = new five.Pin(3);

  five.Pin.read(flow0, (error, value) => {
    if (value > 0) {
      flow0Ticks++;
      console.log(`flow0: ${flow0Ticks}`);
    }
  });

  five.Pin.read(flow1, (error, value) => {
    if (value > 0) {
      flow1Ticks++;
      console.log(`flow1: ${flow1Ticks}`);
    }
  });
});
