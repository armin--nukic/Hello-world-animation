document.addEventListener("DOMContentLoaded", function () {
  const movingBox = document.querySelector(".moving-box");

  // Function to animate the box and text
  function moveBox() {
    const marginTopValue = window.getComputedStyle(movingBox).marginTop;
    const marginTop = parseInt(marginTopValue);

    // Move the box up and down
    if (marginTop === 20) {
      movingBox.style.marginTop = "50px";
      movingBox.style.transform = "rotate(45deg)";
    } else {
      movingBox.style.marginTop = "20px";
      movingBox.style.transform = "rotate(0deg)";
    }
  }

  // Set interval to call the animation function every 2 seconds
  setInterval(moveBox, 2000);
});
