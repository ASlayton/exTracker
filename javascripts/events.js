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
  $('.Dawn').show();
  $('.Dusk, .Midday, .Dark').hide();
};

const middayFilter = () => {
  $('.Dawn, .Dusk, .Dark').hide();
  $('.Midday').show();
};

const duskFilter = () => {
  $('.Dawn, .Midday, .Dark').hide();
  $('.Dusk').show();
};

const darkFilter = () => {
  $('.Dawn, .Dusk, .Midday').hide();
  $('.Dark').show();
};

module.exports = {
  bindEvents,
};
