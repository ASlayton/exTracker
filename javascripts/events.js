const search = require('./search');

const bindEvents = () => {
  $('#search-input').keypress(function (e) {
    if (e.which === 13) {
      search.searchFunction();
    };
  });

  $('#dawn-btn').on('click', dawnFilter);
  $('#midday-btn').on('click', middayFilter);
  $('#dusk-btn').on('click', duskFilter);
  $('#dark-btn').on('click', darkFilter);
};

const dawnFilter = () => {
  console.log('Dawn button pressed');
  $('.Dawn').show();
  $('.Dusk').hide();
  $('.Midday').hide();
  $('.Dark').hide();
};

const middayFilter = () => {
  console.log('Midday button pressed');
  $('.Dawn').hide();
  $('.Dusk').hide();
  $('.Midday').show();
  $('.Dark').hide();
};

const duskFilter = () => {
  console.log('Dusk button pressed');
  $('.Dawn').hide();
  $('.Dusk').show();
  $('.Midday').hide();
  $('.Dark').hide();
};

const darkFilter = () => {
  console.log('Dark button pressed');
  $('.Dawn').hide();
  $('.Dusk').hide();
  $('.Midday').hide();
  $('.Dark').show();
};

module.exports = {
  bindEvents,
};
