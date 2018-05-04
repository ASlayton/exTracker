const loadEx = require('./ex');
const writeEx = require('./dom');

const whenExLoads = (data) => {
  $('#ex-container').append(writeEx(data.ex));
};

const whenCallFails = (error) => {
  console.error('Error!: ', error);
};

// const whenLocationsLoad = () => {

// };

const initializer = () => {
  loadEx(whenExLoads, whenCallFails);
  // loadLocations(whenLocationsLoad, whenCallFails);
};

module.exports = initializer;
