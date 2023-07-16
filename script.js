
function generateHex(){
const displayHex= document.getElementById("div")
const valueDisplay = document.getElementById("hex-value")
const hexDigits = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'
  ];
const randomHexDigits = [];

    for(i=0; i<6; i++  ){
        let rnd = Math.floor(Math.random() * hexDigits.length)
        const randomHexDigit = hexDigits[rnd];
        randomHexDigits.push(randomHexDigit)
            
     }
     const joinedValue = randomHexDigits.join('')
     console.log(joinedValue)
   displayHex.style.backgroundColor = "#" + joinedValue
   valueDisplay.innerText = "#"+joinedValue
  }