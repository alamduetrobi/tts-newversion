// ================================ Pich level script ======================

(function ($) {
  'use strict';
})(jQuery);

var sheet = document.createElement('style'),
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {
  var curVal = el.value,
    val = (curVal - 1) * 16.666666667,
    style = '';

  // Set active label
  $('.range-labels-pich li').removeClass('active selected');

  var curLabel = $('.range-labels-pich').find('li:nth-child(' + curVal + ')');

  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');

  return style;
};

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels-pich li').on('click', function () {
  var index = $(this).index();

  $rangeInput.val(index + 1).trigger('input');
});

// ================================button tab movement script ================================
