
function getResult() {
    let sentenceInput = document.getElementById("enterSentence").value;
    let letterInput = document.getElementById("enterLetter").value;

    let resultData = document.getElementById("showResult");

    let [key, ...rest] = sentenceInput.split(letterInput);
    let value = rest.join(letterInput)
    
    if (value === "") {
        alert("The letter does not exist in the sentence")
    }

    resultData.innerHTML = value;

}