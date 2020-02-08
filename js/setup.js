'use strict';
var COUNT_WIZARD = 4;
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var userDialog = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var secondNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();

var getRandomIndex = function (maxIndex) {
  return Math.floor(Math.random() * maxIndex);
};

var getArrayNames = function (arr1, arr2) {
  var arr = [];
  for (var i = 0; i < COUNT_WIZARD; i++) {
    arr.push(arr1[getRandomIndex(arr1.length)] + ' ' + arr2[getRandomIndex(arr2.length)]);
  }
  return arr;
};

var getWizard = function (val) {
  return {
    name: val,
    coatColor: coatColors[getRandomIndex(coatColors.length)],
    eyesColor: eyesColors[getRandomIndex(eyesColors.length)]
  };
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closeUserDialog();
  }
};

var openUserDialog = function () {
  userDialog.classList.remove('hidden');
  setupUserName.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });
  setupUserName.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });
  document.addEventListener('keydown', onPopupEscPress);
};

var closeUserDialog = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var wizards = getArrayNames(firstNames, secondNames).map(getWizard);

wizards.forEach(function (wizard) {
  fragment.appendChild(renderWizard(wizard));
});

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

setupOpen.addEventListener('click', function () {
  openUserDialog();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openUserDialog();
  }
});

setupClose.addEventListener('click', function () {
  closeUserDialog();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closeUserDialog();
  }
});

wizardCoat.addEventListener('click', function () {
  var coatColor = coatColors[getRandomIndex(coatColors.length)];
  wizardCoat.style.fill = coatColor;
  document.querySelector('[name="coat-color"]').value = coatColor;
});

wizardEyes.addEventListener('click', function () {
  var eyesColor = eyesColors[getRandomIndex(eyesColors.length)];
  wizardEyes.style.fill = eyesColor;
  document.querySelector('[name="eyes-color"]').value = eyesColor;
});

fireball.addEventListener('click', function () {
  var fireballColor = fireballColors[getRandomIndex(fireballColors.length)];
  fireball.style.background = fireballColor;
  fireball.querySelector('input').value = fireballColor;
});
