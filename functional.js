let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//urlifying data
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}
//----------MAP ------------

//imperative urls
function imperativeUrls(elements) {
  urls = [];
  elements.forEach((element) => {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));
//functional urls
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));
//map excercise
function finalUrls(elements) {
  return elements.map(element => `https://example.com/ ${urlify(element)}`);
}
console.log(finalUrls(states));

//-----------FILTER ---------

//imperative singles
function imperativeSingles(elements) {
  singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1 ){
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

//functionalSingles
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1)
}
console.log(functionalSingles(states));

//excersise filter

function imperativefilter(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(imperativefilter(states));

//-----------REDUCE METHOD-------------
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//imperative sum
function imperativeSum(elements) {
  total = 0;
  elements.forEach(function(element){
    total += element;
  });
  return total;
  }
console.log(imperativeSum(a));

//functional sum
function functionalSum(elements) {
    return elements.reduce((total, element) => {return total += element}, 0);
}
console.log(functionalSum(a));

//imperativelengths
function imperativelengths(elements){
  len = {};
  elements.forEach(function(element){
    len[element] = element.length;
  });
  return len;
}
console.log(imperativelengths(states))

//functionallengths
function functionalLengths(elements) {
  return elements.reduce((len, element) => { len[element] = element.length; return len; }, {});
}
console.log(functionalLengths(states));

// let functionalLengths = states =>
// states.reduce((lengths, state) => lengths.set(state, state.length), new Map());

// excersise --- REDUCE
function functionalMultiply(numbers) {
  return numbers.reduce((mul, n) => {return mul *= n}, 1);
}
console.log(functionalMultiply(a));
