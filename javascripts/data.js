const dom = require('./dom');
const events = require('./events');

// PROMISE CONSTRUCTOR
const exesJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        resolve(data.exes);
      })
      .fail((err) => {
        reject('There has been an error.', err);
      });
  });
};

const locationJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((err) => {
        reject('There has been an error.', err);
      });
  });
};

const initializer = () => {
  exesJSON().then((exesData) => {
    dom.writeEx(exesData);
    return locationJSON(); })
    .then((locationData) => {
      dom.writeLocations(locationData);
    }).catch((errMsg) => {
      console.error(errMsg);
    });
  events.bindEvents();
};

module.exports = {
  initializer,
};
