function userLogin(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value; 
    var userdata = JSON.parse (localStorage.getItem(username)) ;
         console.log(userdata);
    if( (userdata != null) && ((userdata.username == username) && (userdata.password == password)) ){
        location.replace("../index.html")
    }else{
        document.getElementById("msg").innerHTML = "Check your User name and Password ...!";
    }
}