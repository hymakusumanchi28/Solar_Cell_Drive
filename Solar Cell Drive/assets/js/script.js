let checkBoxes = document.getElementsByClassName("checkbox1");

let yearCard1 = document.getElementById("yearCard1");
let yearCard2 = document.getElementById("yearCard2");
let yearCard3 = document.getElementById("yearCard3");

for (let i = 0; i < checkBoxes.length; i++) {
  checkBoxes[i].addEventListener("change", () => {
    if (checkBoxes[i].checked == true) {
      let boxValue = checkBoxes[i].value;
      if (boxValue == "checkbox1") {
        yearCard1.style.display = "block";
      } else if (boxValue == "checkbox2") {
        yearCard2.style.display = "block";
      } else {
        yearCard3.style.display = "block";
      }
    } else {
      let boxValue = checkBoxes[i].value;
      if (boxValue == "checkbox1") {
        yearCard1.style.display = "none";
      } else if (boxValue == "checkbox2") {
        yearCard2.style.display = "none";
      } else {
        yearCard3.style.display = "none";
      }
    }
  });
}

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let yearCards = document.querySelectorAll(".yearCard");
for (let index = 0; index < yearCards.length; index++) {
  const yearCard = yearCards[index];
  const num = yearCard.id.substring(yearCard.id.length - 1, yearCard.id.length);

  let select = document.getElementById("yearCardSelect" + num);
  let inputsDiv = document.getElementById("yearCardInputs" + num);
  let calculateButton = document.getElementById("yearCardCalculate" + num);
  let resetButton = document.getElementById("yearCardReset" + num);
  select.addEventListener("change", () => {
    inputsDiv.style.display = "block";
    calculateButton.style.display = "block";
    resetButton.style.display = "block";

    let selectValue = select.value;

    let spans = document.querySelectorAll("#yearCardInputs" + num + " span");
    let inputs = document.querySelectorAll("#yearCardInputs" + num + " input");

    let inputValue = 0;

    for (let spanIndex = 0; spanIndex < spans.length; spanIndex++) {
      const span = spans[spanIndex];
      span.innerHTML = months[selectValue++];
    }

    for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
      const input = inputs[inputIndex];
      input.value = 0;

      input.addEventListener("change", (e) => {
        inputValue = e.target.value;
        for (let newIndex = 0; newIndex < inputs.length; newIndex++) {
          const Input = inputs[newIndex];
          Input.disabled = true;
        }
        e.target.disabled = false;
      });
    }

    calculateButton.addEventListener("click", (e) => {
      for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
        const input = inputs[inputIndex];
        if (input.value == 0) {
          input.value = getRandomIntInclusive(
            parseInt(inputValue) - 100,
            parseInt(inputValue) + 100
          );
          input.disabled = false;
        }
      }
    });

    resetButton.addEventListener("click", (e) => {
      for (let inputIndex = 0; inputIndex < inputs.length; inputIndex++) {
        const input = inputs[inputIndex];
        input.value = 0;
        input.disabled = false;
      }
    });
  });
}

function getRandomIntInclusive(min, max) {
  console.log(min);
  console.log(max);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
