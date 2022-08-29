document.addEventListener("DOMContentLoaded", () => {
  // function myFunction() {
  //   var dots = document.getElementById("dots");
  //   var moreText = document.getElementById("more");
  //   var btnText = document.getElementById("myBtn");

  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Read more";
  //     moreText.style.display = "none";
  //   } else {
  //     dots.style.display = "none";
  //     btnText.innerHTML = "Read less";
  //     moreText.style.display = "inline";
  //   }
  // }

  // const dots = document.getElementsByClassName("Accordion");
  // const moreText = document.getElementsByClassName("moreText");

  // dots.addEventListener(click, () => {
  //   if (
  //     dots.innerText === "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  //   ) {
  //     dots.innerText = "Blue";
  //   } else {
  //     dots.innerText = "Blueee";
  //   }
  // });
  // dots.addEventListener(hover, () => {
  //   dots.innerText("loremlorem");
  // });

  function myFunction(e) {
    e.currentTarget.nextElementSibling.classList.toggle("Panel--open");
  }
  const accordionButtons = document.getElementsByClassName("Accordion");

  for (let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener("click", (e) => myFunction(e));
  }

  function burgerMenu(e) {
    console.log(e);
    e.currentTarget.nextElementSibling.classList.toggle("NavHtml--open");
  }
  const burger = document.getElementsByClassName("ButtonActive");
  burger[0].addEventListener("click", (e) => burgerMenu(e));
});
