$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var word = $("#putInpay").val();
    // var word = word + "ay";
    var letters = word.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    var letters2 = letters.slice(0);
    var ending=[];

    for (i = 0; i < letters.length; i++) {
      if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
        break
      }
      else if (letters[i] === "q" && letters[i+1]==="u") {
        ending.push(letters[i]);
        ending.push(letters[i+1]);
        letters2.splice(0,2);
      }
      else {
        ending.push(letters[i])
        letters2.splice(0,1);
      }
    }
    ending.push("a","y");

    // var ending = (ending[0]).toUpperCase();
    var ending = ending.join("");
    // var ending = ending.toUpper();

    var pigLatin = letters2.join("") + ending;
    $("#pigLatinOutput").append("<p>" + pigLatin + "</p>");




    //
    //
    //   if (break){
    //       break
    //     }
    //     else{
    //     for (j = 0; j < vowels.length; j++) {
    //       if (letters[j] === vowels[i]) {
    //         letters.split(i)
    //         alert("yay");
    //         break;
    //       }
    //       else {
    //         ending.push(letters[i])
    //       }
    //     }
    //   }
    // }

    console.log(ending);
    console.log(letters2);
    console.log(ending);
    console.log(pigLatin);


  });
});
