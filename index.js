function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="admin" && password=="user"){
        alert("Login successful!");
        window.open("home.html","_self");
    }
    else if(username=="user" && password=="test"){
        alert("Login successful!");
        window.open('home.html',"_self");
    }
    else if(username=="ahmedhasan" && password=="chapa"){
        alert("Login successful!");
        alert("Welcome Ahmed Hasan!");
        window.open("home.html","_self");
    }
    else{
        alert("Incorrect Login");
        alert("Please collect your username and password");
    }
}