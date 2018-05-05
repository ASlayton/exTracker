const searchFunction = () => {
  const myInput = $('#search-input').val();
  $('h4:contains(' + myInput + ')').closest('.location-card').show();

  // $('h4:contains(' + myInput + '), p:contains(' + myInput + '))').closest('.location-card').show();
  // $('h4:not(:contains(' + myInput + ')), p:not(:contains(' + myInput + '))').closest('.location-card').hide();
};

module.exports = {
  searchFunction,
};
