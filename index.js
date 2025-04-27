const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const diameterEL = document.getElementById("diameter-el")
const areaEL = document.getElementById("area-el")
const inchEL = document.getElementById("inch-el")

convertBtn.addEventListener("click", function() {
    if (numberInput.value.trim() === "00" || numberInput.value.trim() ===  "2/0"){
        diameterEL.innerHTML = `${numberInput.value} AWG = 10.4048 mm`
        areaEL.innerHTML = `${numberInput.value} AWG = 85.0294 mm<sup>2</sup>`
        inchEL.innerHTML = `${numberInput.value} AWG = 0.4096<sup>in</sup>` 
    }
    else if(numberInput.value.trim() === "000" || numberInput.value.trim() ===  "3/0"){
        diameterEL.innerHTML = `${numberInput.value.trim()} AWG = 11.6840 mm`
        areaEL.innerHTML = `${numberInput.value.trim()} AWG = 107.2193 mm<sup>2</sup>`
        inchEL.innerHTML = `${numberInput.value.trim()} AWG = 0.4600<sup>in</sup>` 
    }
    else if(numberInput.value.trim() === "0000" || numberInput.value.trim() ===  "4/0"){
        diameterEL.innerHTML = `${numberInput.value} AWG = 13.1198 mm`
        areaEL.innerHTML = `${numberInput.value} AWG = 135.1908 mm<sup>2</sup>`
        inchEL.innerHTML = `${numberInput.value} AWG = 0.5165<sup>in</sup>` 
    }
    else{    
    let number = parseFloat(numberInput.value);
    if (isNaN(number) || numberInput.value.trim() === "") {
        alert("Insert a valid number!");
        return;
    }
    awgToDiameter(number);
    awgToArea(number);
    mmToInches(number, awgToDiameter(number));
}});


function awgToDiameter(n){
    let awgToD = 0.127 * 92 ** ((36 - n) / 39)
    diameterEL.innerHTML = `${n} AWG = ${awgToD.toFixed(4)} mm`    
}


function awgToArea(n) {
    let awgToA =  0.012668 * 92 ** ((36 - n) / 19.5)
    areaEL.innerHTML = `${n} AWG = ${awgToA.toFixed(4)} mm<sup>2</sup>`
  }


function mmToInches(n) {
    mmToIn = (0.127 * 92 ** ((36 - n) / 39)) / 25.4;
    inchEL.innerHTML = `${n} AWG = ${mmToIn.toFixed(4)}<sup>in</sup>`
  }  
  
