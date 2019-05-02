document.getElementById('sign-in').onsubmit = function(){
  var form = document.getElementById('sign-in');
  var credentials = {email:form.email.value, password:form.password.value};
  login(
    credentials,
    function(){window.location.href = '/dashboard/';}
  );
  return false;
};
