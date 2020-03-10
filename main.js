// Get current date and time from Moment 
var currentDay= moment().format("dddd, MMMM Do YYYY");

// Display current time in proper HTML
$('#currentDay').text(currentDay);


// Get current hour from moment and set to 12 hour format 

var nowHour = moment().format('h');
console.log(nowHour);


//Sets array for hour blocks
planTextArr = new Array(9);
// test for initial array 
 planTextArr[4] = "Picnic lunch outside";
  

  console.log("full array of plned text",planTextArr); 


// set planner container as a variable

var plannerContainer = $('.plannerContainer')


// build calendar by row for fix set of hours
for (var hour = 9; hour <= 17; hour++) {
    // less 9 so 9am is index[0]
    // dynamically build planner row
    var index = hour - 9;
    var rowEl = $('<div>');
    rowEl.addClass('row');
    rowEl.addClass('plannerRow');
    rowEl.attr('current-hour', hour);
    rowEl.addClass('time-block');
    console.log(rowEl);
    console.log(hour);
    console.log(index);
    
    // build time box portion of row 
    var timeDiv = $('<div>');
    timeDiv.addClass('col-md-2');
    timeDiv.addClass('hour');

    var timeBox = $('<span>');
    // timeBox.addClass('hour');
    timeBox.addClass('time-block');


    // format hours to display. To be used later in color function 

    var displayHours = 0;
    var ampm = "";
    if (hour > 12){
        displayHours = hour -12;
        ampm = "pm";
    } else {
        displayHours = hour;
        ampm = "am";
    }

    timeBox.text(`${displayHours} ${ampm}`);
    console.log(timeBox);

    rowEl.append(timeDiv);
    timeDiv.append(timeBox);
    console.log(timeDiv);
    console.log(rowEl);
    // Time block built 

    // build 'textarea' input 

    var dailyItem = $('<textarea>');

    dailyItem.attr('id',`input-${index}`);
    dailyItem.attr('current-hour',index);
    dailyItem.attr('type','text');
    dailyItem.attr('class','dailyItem');
    dailyItem.addClass('col-md-9');
    console.log(dailyItem.attr('id'));


    dailyItem.val(planTextArr[index]);

    // adds textarea to row div 
    rowEl.append(dailyItem);


    // build button portion 
    
    var saveDiv = $('<div>');
    saveDiv.addClass('col-md-1');
    var saveBtn = $('<input type="button" value="Save" />');
    saveBtn.addClass('saveBtn');
    saveBtn.attr('id',`saveid-${index}`);
    saveBtn.attr('save-id',index);
    console.log(saveBtn.attr('save-id'));

    // Append button to div and div to Row element
    rowEl.append(saveDiv);
    saveDiv.append(saveBtn);
    console.log(nowHour);

    // Set past present future color based on time 
     rowColor();

    // Add generated rows to planner container 

    plannerContainer.append(rowEl);

};
rowColor();

    // Define rowColor function

    function rowColor(hour){
        if (hour < nowHour) {
            console.log('less than');
            rowEl.addClass('past');
        }
    };



    // Save and store text input 

    $('.saveBtn').on('click', function(event) {
        event.preventDefault();
        
        var index = $(this).attr('save-id');
        console.log(index);

        var inputId = '#input-'+ index;
        var value = $(inputId).val();
        console.log(value);

        planTextArr[index] = value;

         console.log('value ', value); 
          console.log('index ', index); 
         console.log('click pta after '+ planTextArr); 
    });