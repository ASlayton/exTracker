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
  $('#reset-btn').on('click', resetPage);
};

const dawnFilter = () => {
  $('.Dawn').show();
  $('.Dusk, .Midday, .Dark').hide();
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
  $('.Dawn, .Dusk, .Midday').hide();
  $('.Dark').show();
  $('#reset-btn').prop('disabled', false);
};

const resetPage = () => {
  $('.location-card').show();
  $('#reset-btn').prop('disabled', true);
};

module.exports = {
  bindEvents,
};
