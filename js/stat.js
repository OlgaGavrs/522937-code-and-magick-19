'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 20;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = TEXT_HEIGHT + 'px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + 2 * GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    var time = Math.floor(times[i]);
    var BAR_HEIGHT = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(names[i], CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var Saturation = Math.round(Math.random() * 100);
      ctx.fillStyle = 'hsl(240, ' + Saturation + '%, 50%)';
    }
    ctx.fillRect(CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP / 2 - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
    ctx.fillStyle = '#000';
    ctx.fillText(time, CLOUD_X + 2 * GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP / 2 - BAR_HEIGHT - GAP / 2);
  }
};
