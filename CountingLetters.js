var input = "howh areyY you"

function countLetters (letters) {
    var small= input.replace(/\s/gi,"").toLowerCase();

  var obj = { }

    for (let i = 0; i < small.length; i++) {
        if (!obj.hasOwnProperty(small[i])) {
            obj[small[i]] = 1;
}
        else  {
              obj[small[i]] = obj[small[i]] +1;


              }
    }
    return obj;
  }



console.log(countLetters(input));
