$(document).ready(function () {
  $("#citizenship").countrySelect({
    defaultCountry: "cz",
    preferredCountries: ['cz', 'ru', 'gb', 'de'],
    responsiveDropdown: true
  });
});