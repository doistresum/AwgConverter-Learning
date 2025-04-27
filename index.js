const numberInput = document.getElementById("number-input")
const convertBtn = document.getElementById("convert-btn")
const diameterEL = document.getElementById("diameter-el")
const areaEL = document.getElementById("area-el")
const inchEL = document.getElementById("inch-el")

convertBtn.addEventListener("click", function() {
    if (numberInput.value.trim() === "00" || numberInput.value.trim() ===  "2/0"){
        diameterEL.innerHTML = `${numberInput.value} AWG = 9.2658 mm`
        areaEL.innerHTML = `${numberInput.value} AWG = 67.4309 mm<sup>2</sup>`
        inchEL.innerHTML = `${numberInput.value} AWG = 0.3648<sup>in</sup>`
        numberInput.value = ""
    }
    else if(numberInput.value.trim() === "000" || numberInput.value.trim() ===  "3/0"){
        diameterEL.innerHTML = `${numberInput.value.trim()} AWG = 10.4049 mm`
        areaEL.innerHTML = `${numberInput.value.trim()} AWG = 85.0288 mm<sup>2</sup>`
        inchEL.innerHTML = `${numberInput.value.trim()} AWG = 0.4096<sup>in</sup>`
        numberInput.value = ""
    }
    else if(numberInput.value.trim() === "0000" || numberInput.value.trim() ===  "4/0"){
        diameterEL.innerHTML = `${numberInput.value} AWG = 11.6840 mm`
        areaEL.innerHTML = `${numberInput.value} AWG = 107.2193 mm<sup>2</sup>`
        inchEL.innerHTML = `${numberInput.value} AWG = 0.4600<sup>in</sup>`
        numberInput.value = ""
    }
    else{    
    let number = parseFloat(numberInput.value)
    if (isNaN(number) || numberInput.value.trim() === "") {
        alert("Insert a valid number!")
        numberInput.value = ""
        return
    }
    awgToDiameter(number)
    awgToArea(number)
    mmToInches(number)
    numberInput.value = ""    
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
  
