$(document).ready(function () {  
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  
  //creating an on click event listener
  $(".saveBtn").on("click", function(){
      var time = $(this).parent().attr("id")
      var value = $(this).siblings(".description").val()

      localStorage.setItem(time, value)
  });
 
  
  function updateTheHour (){
      var currentHour = dayjs().hour()

      $(".time-block").each(function(){
            var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);

            if (timeBlockHour < currentHour){
                  $(this).addClass("past")
            } else if (timeBlockHour === currentHour){
                  $(this).removeClass("past")
                  $(this).addClass("present")
            } else if (timeBlockHour > currentHour){
                  $(this).removeClass("past")
                  $(this).removeClass("present")
                  $(this).addClass("future")
            }
      })};
        
      updateTheHour();

      setInterval(updateTheHour, 15000);

      $("#hour-09 .description").val(localStorage.getItem("hour-09"));
      $("#hour-10 .description").val(localStorage.getItem("hour-10"));
      $("#hour-11 .description").val(localStorage.getItem("hour-11"));
      $("#hour-12 .description").val(localStorage.getItem("hour-12"));
      $("#hour-13 .description").val(localStorage.getItem("hour-13"));
      $("#hour-14 .description").val(localStorage.getItem("hour-14"));
      $("#hour-15 .description").val(localStorage.getItem("hour-15"));
      $("#hour-16 .description").val(localStorage.getItem("hour-16"));
      $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});

