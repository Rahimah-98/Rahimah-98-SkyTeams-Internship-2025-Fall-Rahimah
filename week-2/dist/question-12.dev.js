"use strict";

// Traffic Light System using switch-case
function trafficLight(color) {
  switch (color) {
    case 'Red':
      return 'Stop';

    case 'Yellow':
      return 'Caution';

    case 'Green':
      return 'Go';

    default:
      return 'Invalid operator';
  }
}

console.log(trafficLight('Red')); //Stop

console.log(trafficLight('Yellow')); //Yellow

console.log(trafficLight('Green')); //Caution
//# sourceMappingURL=question-12.dev.js.map
