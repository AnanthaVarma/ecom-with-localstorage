function storeUser(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var dob = document.getElementById("dob").value;
    var mobilenumber = document.getElementById("mobile_number").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var userdata = {
        username : username,
        dateofbirth : dob,
        mobilenumber : mobilenumber,
        email : email,
        password : password
    }
        // console.log(userdata);
    var checkusername = JSON.parse (localStorage.getItem(username)) ;
        // console.log(checkusername);
    if(checkusername == null){
        localStorage.setItem(username, JSON.stringify(userdata));
        document.getElementById("msg").innerHTML = "You are Successfully Registered..! "
    }else{
        alert("This User Name is Already Taken..!")
    }
}