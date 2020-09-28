function withdraw(){
    var bkash = document.getElementById("bkashNumber").value;
    var n = bkash.length;

    if(n > 11){
        alert("Your number should be not more than 11 digits.");
    }
    else if(n < 11){
        alert("Your number should be not less than 11 digits.");
    }
    else{
        alert("Withdraw Request Sent!");
        alert("Wait 5 minutes!");
    }
}