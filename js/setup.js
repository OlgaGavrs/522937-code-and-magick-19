'use strict';
(function () {
  var URL_SAVE = 'https://js.dump.academy/code-and-magick';

  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  var displayError = function (textError) {
    var element = document.createElement('div');
    element.style = 'z-index: 100; margin: 0px auto; text-align: center; background-color: red; position: absolute; left: 0px; right: 0px; font-size: 30px;';
    element.textContent = textError;
    document.querySelector('header').before(element);
  };

  form.addEventListener('submit', function (evt) {
    window.backend.load('POST', URL_SAVE, function () {
      userDialog.classList.add('hidden');
    }, displayError, new FormData(form));
    evt.preventDefault();
  });
})();
