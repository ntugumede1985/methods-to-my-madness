function slice(string, start = 0, end = string.length) {
  const newStr = '';
  //const string = str[i];
  for (let i = start; i < end; i++) {
    //slice.push()
  }
  return newStr;
}

function repeat(str, repetitions) {
  if(repetitions < 0) 
    return "";
  if(repetitions === 1) 
    return str;
  else 
    return str + repeat(str, repetitions - 1);
  //const newStr = '';
  //for (let i = 0; i < str.length; i++)
    //if (repetitions > 0) {
      //return (str * repetitions)
    //}
  
  //return newStr;
}


function startsWith(string, substring) {
}

function endsWith(str, substring) {
}

function includes(arr, item) {
}

function join(arr, separator = '') {
}


function split(str, separator) {
}

function trimStart(str) {
}

function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
