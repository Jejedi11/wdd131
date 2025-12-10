class Event {
  constructor(name, people, date, details) {
    this.name = name;
    this.people = people;
    this.date = date;
    this.details = details;
  }
  MakeEvent() {
    const event = document.createElement("div");
    event.innerHTML = "<h3>" + this.name + "</h3><h4>" + this.date + "</h4><p>" + this.details + "</p><h4>" + this.people + "</h4>";
    document.querySelector('.events').appendChild(event);
  }
}

let day = new Date(2023, 6, 1, 12, 12, 12);
let annie = new Event("Annie Performance", "Adam", new Date(2025, 11, 11, 7, 0, 0).toString(), "Performing on the 11th-12th and 18th-20th");
let christmasEve = new Event("Christmas Eve", "Everyone", new Date(2025, 11, 24).toString(), "Merry Christmas!");
let christmas = new Event("Christmas Day", "Everyone", new Date(2025, 11, 25).toString(), "Merry Christmas!");
let newYears = new Event("New Years Day", "Everyone", new Date(2026, 1, 1).toString(), "Happy New Years!");
let events = [annie, christmas, christmasEve, newYears];

events.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

events.forEach((item) => {
  item.MakeEvent();
});


