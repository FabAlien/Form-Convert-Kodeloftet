function burgerFunction() {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    x.className += ' responsive';
  } else {
    x.className = 'navbar';
  }
}

function unitConverter1(event) {
  event.preventDefault();
  
  const unitInput1 = parseFloat(document.querySelector("#unitInput1").value);

  let result1 = document.querySelector("#result1");
  const preliminary1 = unitInput1 * 3.28084;

  result1.textContent = preliminary1.toFixed(2);
}


document.addEventListener("DOMContentLoaded", () => {
  const convertButton1 = document.querySelector("#convertButton1");
  convertButton1.addEventListener("click", unitConverter1);
});

////

function unitConverter2(event) {
  event.preventDefault();
  
  const unitInput2 = parseFloat(document.querySelector("#unitInput2").value);

  let result2 = document.querySelector("#result2");
  const preliminary2 = unitInput2 * 2.20462;

  result2.textContent = preliminary2.toFixed(2);
}


document.addEventListener("DOMContentLoaded", () => {
  const convertButton2 = document.querySelector("#convertButton2");
  convertButton2.addEventListener("click", unitConverter2);
});

///

function unitConverter3(event) {
  event.preventDefault();
  
  const unitInput3 = parseFloat(document.querySelector("#unitInput3").value);

  let result3 = document.querySelector("#result3");
  const preliminary3 = unitInput3 * 0.264172;

  result3.textContent = preliminary3.toFixed(2);
}


document.addEventListener("DOMContentLoaded", () => {
  const convertButton3 = document.querySelector("#convertButton3");
  convertButton3.addEventListener("click", unitConverter3);
});