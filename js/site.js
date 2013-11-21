WebFont.load({
    google: {
      families: ['Finger Paint', 'Open Sans']
    }
});

function sendN(email) {
  $.get("/contact?email=" + email);
}

function showProjects() {
   bootbox.dialog({
     message: "View Projects is not fully supported yet. Stay tuned!",
     backdrop: true,
     closeButton: true,
     buttons: {
       main: {
         label: "OK"
       }
     }
   });
}

$('#contactUs').click(function () {
  bootbox.prompt('Enter your Email', function (email) {
    if(email==null || email=='') {
      return;
    }
    sendN(email);
    bootbox.alert("Request Sent");
  });
});

$("#viewProjects").click(function() {
  showProjects();
});
