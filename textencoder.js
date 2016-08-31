$(document).ready(function() {

  $("#input").on('input', function() {
    $("#output").val(encode($(this).val()));
  })

  /*

  ALPHABET ENCODER

   */

  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var alphabetReversed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"].reverse();


  function encode(inputString) {
  // Empty string to store our answer
  var answer = "";

    // for-loop to iterate over each character in the message
    for (var i = 0; i < inputString.length; i++) {

      // gather the letter and convert to lowercase
      var letter = inputString[i].toLowerCase();

      // if the letter is a space, add a space to the answer

      if (letter === " ") {
          answer = answer + " ";

        // if the letter doesn't exists in the alphabet array
        // pass it through.. symbols like $ % & * etc.

        } else if ($.inArray(letter, alphabet) === -1) {
          answer = answer + letter;

        // else the letter exists in both arrays
        // so find the index position of the letter
        // then get the letter from the reversed
        // alphabet and add it to the answer

        } else {
          var position = alphabet.indexOf(letter);
          answer = answer + alphabetReversed[position];
        }
      }

  //when everything above is complete, return the answer

  return answer;
}

});
