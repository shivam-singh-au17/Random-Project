
var names = ["shivam", "singh", "masai"];
var consonants = 0;
var vowels  = 0;
for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names[i].length; j++) {
        if (names[i][j] == "a" || names[i][j] == "e" || names[i][j] == "i" || names[i][j] == "o" || names[i][j] == "u") {
            vowels ++
        }
        else   if (names[i][j] != "a" || names[i][j] != "e" || names[i][j] != "i" || names[i][j] != "o" || names[i][j] != "u") {
            consonants ++
        }
    }
}
console.log("Total vowels is = " + vowels );
console.log("Total consonants is = " + consonants );