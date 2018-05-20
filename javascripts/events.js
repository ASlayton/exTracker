const search = require('./search');
const dom = require('./dom');

const bindEvents = (exData, locationData) => {
  $('#search-input').on('keypress', (e) => {
    if (e.which === 13) {
      search.searchFunction();
    };
  });
  $('#dawn-btn').on('click', dawnFilter);
  $('#midday-btn').on('click', middayFilter);
  $('#dusk-btn').on('click', duskFilter);
  $('#dark-btn').on('click', darkFilter);
  $('#reset-btn').on('click', (exData, locationData) => {
    resetBtn(exData, locationData);
  });
  $('#ex-container').click((e) => {
    const myID = e.target.closest('.ex-card').id;
    dom.writeSingleCard(myID, exData, locationData);
    $('#reset-btn').prop('disabled', false);
  });
};

const resetBtn = (exData, locationData) => {
  dom.writeExes(exData);
  dom.writeLocations(locationData);
  dom.writeExToLoc(exData, locationData);
  $('#reset-btn').prop('disabled', true);
};

const dawnFilter = () => {
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
