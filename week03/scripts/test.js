const fullname = function (first, last){
    return first + " " + last;
}

let firstName = 'Antonia';
let lastName = 'Francesca';

console.log(fullname(firstName, lastName));

const names = (first, last) => `${first} ${last}`

console.log(names(firstName, lastName))


let scores = [100, 72, 83, 94, 88, 87];
let accumulator = 0;
let count = 0;
scores.forEach(score => {
  if (score > 87) {
    accumulator += score;
    count ++;
  }
});
if ( count > 0 ) {
  console.log(accumulator/count); 
} else {
  console.log("No scores reported.");
}