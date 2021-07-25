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
     // A place to hold the results for displaying
     let resultHTML = "";

     // Run through a list using a for loop, add them together and display on the screen.
     for (var i = 0; i < distinctEvents.length; i++) {

         resultHTML += `<a class= "dropdown-item" onclick= "getEvents(this)" data-string= "${distinctEvents[i]}" > ${distinctEvents[i]}</a>`;

     }
     resultHTML += linkHTMLend;
     eventDD.innerHTML = resultHTML;
     displayStats();
     displayData();
 }

 // Function to display stats for Total, Average, Most, Least Attended for a particular city once it's selected

 //Function chooses event to display the stats
 function getEvents(element) {
     let city = element.getAttribute("data-string");
     //reset to get events in filtered events
     filteredEvents = events;
     document.getElementById("statsHeader").innerHTML = `Stats for ${city} Events`;
     // display stats, if it's one of the cities not ALL.
     if (city != "All") {
         filteredEvents = events.filter(function (item) {
             // item == array of events, to filter the city
             if (item.city == city) {
                 return item;
             }
         })
     }
     displayStats();
 }

 // 
 function displayStats() {
     let total = 0;
     let average = 0;
     let most = 0;
     let least = -1;
     let currentAttendance = 0;

     // loops to help compare stats
     for (var i = 0; i < filteredEvents.length; i++) {
         currentAttendance = filteredEvents[i].attendance;
         total += currentAttendance;

         // determining which one is the most attendance
         if (most < currentAttendance) {
             most = currentAttendance;
         }

         // determine the least current attendance
         if (least > currentAttendance || least < 0) {
             least = currentAttendance;
         }
         average = total / filteredEvents.length;
         // toLocalString() -> provide comma deliniation
         document.getElementById("total").innerHTML = total.toLocaleString();
         document.getElementById("most").innerHTML = most.toLocaleString();
         document.getElementById("least").innerHTML = least.toLocaleString();
         document.getElementById("average").innerHTML = average.toLocaleString(undefined, {
             minimumFractionDigits: 0,
             maximumFractionDigits: 0
         });

     }
 }

 function displayData() {
     const template = document.getElementById("eventData-template");
     const eventBody = document.getElementById("eventBody");

     // Clears table before writing to it. 
     eventBody.innerHTML = "";

     // Allows us to store complex datasets in local storage -> up to 5 mgs
     // works like Cookies, but cookies only allows for "name, value, pairs"

     // If you cannot find anything, return Empty Array
     let curEvents = JSON.parse(localStorage.getItem("eventsArray")) || [];

     // Putting current items in (if emtpy or NULL)
     if (curEvents.length == 0) {
         curEvents = events;
         localStorage.setItem("eventsArray", JSON.stringify(curEvents));
     }

     //Using templates to complete
     for (var i = 0; i < curEvents.length; i++) {
         const eventRow = document.importNode(template.contentEditable, true);
         eventRow.getElementById("event").textContent = curEvents[i].event;
         eventRow.getElementById("city").textContent = curEvents[i].city;
         eventRow.getElementById("state").textContent = curEvents[i].state;
         eventRow.getElementById("attendance").textContent = curEvents[i].attendance;
         eventRow.getElementById("eventDate").textContent = new Data(curEvents[i].event).tolocaleDateString();
     }
     eventBody.appendChild(eventRow);
 }