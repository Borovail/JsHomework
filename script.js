document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("colorForm");
  const palette = document.getElementById("palette");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let newColor = form.newColor.value;
    
    // If RGB fields are filled, override the color picker value
    const red = form.red.value;
    const green = form.green.value;
    const blue = form.blue.value;
    
    if (red && green && blue) {
      newColor = `rgb(${red}, ${green}, ${blue})`;
    }
    
    const colorBox = document.createElement("div");
    colorBox.className = "colorBox";
    colorBox.style.backgroundColor = newColor;
    
    const rgbInfo = document.createElement("span");
    rgbInfo.className = "rgbInfo";
    rgbInfo.textContent = newColor;
    
    colorBox.appendChild(rgbInfo);
    palette.appendChild(colorBox);
  });
});
