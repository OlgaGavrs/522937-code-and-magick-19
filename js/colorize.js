'use strict';
(function () {
  var getRandomColor = function (arrColors) {
    return arrColors[Math.floor(Math.random() * arrColors.length)];
  };

  window.colorize = function (element, colors, inputName) {
    element.addEventListener('click', function () {
      var color = getRandomColor(colors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      document.querySelector('[name = ' + inputName + ']').value = color;
    });
  };

  // window.colorize = {
  //   coloring: function (element, colors, inputName) {
  //     element.addEventListener('click', function () {
  //       var color = getRandomColor(colors);
  //       if (element.tagName.toLowerCase() === 'div') {
  //         element.style.backgroundColor = color;
  //       } else {
  //         element.style.fill = color;
  //       }
  //       document.querySelector('[name = ' + inputName + ']').value = color;
  //     });
  //   },
  //   color: function (colors) {
  //     return getRandomColor(colors);
  //   }
  // };
})();
