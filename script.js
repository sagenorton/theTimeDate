// Check JS is Connected
console.log('Clock is Ready to Go!');

//The Clock App DEFINITION
const theClockApp = () => {
  
    // Get Stuff
    //Time Data
    const theDateNow = new Date();
    const hours = theDateNow.getHours();
    const minutes = theDateNow.getMinutes();
    const seconds = theDateNow.getSeconds();
    //const AmOrPm = theDateNow.getAmOrPm();
    
    //The HTML Elements
    const theHours = document.querySelector('.hours');
    const theMinutes = document.querySelector('.minutes');
    const theSeconds = document.querySelector('.seconds');  
    const AmOrPm = document.querySelector('.AmOrPm');
      
    //Format Stuff
    //Get AM or PM
    const theAmOrPm = theHours >= 12 ? "AM" : "PM";
    console.log( theAmOrPm );
    
    // Set Stuff
    theHours.textContent = hours;
    theMinutes.textContent = minutes;
    theSeconds.textContent = seconds;
    AmOrPm.textContent = theAmOrPm;
      
    };
    
    //Run Clock App
    setInterval( theClockApp , 1000 );
    
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
    