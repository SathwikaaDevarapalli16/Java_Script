const textbox = document.getElementById("textbox");
const toFah = document.getElementById("toFah");
const tocel = document.getElementById("tocel");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFah.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "F";

    }
    else if(tocel.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = temp.toFixed(1) + "C   ";
    }
    else {
        result.textContent = "select a unit";
    }

}