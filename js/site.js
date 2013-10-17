$.getScript('/js/bootbox.js');

$('#contactUs').click(function () {
  bootbox.prompt('Enter your Email', function (email) {
    console.log('Email was inputted: ' + email);
  });
});
