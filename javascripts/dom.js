// WRITING TO THE DOM

const writeEx = (data) => {
  let domString = '';
  domString += `<div class="panel panel-default">`;
  domString += `<div class="panel-body">`;
  domString +=   `<img src="${data.imageURL}">`;
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

module.exports = writeEx;
