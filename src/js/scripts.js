$(document).ready(function () {
  $("#citizenship").countrySelect({
    defaultCountry: "kz",
    preferredCountries: ['cz', 'ru', 'gb', 'de', 'kz'],
    responsiveDropdown: true
  });
});