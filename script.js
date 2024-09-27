const textInput = document.querySelector("#textInput");
const testBtn = document.querySelector("#testBtn");

function myFunction1(str) 
{
    let strUpper = str.toUpperCase();
    console.log(strUpper)
    return strUpper;
}


testBtn.addEventListener(
    "click", 
    function() {
    myFunction1(textInput.value)
    textInput.value = "";
})
