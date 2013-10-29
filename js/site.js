WebFont.load({
    google: {
      families: ['Finger Paint', 'Open Sans']
    }
});

function sendN(email) {
  $.get("http://n.tkte.ch/h/1571/4RRGZ_8mWPPgIcNMwQinEYu0?payload=" + encodeURIComponent("> " + email + " asked to be contacted."), function(d) {
    bootbox.alert(d);
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

function getRootDomain() {
   var temp = location.host.split('.').reverse();
   var root_domain = '.' + temp[1] + '.' + temp[0];
   return root_domain;
}

console.log("Running on domain: " + getRootDomain());
