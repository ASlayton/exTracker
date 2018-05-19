const search = require('./search');

const bindEvents = () => {
  $('#search-input').on('keypress', search);
  $('#dawn-btn').on('click', dawnFilter);
  $('#midday-btn').on('click', middayFilter);
  $('#dusk-btn').on('click', duskFilter);
  $('#dark-btn').on('click', darkFilter);
};

const dawnFilter = () => {
  $('.dawn').show;
  $('.midday').hide;
  $('.dusk').hide;
  $('.dark').hide;
};

const middayFilter = () => {
  $('.dawn').hide;
  $('.midday').show;
  $('.dusk').hide;
  $('.dark').hide;
};

const duskFilter = () => {
  $('.dawn').hide;
  $('.midday').hide;
  $('.dusk').show;
  $('.dark').hide;
};

const darkFilter = () => {
  $('.dawn').hide;
  $('.midday').hide;
  $('.dusk').hide;
  $('.dark').show;
};

module.exports = {
  bindEvents,
};
