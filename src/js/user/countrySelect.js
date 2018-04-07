$(document).ready(function() {
  //подключение выбора стран на инпут
  $("#citizenship").countrySelect({
    defaultCountry: "kz",
    preferredCountries: ["cz", "ru", "gb", "de", "kz"],
    responsiveDropdown: true
  });
});
