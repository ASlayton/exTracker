// WRITING TO THE DOM

const writeEx = (data) => {
  let domString = '';
  domString += `<div class="panel panel-default">`;
  domString += `<div class="panel-body">`;
  domString +=   `<img src="${data.imageURL}" id="ex-img">`;
  domString += `</div>`;
  domString += `<div class="panel-footer">`;
  domString += `<h3>Name: ${data.name}</h3>`;
  domString += `<h3>Age: ${data.age}</h3>`;
  domString += `<h3>Flaws:</h3>`;
  for (let i = 0; i < data.flaws.length; i++) {
    domString += `<p>${data.flaws[i]}</p>`;
  };
  domString += `</div>`;
  domString += `</div>`;

  return domString;
};

const writeLocations = (data) => {
  console.log(data);
  let domString = '';
  data.forEach(element => {
    domString += `<div class="panel panel-default location-card ${element.time}">`;
    domString +=   `<div class="panel-body">`;
    domString +=     `<img src="${element.imageURL}" class="col-sm-3">`;
    domString +=     `<div class="info-container col-sm-9">`;
    domString +=       `<h4>${element.name}<h4>`;
    domString +=       `<p>${element.address1}</p>`;
    domString +=       `<p>${element.address2}</p>`;
    domString +=       `<p>${element.time}</p>`;
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
