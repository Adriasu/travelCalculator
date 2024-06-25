const section = document.createElement("section");
const form = document.createElement("form");
const labelCity = document.createElement("label");
const selectCity = document.createElement("select");
const optionBarcelona = document.createElement("option");
const optionMadrid = document.createElement("option");
const optionSevilla = document.createElement("option");
const optionValencia = document.createElement("option");
const labelNumNights = document.createElement("label");
const inputNumNights = document.createElement("input");
const labelNumDaysCar = document.createElement("label");
const inputNumDayCar = document.createElement("input");
const inputCosting = document.createElement("input");
const textResult = document.createElement("p");

document.querySelector("body").appendChild(section);

section.appendChild(form);
form.appendChild(labelCity);
form.appendChild(document.createElement("br"));
form.appendChild(selectCity);
selectCity.appendChild(optionBarcelona);
selectCity.appendChild(optionMadrid);
selectCity.appendChild(optionSevilla);
selectCity.appendChild(optionValencia);
form.appendChild(document.createElement("br"));
form.appendChild(labelNumNights);
form.appendChild(document.createElement("br"));
form.appendChild(inputNumNights);
form.appendChild(document.createElement("br"));
form.appendChild(labelNumDaysCar);
form.appendChild(document.createElement("br"));
form.appendChild(inputNumDayCar);
form.appendChild(document.createElement("br"));
form.appendChild(inputCosting);
form.appendChild(document.createElement("br"));
form.appendChild(textResult);

labelCity.innerHTML = "Ciudad:";
labelCity.setAttribute("for", "cities");
selectCity.name = "cities";
selectCity.id = "cities";
optionBarcelona.value = "Barcelona";
optionMadrid.value = "Madrid";
optionSevilla.value = "Sevilla";
optionValencia.value = "Valencia";
optionBarcelona.innerHTML = "Barcelona";
optionMadrid.innerHTML = "Madrid";
optionSevilla.innerHTML = "Sevilla";
optionValencia.innerHTML = "Valencia";

labelNumNights.innerHTML = "Número de noches:";
labelNumNights.setAttribute("for", "nights");
inputNumNights.type = "number";
inputNumNights.id = "nights";
inputNumNights.name = "nights";

labelNumDaysCar.innerHTML = "Número de días de alquiler del coche:";
labelNumDaysCar.setAttribute("for", "numDaysCar");
inputNumDayCar.type = "number";
inputNumDayCar.id = "numDaysCar";
inputNumDayCar.name = "numDaysCar";

inputCosting.type = "submit";
inputCosting.innerHTML = "Calcular coste";
textResult.innerHTML = "Coste: 0€";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const result = {
    city: event.target.cities.value,
    numNights: event.target.nights.value,
    numDaysCar: event.target.numDaysCar.value,
  };
  const hotelCost = () => {
    return result.numNights * 140;
  };
  const airCost = () => {
    let price;
    if (result.city === "Barcelona" || result.city === "Madrid") {
      price = 90;
    } else if (result.city === "Sevilla") {
      price = 50;
    } else {
      price = 40;
    }
    if (result.numNights >= 3) {
      price -= price / 10;
    }
    return price;
  };
  const carCost = () => {
    let price = result.numDaysCar * 40;

    if (result.numDaysCar === "") {
      price = 0;
    } else if (result.numDaysCar >= 3 || result.numDaysCar < 7) {
      price -= 20;
    } else if (result.numDaysCar >= 7) {
      price -= 50;
    }
    return price;
  };
  const totalCost = hotelCost() + airCost() + carCost();
  textResult.innerHTML = `Coste: ${totalCost}€`;
});
