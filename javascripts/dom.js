const printToDom = (myString, myContainer) => {
  $(myContainer).html(myString);
};

const writeExes = (exes) => {
  let domString = '';
  exes.forEach((ex) => {
    domString += `<div class="panel panel-default">`;
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
    domString += `<div class="panel panel-default ${loc.time}">`;
    domString += `<div class="panel-body">`;
    domString += `<img class="col-sm-6" src="${loc.imageURL}">`;
    domString += `</div>`;
    domString += `<div class="col-sm-6">`;
    domString += `<p>${loc.name}</p>`;
    domString += `<p>${loc.address1}</p>`;
    domString += `<p>${loc.address2}</p>`;
    domString += `<p>${loc.time}</p>`;
    domString += `<p id="${loc.id}"></p>`;
    domString += `</div>`;
    domString += `</div>`;
  });
  printToDom(domString, '#location-container');
};

const writeExToLoc = (exes, locations) => {
  exes.forEach((ex) => {
    locations.forEach((loc) => {
      if (ex.locFreq.contains(loc.id)) {
        $('#ex-freq-container').append(`${ex.name}`);
      };
    });
  });
};

module.exports = {
  writeExes,
  writeLocations,
  writeExToLoc,
};
