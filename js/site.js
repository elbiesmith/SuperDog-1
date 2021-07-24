 // including functions 
let events = [{
        event: 'ComicCon',
        city: 'New York',
        state: 'New York',
        attendance: 240000,
        date: "06/01/2017"
    },
    {
        event: 'ComicCon',
        city: 'New York',
        state: 'New York',
        attendance: 250000,
        date: "06/01/2018"
    },
    {
        event: 'ComicCon',
        city: 'New York',
        state: 'New York',
        attendance: 2570000,
        date: "06/01/2019"
    },
    {
        event: 'ComicCon',
        city: 'San Diego',
        state: 'California',
        attendance: 130000,
        date: "06/01/2017"
    },
    {
        event: 'ComicCon',
        city: 'San Diego',
        state: 'California',
        attendance: 140000,
        date: "06/01/2018"
    },
    {
        event: 'ComicCon',
        city: 'San Diego',
        state: 'California',
        attendance: 150000,
        date: "06/01/2019"
    },
    {
        event: 'ComicCon',
        city: 'Charlotte',
        state: 'North Carolina',
        attendance: 40000,
        date: "06/01/2017"
    },
    {
        event: 'ComicCon',
        city: 'Charlotte',
        state: 'North Carolina',
        attendance: 45000,
        date: "06/01/2018"
    },
    {
        event: 'ComicCon',
        city: 'Charlotte',
        state: 'North Carolina',
        attendance: 50000,
        date: "06/01/2019"
    },

];

localStorage.setItem('eventsArray', JSON.stringify(events));
// the default display for all events by specific cities
var filteredEvents = events;

// get a dropdown of specific cities
function buildDropDown() {
    let eventDD = document.getElementById("eventDropDown");

    //Distinct events from an array of objects that only looks at city
    curEvent = JSON.parse(localStorage.getItem('eventsArray'));
    let distinctEvents = [...new Set(curEvent.map(events => events.city))];

    let linkHTMLend = `<div class = "dropdown-divider"> </div><a class="dropdown-item" onclick="getEvents(this)"data-string="All">All</a >`
    let resultHTML = "";

    for (var i; i < distinctEvents.length; i++) {
        resultHTML += `<a class= "dropdown-item" onclick= "getEvents(this)" data-string= "${distinctEvents[i]}" > $(distinctEvents[i])</a>`;

    }
    resultHTML += linkHTMLend;
    eventDD.innerHTML = resultHTML;
}