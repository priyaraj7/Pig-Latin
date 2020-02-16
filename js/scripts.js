$(document).ready(function() {
  $("form.puzzle").submit(function(event) {
    //debugger;
    event.preventDefault();

    let inputSentence = $("#sentence").val();

    let result = inputSentence
      .split(" ")
      .map(function(word) {
        return pigLatinWord(word);
      })
      .join(" ");
    $("#result")
      .empty()
      .text(result);
  });
});

function pigLatinWord(inputSentence) {
  let inputSplit = inputSentence.split("");
  let suffix = [];
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let way = inputSplit[0].concat("way");
  if (vowels.includes(inputSplit[0])) {
    let prefix = inputSplit.slice(1);
    prefix = prefix.concat(way);
    return prefix.join("");
  } else {
    for (var i = 0; i < inputSplit.length; i++) {
      if (vowels.includes(inputSplit[i])) {
        break;
      }
      suffix.push(inputSplit[i]);
      if (
        i + 1 < inputSplit.length &&
        inputSplit[i] === "q" &&
        inputSplit[i + 1] === "u"
      ) {
        suffix.push(inputSplit[i + 1]);
        i = i + 1;
      }
    }

    prefix = inputSplit.slice(i);
    prefix = prefix.concat(suffix);
    prefix.push("ay");
    return prefix.join("");
  }
}
