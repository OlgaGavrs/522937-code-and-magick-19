'use strict';
(function () {
  var getRandomColor = function (arrColors) {
    return arrColors[Math.floor(Math.random() * arrColors.length)];
  };

  window.color = function (colors) {
    return getRandomColor(colors);
  };
})();
