$(document).ready(function () {
  $("#citizenship").countrySelect({
    defaultCountry: "kz",
    preferredCountries: ['cz', 'ru', 'gb', 'de', 'kz'],
    responsiveDropdown: true
  });

  var options = {
    services: ['vkontakte', 'facebook', 'twitter', 'odnoklassniki'],
    id: 'social-buttons',
    counter: true,
    components: ['icon','text','count'],
    theme: 'color'
}
  new SocialButtons(options);

});