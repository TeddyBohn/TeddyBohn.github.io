const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.jfif");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
