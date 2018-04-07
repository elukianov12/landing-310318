$(document).ready(function () {
  $('#secondModal').hide();
  $('.mymodal__button').click(function (e) { 
    e.preventDefault();
    $('#secondModal').modal()
  });
  $('#modalBack').click(function (e) { 
    e.preventDefault();
    $('#firstModal').modal()
  });
});