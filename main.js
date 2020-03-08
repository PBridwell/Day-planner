// Get current date and time from Moment 
var currentDay= moment().format("dddd, MMMM Do YYYY");

// Display current time in proper HTML
$('#currentDay').text(currentDay);

// Get current time with moment
var currentHour = moment().format("k:mm")
console.log(currentHour);