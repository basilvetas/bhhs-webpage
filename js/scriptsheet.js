/********************************************************************************
* On Document Load
*********************************************************************************/
$(document).ready(function() {

  /*
  * Updates footer date (year)
  * Note: this script must come after the script that loads the footer
  */
  var currentDate = new Date();
  var year = currentDate.getFullYear();
  document.getElementById("current-date").innerHTML = year;

  /*
  * Creates homepage image slider
  * Credit to: bit.ly/1nWtDz8 
  */
  $("#slideshow div:gt(0)").hide();
  
  setInterval(function() { 
    $('#slideshow div:first')
      .fadeOut(1500)
      .next()
      .fadeIn(1500)
      .end()
      .appendTo('#slideshow');
  },  4000);

}); 
/********************************************************************************
* END On Document Load
*********************************************************************************/
