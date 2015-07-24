$(function() {
  $('.app-name-container').text($('.app-name').val());

  $('.app-name').keyup(function() {
    if ($(this).val().length > 0) {
      $('.app-name-container').text($(this).val());
    } else {
      $('.app-name-container').text('Your Apps N...');
    }
  })
});
