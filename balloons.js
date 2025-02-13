document.addEventListener("DOMContentLoaded", function () {
  //random animation on load
  const attentionSeekers = [
    "animate__bounce",
    "animate__flash",
    "animate__pulse",
    "animate__rubberBand",
    "animate__shakeX",
    "animate__shakeY",
    "animate__headShake",
    "animate__swing",
    "animate__tada",
    "animate__wobble",
    "animate__jello",
    "animate__heartBeat",
  ];

  let greetingAnimation = attentionSeekers[Math.floor(Math.random() * 11)];
  let greetingBanner = document.getElementById("greeting");

  greetingBanner.classList.add(greetingAnimation);

  // calendar
  const elem = document.getElementById("dob");
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: "MM-dd",
  });

  // uncheck all boxes by default (Firefox)
  document
    .querySelectorAll(".form-check-input")
    .forEach((c) => (c.checked = false));

  // event listener for check/uncheck
  document
    .getElementById("checkbox-card")
    .addEventListener("change", function (e) {
      if (e.target.classList.contains("form-check-input")) {
        const elem = document.getElementById(e.target.id + "Img");
        elem.style.visibility = "visible";
        elem.classList.remove(
          "animate__animated",
          "animate__bounceInDown",
          "animate__bounceOutUp"
        );
        e.target.checked
          ? elem.classList.add("animate__animated", "animate__bounceInDown")
          : elem.classList.add("animate__animated", "animate__bounceOutUp");
      }
    });

  // ===== Show toast when submitted without checking a box =====
  let submitButton = document.getElementById("submit");
  
  let checkBoxCard = document.getElementById("checkbox-card");
  let checkBoxInputs = checkBoxCard.getElementsByTagName("input");

  console.log(checkBoxInputs);


  // TOAST event listener
  document.getElementById("submit").onclick = function() {
    if (Array.from(checkBoxInputs).some(input => input.checked) == false) {
      var toastElList = [].slice.call(document.querySelectorAll('.toast'))
      var toastList = toastElList.map(function(toastEl) {
        return new bootstrap.Toast(toastEl)
      })
      toastList.forEach(toast => toast.show())
    }
  }

  // Check/Uncheck all
  document.getElementById("check-all").addEventListener("change", function (e) {
    const isChecked = e.target.checked;
    document.querySelectorAll(".form-check-input").forEach((c) => {
      c.checked = isChecked;
      const elem = document.getElementById(c.id + "Img");
      if (elem) {
        elem.style.visibility = "visible";
        elem.classList.remove(
          "animate__animated",
          "animate__bounceInDown",
          "animate__bounceOutUp"
        );
        isChecked
          ? elem.classList.add("animate__animated", "animate__bounceInDown")
          : elem.classList.add("animate__animated", "animate__bounceOutUp");
      }
    });
  });

  // Mouseover color changing
  document.querySelectorAll("#checkbox-card label").forEach((label) => {
    label.addEventListener("mouseover", function () {
      const color = label.getAttribute("data-color");
      document.getElementById("greeting").style.color = color;
    });

    label.addEventListener("mouseout", function () {
      document.getElementById("greeting").style.color = ""; // Reset to default color
    });
  });





});
