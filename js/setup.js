'use strict';
(function () {
  var COUNT_WIZARD = 4;

  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');
  // var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
      .content
      .querySelector('.setup-similar-item');
  var fragment = document.createDocumentFragment();

  // var getRandomIndex = function (maxIndex) {
  //   return Math.floor(Math.random() * maxIndex);
  // };

  // var getArrayNames = function (arr1, arr2) {
  //   var arr = [];
  //   for (var i = 0; i < COUNT_WIZARD; i++) {
  //     arr.push(arr1[getRandomIndex(arr1.length)] + ' ' + arr2[getRandomIndex(arr2.length)]);
  //   }
  //   return arr;
  // };

  // var getWizard = function (val) {
  //   return {
  //     name: val,
  //     coatColor: window.colorize.color(coatColors),
  //     eyesColor: window.colorize.color(eyesColors)
  //   };
  // };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var displayError = function (textError) {
    var element = document.createElement('div');
    element.style = 'z-index: 100; margin: 0px auto; text-align: center; background-color: red; position: absolute; left: 0px; right: 0px; font-size: 30px;';
    element.textContent = textError;
    document.querySelector('header').before(element);
  };
  // var wizards = getArrayNames(firstNames, secondNames).map(getWizard);

  window.backend.load(function (wizards) {
    for (var i = 0; i < COUNT_WIZARD; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }, displayError);

  // wizards.forEach(function (wizard) {
  //   fragment.appendChild(renderWizard(wizard));
  // });

  // similarListElement.appendChild(fragment);

  // userDialog.querySelector('.setup-similar').classList.remove('hidden');

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  }, displayError);

  window.colorize(wizardCoat, coatColors, 'coat-color');
  window.colorize(wizardEyes, eyesColors, 'eyes-color');
  window.colorize(fireball, fireballColors, 'fireball-color');
})();
