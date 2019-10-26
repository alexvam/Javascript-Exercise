/**
* The following is the function where the solution shall be written
*/

function solution(input) {
  if (input.match(/^[a-zA-Z]+$/g)) {
    alert("The input does not contain a number");
    return;
  } else {
    (input=input.replace(/[^\d.]/g, ''))
    let letters = input.split(''),
      results = [
        [letters.shift()]
      ];
    while (letters.length) {
      const currLetter = letters.shift();
      let tmpResults = [];
      results.forEach(result => {
        let rIdx = 0;
        while (rIdx <= result.length) {
          const tmp = [...result];
          tmp.splice(rIdx, 0, currLetter);
          tmpResults.push(tmp);
          rIdx++;
        }
      })
      results = tmpResults;
    }
    return results
      .map(letterArray => letterArray.join(''))
      .filter((el, idx, self) => (self.indexOf(el) === idx))
      .sort(function(a, b) {
        return b - a
      });
  }
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
