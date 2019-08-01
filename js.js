
function validation(){
var username = document.getElementById('name').value;
var address = document.getElementById('add').value;
var emailAdress = document.getElementById('mail').value;
var password = document.getElementById('pass').value;
//check
var passwordcheck = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/
var emailcheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
 

if (username == '') {
    window.alert("Please enter your name."); 
}
else if (address == '') {
    window.alert("Please enter your address."); 
}
else if (emailAdress==''){
    window.alert("Please enter your email."); 
}
else if ( emailcheck.test(emailAdress)==false) {
    
    window.alert('Please enter a valid email')
}
else if (password==''){
    window.alert("Please enter your password."); 
}
else if (passwordcheck.test(password)==false){
    window.alert("Please enter a valid password."); 
}
else{
    alert('Welcome !')
}


}














 












/*document.querySelector('#subButton').addEventListener('click',function (event) {
    let password = document.querySelector('#pass').value;
    console.log(password );
});*/

