$(function() {
  $('.app-name').keyup(function() {
    if ($(this).val().length > 0) {
      $('.app-name-container').text($(this).val());
    } else {
      $('.app-name-container').text('App Name');
    }
  });

  $('.app-name').trigger('keyup').focus();
});
