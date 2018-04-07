$(document).ready(function () {
    //подключение социальных кнопок
    var options = {
      //настраиваем кнопки
      services: ["vkontakte", "facebook", "twitter", "odnoklassniki"],
      id: "social-buttons",
      counter: true,
      components: ["icon", "text", "count"],
      theme: "color"
    };
  
    if ($("div").is("#social-buttons")) {
      //проверяем наличие элемента на странице
      new SocialButtons(options); //вставляем кнопки
    }
});