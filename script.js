// runs the functions once the DOM is ready
$(document).ready(function () { 

    // using moment to set the time
    var current = moment().format("MMM Do, YYYY, h:mm:ss");
    $("#currentDay").text(current);
   
    // To display live clock using the timer interval
    function updateTime() {
        $('#currentDay').html(moment().format("MMM Do, YYYY, h:mm:ss"));
      }
      setInterval(updateTime, 1000);
    

    //jQuery 'addEventListener' to run function due to the save button
    $('.saveBtn').on('click', function() {
        // creates a text
        var text = $(this).siblings('.entry').val();
        var time = $(this).parent().attr('id');
    })
// saves the task input and timestamp into local storage
localStorage.setItem(time, task);
}
// gets items saved from local storage
$("#hour09 .entry").val(localStorage.getItem("hour09"));
$("#hour10 .entry").val(localStorage.getItem("hour10"));
$("#hour11 .entry").val(localStorage.getItem("hour11"));
$("#hour12 .entry").val(localStorage.getItem("hour12"));
$("#hour13 .entry").val(localStorage.getItem("hour13"));
$("#hour14 .entry").val(localStorage.getItem("hour14"));
$("#hour15 .entry").val(localStorage.getItem("hour15"));
$("#hour16 .entry").val(localStorage.getItem("hour16"));
$("#hour17 .entry").val(localStorage.getItem("hour17"));


})