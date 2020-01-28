'use strict';
var COUNT_WIZARD = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomIndex = function (maxIndex) {
  return Math.floor(Math.random() * maxIndex);
};

var names = [];
for (var i = 0; i < COUNT_WIZARD; i++) {
  names[i] = firstNames[getRandomIndex(firstNames.length)] + ' ' + secondNames[getRandomIndex(secondNames.length)];
}

var wizards = names.map(function (val) {
  return {
    name: val,
    coatColor: coatColors[getRandomIndex(coatColors.length)],
    eyesColor: eyesColors[getRandomIndex(eyesColors.length)]
  };
});

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

wizards.forEach(function (obj, index) {
  fragment.appendChild(renderWizard(wizards[index]));
});

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
