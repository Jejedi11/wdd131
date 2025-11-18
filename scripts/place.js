const wind = 6;
const temp = 69;
const conditions = "Partly Cloudy";

function calculateWindChill(temp, wind) {
    let windChill = 35.74 + 0.6215 * temp - 35.75 * (wind ** 0.16) + 0.4275 * temp * (wind ** 0.16);
    return windChill;
}

const windField = document.querySelector("#wind");
const tempField = document.querySelector("#temp");
const conditionsField = document.querySelector("#conditions");
const windChillField = document.querySelector("#windchill");

windField.innerHTML = wind + " m/h";
tempField.innerHTML = temp + "°F";
conditionsField.innerHTML = conditions;

if (temp <= 50 && wind > 3){
    windChillField.innerHTML = Math.round(calculateWindChill(temp, wind) * 100) / 100 + "°F";
}
else windChillField.innerHTML = "N/A"