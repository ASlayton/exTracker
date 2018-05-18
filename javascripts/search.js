const searchFunction = () => {
  // Found following code at: https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/
  $.extend($.expr[':'], {
    'containsNC': function (elem, i, match, array) {
      return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || '').toLowerCase()) >= 0;
    },
  });
  const myInput = $('#search-input').val();
  $('.location-card:visible:not(:containsNC(' + myInput + '))').hide();
  $('.ex-card:visible:not(:containsNC(' + myInput + '))').hide();
  $('#reset-btn').prop('disabled', false);
};

module.exports = {
  searchFunction,
};
