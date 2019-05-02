/* eslint no-unused-vars: 0 */
var status = {
OK:200
};

function login(credentials,onSuccess,onError){
  var req = new XMLHttpRequest();
  req.open(
    'POST',
    '/auth/login/',
    true
  );
  req.setRequestHeader('Content-Type', 'application/json');

  req.onload = function() {
    if(req.status === status.OK) {
      var response = JSON.parse(req.responseText);
      localStorage.setItem('token',response.token);
      localStorage.setItem('uid',response.uid);
      onSuccess();
    }
  };

  req.send(JSON.stringify(credentials));
}
