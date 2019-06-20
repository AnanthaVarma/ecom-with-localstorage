function userLogin(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value; 
    var userdata = JSON.parse (localStorage.getItem(username)) ;
        // console.log(userdata);
    if((userdata.username == username) && (userdata.password == password)){
        location.replace("home.html")
    }else{
        document.getElementById("msg").innerHTML = "Check your User name and Password ...!";
    }
        
}