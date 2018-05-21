const events = require('./events');
const dom = require('./dom');

let exes = [];
let locations = [];

const getExes = () => {
  return exes;
};

const getLocations = () => {
  return locations;
};

const exJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/ex.json')
      .done((data) => {
        resolve(data.exes);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const locationJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const getAllData = () => {
  return Promise.all([exJSON(), locationJSON(),])
    .then((results) => {
      exes = results[0];
      locations = results[1];
      dom.writeExes(exes);
      dom.writeLocations(locations);
      dom.writeExToLoc(exes, locations);
      events.bindEvents(exes, locations);
      $('#reset-btn').on('click', resetBtn);
    })
    .catch((err) => {
      console.error('Errors happened.', err);
    });
};

const resetBtn = (exData, locationData) => {
  getAllData();
  $('#reset-btn').prop('disabled', true);
};

const initializer = () => {
  getAllData();
};

module.exports = {
  initializer,
  getExes,
  getLocations,
  getAllData,
};
