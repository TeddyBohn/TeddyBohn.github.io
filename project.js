const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "https://upload.wikimedia.org/wikipedia/commons/a/ab/Firefox_Nightly_logo%2C_2017.svg") {
    myImage.setAttribute("src", "images/firefox2.jfif");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
