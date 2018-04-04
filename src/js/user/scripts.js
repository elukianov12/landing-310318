$(document).ready(function () {
  //подключение выбора стран на инпут
  $("#citizenship").countrySelect({
    defaultCountry: "kz",
    preferredCountries: ['cz', 'ru', 'gb', 'de', 'kz'],
    responsiveDropdown: true
  });
//подключение социальных кнопок
  var options = { //настраиваем кнопки
    services: ['vkontakte', 'facebook', 'twitter', 'odnoklassniki'],
    id: 'social-buttons',
    counter: true,
    components: ['icon','text','count'],
    theme: 'color'
  }

  if ($("div").is("#social-buttons")) { //проверяем наличие элемента на странице
    new SocialButtons(options); //вставляем кнопки
  }  

  $('a').smoothScroll() //включаем плавный скролл всем ссылкам

});