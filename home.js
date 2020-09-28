function bkashGot(){
    var bkash = document.getElementById("bkashnum").value;
    var n = bkash.length;

    if(n > 11){
        alert("Your number should be not more than 11 digits.");
    }
    else if(n < 11){
        alert("Your number should be not less than 11 digits.");
    }
    else{
        alert("Thank you for submitting");
        window.open('mainpage.html');
    }
}