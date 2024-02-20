addEventListener("DOMContentLoaded", (event) => {
  console.log(`DOM loaded!`);
  document.body.style.backgroundColor = localStorage.getItem("bgColor");
});

let darkModeBtn = document.querySelector(".darkmode-btn");

let defaultColorBG = "#f5eec2";
let darkModeColorBG = "#000000";
let colorVar;

//check, if darkmode is set and activate it, if not set and save it to localstorage
darkModeBtn.addEventListener("click", function (e) {
  if (!localStorage.getItem("bgColor")) {
    colorVar = defaultColorBG;
    document.body.style.backgroundColor = colorVar;
  } else {
    colorVar = localStorage.getItem("bgColor");
  }

  if (colorVar === darkModeColorBG) {
    colorVar = defaultColorBG;
    document.body.style.backgroundColor = colorVar;
    localStorage.setItem("bgColor", colorVar);
  } else {
    colorVar = darkModeColorBG;
    document.body.style.backgroundColor = colorVar;
    localStorage.setItem("bgColor", colorVar);
  }
});
