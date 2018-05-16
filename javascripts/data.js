const dom = require('./dom');

// PROMISE CONSTRUCTOR
const exesJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('/db/ex.JSON')
      .done((data) => {
        resolve(data.ex);
      })
      .fail((err) => {
        reject('There has been an error.', err);
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
        reject('There has been an error.', err);
      });
  });
};

const getAllData = () => {
  let exes = [];
  let locations = [];

  return exesJSON()
    .then((results) => {
      exes = [...results,];
      return locationJSON();
    }).then((result2) => {
      locations = [...result2,];
      return Promise.resolve(exes, locations);
    }).catch((error) => {
      console.error('error', error);
    });
};

const initializer = () => {
  getAllData().then((exes, locations) => {
    dom.writeEx(exes);
    dom.writeLocations(locations);
  });
};

module.exports = {
  initializer,
};
