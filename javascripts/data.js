const loadEx = require('./ex');
const loadLocations = require('./locations');
const writeToDom = require('./dom');

const whenExLoads = (data) => {
  $('#ex-container').append(writeToDom.writeEx(data.ex));
};

const whenCallFails = (error) => {
  console.error('Error!: ', error);
};

const whenLocationsLoad = (data) => {
  $('#location-container').append(writeToDom.writeLocations(data.locations));
};

const initializer = () => {
  loadEx(whenExLoads, whenCallFails);
  loadLocations(whenLocationsLoad, whenCallFails);
};

module.exports = initializer;
