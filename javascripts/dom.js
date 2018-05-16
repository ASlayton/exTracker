// WRITING TO THE DOM

const writeEx = (data) => {
  let domString = '';
  data.forEach((ex) => {
    domString += `<div class="panel panel-default">`;
    domString += `<div class="panel-body">`;
    domString +=   `<img src="${ex.imageURL}" id="ex-img">`;
    domString += `</div>`;
    domString += `<div class="panel-footer">`;
    domString += `<h3>Name: ${ex.name}</h3>`;
    domString += `<h3>Age: ${ex.age}</h3>`;
    domString += `<h3>Flaws:</h3>`;
    for (let i = 0; i < ex.flaws.length; i++) {
      domString += `<p>${ex.flaws[i]}</p>`;
    };
    domString += `</div>`;
    domString += `</div>`;
  });

  return domString;
};

const writeLocations = (data) => {
  let domString = '';
  data.forEach(element => {
    domString += `<div class="panel panel-default location-card ${element.time}">`;
    domString +=   `<div class="panel-body">`;
    domString +=     `<img src="${element.imageURL}" class="col-sm-3">`;
    domString +=     `<div class="info-container col-sm-9">`;
    domString +=       `<h4 class='locName'>${element.name}<h4>`;
    domString +=       `<p class='locAdd1'>${element.address1}</p>`;
    domString +=       `<p class='locAdd2'>${element.address2}</p>`;
    domString +=       `<p class='locTime'>${element.time}</p>`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  });

  return domString;
};

module.exports = {
  writeEx,
  writeLocations,
};
