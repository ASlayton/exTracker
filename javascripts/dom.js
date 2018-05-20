const printToDom = (myString, myContainer) => {
  $(myContainer).html(myString);
};

const writeExes = (exes) => {
  let domString = '';
  exes.forEach((ex) => {
    domString += `<div class="panel panel-default ex-card">`;
    domString += `<div class="panel-body">`;
    domString += `<img src="${ex.imageURL}">`;
    domString += `</div>`;
    domString += `<div class="panel-footer">`;
    domString += `<p>${ex.name}</p>`;
    domString += `<p>Age: ${ex.age}</p>`;
    ex.flaws.forEach((flaw) => {
      domString += `<p>${flaw}</p>`;
    });
    domString += `</div>`;
    domString += `</div>`;
  });

  printToDom(`${domString}`, '#ex-container');
};

const writeLocations = (locations) => {
  let domString = '';
  locations.forEach((loc) => {
    domString += `<div class="panel panel-default location-card ${loc.time}">`;
    domString +=   `<div class="panel-body">`;
    domString +=     `<div class="col-sm-6">`;
    domString +=       `<img src="${loc.imageURL}">`;
    domString +=     `</div>`;
    domString +=     `<div class="col-sm-6">`;
    domString +=       `<p>${loc.name}</p>`;
    domString +=       `<p>${loc.address1}</p>`;
    domString +=       `<p>${loc.address2}</p>`;
    domString +=       `<p>${loc.time}</p>`;
    domString +=       `<p>Frequented By:</p>`;
    domString +=       `<div id="${loc.locationId}">`;
    domString +=       `</div>`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });
  printToDom(domString, '#location-container');
};

const writeExToLoc = (exes, locations) => {
  exes.forEach((ex) => {
    locations.forEach((loc) => {
      if (ex.locFreq.includes(loc.locationId)) {
        $(`#${loc.locationId}`).append(`<p>${ex.name}</p>`);
      };
    });
  });
};

module.exports = {
  writeExes,
  writeLocations,
  writeExToLoc,
};
