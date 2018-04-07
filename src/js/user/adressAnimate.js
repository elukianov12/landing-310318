$(document).ready(function() {
  $(".form__row-mini").hide()
  $("#deliveryHome").change(function() {
    if ($(this).is(":checked")) {
      $(".form__row-mini")
        .slideDown( 200 )
    }
  });
  $("#deliveryoffice").change(function() {
    if ($(this).is(":checked")) {
      $(".form__row-mini")
        .slideUp( 200 )
    }
  });
});
