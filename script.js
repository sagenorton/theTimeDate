// Define the base font size
var baseFontSize = 20; // Adjust this to your default font size

// Define the array of colors
var colors = ['DarkTurquoise', 'PaleVioletRed', 'MediumPurple', 'MediumSeaGreen'];

// Initialize a variable to keep track of the current color index
var currentIndex = 0;
var lastMinuteChecked = -1;

// Function to update font size based on the current time
function updateFontSize() {
    var now = new Date();
    var currentMinute = now.getMinutes();

    // Update the font size only if the minute has changed
    if (currentMinute !== lastMinuteChecked) {
        var currentFontSize = baseFontSize + (currentMinute === 0 ? 0 : currentMinute);
        document.body.style.fontSize = currentFontSize + 'px';
        lastMinuteChecked = currentMinute;
    }
}

// Function to update background color every second
function updateBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}

// Set up the intervals
setInterval(updateFontSize, 1000); // Check and update font size every second
setInterval(updateBackgroundColor, 1000); // Update background color every second

// Initial update
updateFontSize();
updateBackgroundColor();





// The Clock App DEFINITION
const theClockApp = () => {
  
  // Get Time Data
  const theDateNow = new Date();
  let hours = theDateNow.getHours();
  const minutes = theDateNow.getMinutes();
  const seconds = theDateNow.getSeconds();

  // Get AM or PM and Convert to 12-hour Format
  const theAmOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

// Format Hours, Minutes, Seconds (without Leading Zero for Hours)
const formattedHours = hours; // No leading zero for hours
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Get The HTML Elements
  const theHours = document.querySelector('.hours');
  const theMinutes = document.querySelector('.minutes');
  const theSeconds = document.querySelector('.seconds');  
  const AmOrPm = document.querySelector('.AmOrPm');
  
  // Set Formatted Time
  theHours.textContent = formattedHours;
  theMinutes.textContent = formattedMinutes;
  theSeconds.textContent = formattedSeconds;
  AmOrPm.textContent = theAmOrPm;
};

// Run Clock App
setInterval(theClockApp, 1000);


/************
Static Data
************/
const allTheMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const allTheDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

/************
Dynamic Data
************/

// Get and store current date and time with `new Date()` object
const now = new Date();
// Check-Check: See all `Date()` methods and properties
console.log( now );
  
  
/************
Get the Data
************/ 
// Get current month
const gotMonth = now.getMonth();
// Get current day of the month
let gotDayOfMonth = now.getDate();
// Get current year
const gotYear = now.getFullYear();
// Get current day of the week
const gotDayOfWeek = now.getDay();
  
/************
Get the DOM Elements
************/ 
  
  // Get Time
 // const time = document.querySelector("time");
  
  // Get Month
  const month = document.querySelector('.month');
  
  // Get Day
  const dayOfMonth = document.querySelector('.dayOfMonth');
  
  // Get year
  const year = document.querySelector('.year');
  
  // Get day of week
  const dayOfWeek = document.querySelector('.dayOfWeek');
  
/************
Set the Data
************/ 
  
month.textContent = allTheMonths[gotMonth];

dayOfMonth.textContent = gotDayOfMonth;
  
year.textContent = gotYear;
  
dayOfWeek.textContent = allTheDays[gotDayOfWeek];
   