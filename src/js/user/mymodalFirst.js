$(document).ready(function () {
  $('#firstModal').hide();
  $('.button__form_second').click(function (e) { 
    e.preventDefault();
    $('#firstModal').modal()
  });
});