const search = require('./search');

const bindEvents = () => {
  $('#search-input').on('keypress', (e) => {
    if (e.which === 13) {
      search.searchFunction();
    };
  });
  $('#dawn-btn').on('click', dawnFilter);
  $('#midday-btn').on('click', middayFilter);
  $('#dusk-btn').on('click', duskFilter);
  $('#dark-btn').on('click', darkFilter);
  $('#reset-btn').on('click', resetBtn);
};

const resetBtn = () => {
  $('.location-card, .ex-card').show();
  $('#reset-btn').prop('disabled', true);
};

const dawnFilter = () => {
  console.log('here!');
  $('.Dawn').show();
  $('.Midday, .Dusk, .Dark').hide();
  $('#reset-btn').prop('disabled', false);
};

const middayFilter = () => {
  $('.Dawn, .Dusk, .Dark').hide();
  $('.Midday').show();
  $('#reset-btn').prop('disabled', false);
};

const duskFilter = () => {
  $('.Dawn, .Midday, .Dark').hide();
  $('.Dusk').show();
  $('#reset-btn').prop('disabled', false);
};

const darkFilter = () => {
  $('.Dawn, .Midday, .Dusk').hide();
  $('.Dark').show();
  $('#reset-btn').prop('disabled', false);
};

module.exports = {
  bindEvents,
};
