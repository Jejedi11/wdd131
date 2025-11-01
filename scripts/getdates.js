const year = document.querySelector("#current-year");

const today = new Date();

if (year) {
    year.innerHTML = `<span class="current-year">${today.getFullYear()}</span>`;
}



const populated = document.querySelector("#last-populated");

if (populated) {
    populated.innerHTML = `Last modified: <span class="last-populated">${document.lastModified}</span>`;
}
