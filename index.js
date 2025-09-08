// Write your solution here!
// 1. Initial array
const cats = ["Milo", "Otis", "Garfield"];

// 2. Destructive functions
function destructivelyAppendCat(name) {
  cats.push(name); // adds to end
}

function destructivelyPrependCat(name) {
  cats.unshift(name); // adds to start
}

function destructivelyRemoveLastCat() {
  cats.pop(); // removes last
}

function destructivelyRemoveFirstCat() {
  cats.shift(); // removes first
}

// 3. Non-destructive functions
function appendCat(name) {
  return [...cats, name]; // new array with extra cat at end
}

function prependCat(name) {
  return [name, ...cats]; // new array with extra cat at start
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1); // everything except last
}

function removeFirstCat() {
  return cats.slice(1); // everything except first
}

// export if needed for tests
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
