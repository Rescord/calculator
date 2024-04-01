let a = ""; //Первое число
let b = ""; //Второе число
let sign = ""; //Производимая операция
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ","];
const action = ["+", "-", "x", "/"];
const out = document.querySelector(".сalculator__panel p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  return out.textContent = '0';
};
function negative(){
  if(a !== '' && b == ''){
    a = a * -1;
    return out.textContent = a;
  } else if(a !== '' && b !== ''){
    b = b * -1;
    return out.textContent = b;
  } else {
    return
  }
};
function resetLast(){
  if(a !== '' && b == ''){
    a = '0'
    return out.textContent = a ;
  };
  if(a !== '' && b !== ''){
    b.length = 0;
      return out.textContent = b;
  } else {
    return
  }
}
document.querySelector(".reset-all").onclick = clearAll;

document.querySelector(".сalculator__buttons__basic").onclick = (event) => {
  if (!event.target.classList.contains("btn__all")){ 
    return
  }; // Нажат не div с классом btn
  if (event.target.classList.contains("reset-all")){ 
    return out.textContent = "0"
  };
    // Нажата кнопка reset-all
  if(event.target.classList.contains("sign-change")){
    return negative();
  };
  if(event.target.classList.contains("reset-last")){
    console.log('test')
    return resetLast();
  };

  out.textContent = "0";
  const tap = event.target.textContent;
  if (digit.includes(tap)) {
    if (b === "" && sign === "") {
      if(a !== '0')
      a += tap;
      console.log(a, b, sign);
      out.textContent = a;
    } 
    else if (a !== "" && b !== "" && finish) {
      b = tap;
      finish = false;
      out.textContent = b;
    } 
    else {
      b += tap;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }
  if (action.includes(tap)) {
    sign = tap;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }
  if(tap === "="){
    switch (sign){
      case "x": 
        a = a * b;
        break;
      case "/":
        a = a / b;
        break;
      case "+":
        a = (+a) + (+b);
        break;
      case "-":
        a = a - b;
        break;
      case "":
        
        break;
    }
    finish = true;
    out.textContent = a;
  }
};
document.querySelector(".");

