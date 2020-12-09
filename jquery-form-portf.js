function verifName(){
  var name = document.querySelector(".form-name");
  var name_r = /^[a-zA-Z]/;
  if(name_r.test(name.value)==false){
    name.style.border="solid 2px red";
    alert("Format invalide");
    return false;
  }else{
    name.style.border="";
    return true;
  };
  return name_r;
};
function verifEmail(){
  var email = document.querySelector(".form-email");
  var email_r = /^[A-Za-z\d.-_]+@[A-Za-z\d.-_]{2,}\.[a-z]{2,4}$/
  if(email_r.test(email.value)==false){
    email.style.border="solid 2px red";
    alert("Format invalide");
    return false
  }else{
    email.style.border="";
    return true;
  };
  return email_r;
};
function verifMessage(){
  var message = document.querySelector(".form-message");
  if(message.value==""){
    message.style.border="solid 2px red";
    alert("Message manquant");
    return false;
  }else{
    message.style.border="";
    return true;
  };
};
function verifAll(form){
  var verifName_OK = verifName(form.name_r);
  var verifEmail_OK = verifEmail(form.email_r);
  if(form.rgpd.checked==false || form.name.value=="" || form.email.value=="" || form.message.value=="" || !verifName_OK || !verifEmail_OK){
    alert("Formulaire incorrect");
    return false;
  }else{
    return true;
  };
};
