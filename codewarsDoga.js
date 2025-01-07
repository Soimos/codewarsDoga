function getCount(str) {
  var vC = 0;
  var inp = str.split("");
  const vowels = ["a","e","i","o","u"];
  vowels.forEach(function(vowel) {
    inp.forEach(function(inpLetter)
                {
      if (inpLetter === vowel) {
        vC++;
      }
    }); });
  return vC;
}

function filter_list(l) {
  return l.filter(v => typeof v == "number")
}

function hasUniqueChars(str){
  return new Set(str).size === str.length;
}

function divisors(integer) {
  let arr = []
  for(let num = 2; num<integer; num++)
    {
      if(integer % num == 0)
        {arr.push(num);}
    }
  let r = arr.length !== 0 ? arr : `${integer} is prime`
  return r;
}
