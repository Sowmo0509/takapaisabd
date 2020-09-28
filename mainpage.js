let count = 2;
const button = document.querySelector("#pushCount");
const money = document.querySelector(".moneyCount");
const check = document.querySelector("#check");

function onClick(){
    if (count>500){
        window.open('withdraw.html');
    }
    else{
        alert("Sorry! Not enough cash! You need minimum 500 taka to withdraw!")
    }
}

button.addEventListener("click", ()=>{
    count/=.9;
    money.innerText = count;
    if(count>500){
        alert("Taka 500+! Withdraw now!");
    }
    // onClick(); created an extra button now
});

