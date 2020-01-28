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
var YOU = 'Вы';
var COLOR_TEXT = '#000';

var renderRect = function (ctx, x1, y1, x2, y2, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x1, y1, x2, y2);
};

var outputText = function (ctx, font, baseline, style, text, x, y) {
  ctx.font = font;
  ctx.textBaseline = baseline;
  ctx.fillStyle = style;
  ctx.fillText(text, x, y);
};

window.renderStatistics = function (ctx, names, times) {
  renderRect(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)');
  renderRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff');

  outputText(ctx, TEXT_HEIGHT + 'px PT Mono', 'hanging', COLOR_TEXT, 'Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + GAP);
  outputText(ctx, TEXT_HEIGHT + 'px PT Mono', 'hanging', COLOR_TEXT, 'Список результатов:', CLOUD_X + GAP, CLOUD_Y + 2 * GAP);

  var values = names.map(function (val, i) {
    return {name: val, time: times[i]};
  }).sort(function (a, b) {
    return b.time - a.time;
  });

  var maxTime = values[0].time;

  var renderBar = function (i) {
    var time = Math.floor(values[i].time);
    var BAR_HEIGHT = (MAX_BAR_HEIGHT * values[i].time) / maxTime;
    var BAR_WIDTH_GAP = BAR_WIDTH + BAR_GAP;
    var BAR_Y = CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP / 2 - BAR_HEIGHT;
    var colorBar;

    outputText(ctx, TEXT_HEIGHT + 'px PT Mono', 'alphabetic', COLOR_TEXT, values[i].name, CLOUD_X + 2 * GAP + BAR_WIDTH_GAP * i, CLOUD_Y + CLOUD_HEIGHT - GAP);

    if (values[i].name === YOU) {
      colorBar = 'rgba(255, 0, 0, 1)';
    } else {
      var Saturation = Math.round(Math.random() * 100);
      colorBar = 'hsl(240, ' + Saturation + '%, 50%)';
    }
    renderRect(ctx, CLOUD_X + 2 * GAP + BAR_WIDTH_GAP * i, BAR_Y, BAR_WIDTH, BAR_HEIGHT, colorBar);

    outputText(ctx, TEXT_HEIGHT + 'px PT Mono', 'alphabetic', COLOR_TEXT, time, CLOUD_X + 2 * GAP + BAR_WIDTH_GAP * i, BAR_Y - GAP / 2);
  };

  names.forEach(function (el, i) {
    renderBar(i);
  });
};
