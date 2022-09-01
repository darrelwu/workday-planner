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

)}