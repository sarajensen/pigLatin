$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();
    var word = $("#putInpay").val();
    // var word = word + "ay";
    var letters = word.split("");
    var ending=[];
    var vowels = ["a", "e", "i", "o", "u"];
    var letters2 = letters.slice(0);
    for (i = 0; i < letters.length; i++) {
      if (letters[i] === "a" || letters[i] === "e" || letters[i] === "i" || letters[i] === "o" || letters[i] === "u") {
        break
      }
      else {
        ending.push(letters[i])
        letters2.splice(i,1);
      }
    }
    ending.push("a","y");




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


    console.log(letters2);
    console.log(letters);
    console.log(vowels);
    console.log(ending);
    console.log(word);

  });
});
