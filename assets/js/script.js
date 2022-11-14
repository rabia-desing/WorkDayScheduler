// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage.
    $(".saveBtn").click(function (event) {
        var parentId = $(this).parent().attr("id"); //get parent id
        var getHour = parseInt(parentId.slice(5)); // split string to get hour
        var targetDay = dayjs().format('YYYY-MM-DD ' + getHour); // format date
        var targetHour = dayjs(targetDay); //make object
        var today = dayjs().format('YYYY-MM-DD H'); //get current time in 24hours format
        var difference = targetHour.diff(today, 'hour'); // if negative then time is in past.
        var task = document.querySelector('#' + parentId + ' textarea').value; //get input value
        localStorage.setItem(parentId, task); //store in local storage
    });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour.
    $('.time-block').each(function () {
        var parentId = $(this).attr("id"); //get block id
        var getHour = parseInt(parentId.slice(5)); // split string to get hour
        var targetDay = dayjs().format('YYYY-MM-DD ' + getHour); // format date
        var targetHour = dayjs(targetDay); //make object
        var today = dayjs().format('YYYY-MM-DD H'); //get current time in 24hours format
        var difference = targetHour.diff(today, 'hour'); // if negative then time is in past.
        console.log(difference)
        if (difference === 0) {
            $(this).addClass('present');
        }
        if (difference > 0) {
            $(this).addClass('future');
        }
        if (difference < 0) {
            $(this).addClass('past');
        }
    });
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    $('.time-block').each(function () {
        var parentId = $(this).attr("id"); //get block id
        var getHour = parseInt(parentId.slice(5)); // split string to get hour
        var targetDay = dayjs().format('YYYY-MM-DD ' + getHour); // format date
        var targetHour = dayjs(targetDay); //make object
        var today = dayjs().format('YYYY-MM-DD H'); //get current time in 24hours format
        var difference = targetHour.diff(today, 'hour'); // if negative then time is in past.
        var task = localStorage.getItem(parentId);
        if (task != null) {
            document.querySelector('#' + parentId + ' textarea').value = task;
        }

    });
    // TODO: Add code to display the current date in the header of the page.
    var time = dayjs().format('dddd,MMMM D') + 'th';
    $('#currentDay').text(time); //show current day on page top

});