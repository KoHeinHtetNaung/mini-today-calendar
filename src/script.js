const monthName = document.getElementById("monthName");
const dayName = document.getElementById("dayName");
const dayNumber = document.getElementById("dayNumber");
const year = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en", {
    month: "long"
})

// monthName.innerText = date.getMonth()

// const day = date.getDay()
dayName.innerText = date.toLocaleString("en", {
    weekday: "long"
})
// console.log(date.getFullYear())

dayNumber.innerHTML = date.getDate();

year.innerText = date.getFullYear();
