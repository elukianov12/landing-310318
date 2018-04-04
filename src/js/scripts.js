$(document).ready(function () {
  //подключение выбора стран на инпут
  $("#citizenship").countrySelect({
    defaultCountry: "kz",
    preferredCountries: ['cz', 'ru', 'gb', 'de', 'kz'],
    responsiveDropdown: true
  });
//подключение социальных кнопок
  var options = {
    services: ['vkontakte', 'facebook', 'twitter', 'odnoklassniki'],
    id: 'social-buttons',
    counter: true,
    components: ['icon','text','count'],
    theme: 'color'
}
  new SocialButtons(options);

});