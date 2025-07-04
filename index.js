var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let km = parseInt(lines[0]);
let l = parseFloat(lines[1]);

function calculo(km, l) {
    return km / l;
}

let media = calculo(km, l);

console.log(media.toFixed(3) + " km/l");