
// const plusBtn = document.getElementById("plusBtnMobile");
// plusBtn.addEventListener("click",function(){
//     let molbilePlusClickedValue = updateByPlusClick("mobile");

// });

// const plusBtnCasing = document.getElementById("plusBtnCasing");
// plusBtnCasing.addEventListener("click",function(){
//     updateByPlusClick("casing");
// });

// const minusBtn = document.getElementById("minusBtnMobile");
// minusBtn.addEventListener("click",function(){
//     updateByMinusClick("mobile");
// });

// const minusBtncasing = document.getElementById("minusBtnCasing");
// minusBtncasing.addEventListener("click",function(){
//     updateByMinusClick("casing");
// });

// function updateByPlusClick(id){
    // const click = document.getElementById(id).value;
    // const clickAmount = parseFloat(click);
    // const totalPlusClick =  clickAmount + 1;
    // document.getElementById(id).value = totalPlusClick;

    // const currentMobileBalance = document.getElementById("mobileBalance").innerText;
    // const currentMobileBalanceConverted = parseFloat(currentMobileBalance);
    // const totalMobileBalance =  currentMobileBalanceConverted * totalPlusClick ;
    // document.getElementById("mobileBalance").innerText = totalMobileBalance;
// }

// function updateByMinusClick(id){
    // const click = document.getElementById(id).value;
    // const clickAmount = parseFloat(click);
    // const totalMinusClick =  clickAmount - 1;
    // if (totalMinusClick >= 0){
    //     document.getElementById(id).value = totalMinusClick;
    // }
    // else{
    //     document.getElementById(id).value = 0;
    // }   
// }


const plusBtn = document.getElementById("plusBtnMobile");
plusBtn.addEventListener("click",function(){
    
    clickInPlusBtn("mobile");

    const currentMobileBalance = document.getElementById("mobileBalance").innerText;
    const currentMobileBalanceConverted = parseFloat(currentMobileBalance);
    const totalMobileBalance =  currentMobileBalanceConverted +  1219 ;
    document.getElementById("mobileBalance").innerText = totalMobileBalance;

    subTotalByAddAndMinus();
    taxByAddAndMinus();
    totalByAddAndMinus();

});

const plusBtnCasing = document.getElementById("plusBtnCasing");
plusBtnCasing.addEventListener("click",function(){

    clickInPlusBtn("casing");

    const currentCasingBalance = document.getElementById("casingBalance").innerText;
    const currentCasingBalanceConverted = parseFloat(currentCasingBalance);
    const totalCasingBalance =  currentCasingBalanceConverted + 59;
    document.getElementById("casingBalance").innerText = totalCasingBalance;

    subTotalByAddAndMinus();
    taxByAddAndMinus();
    totalByAddAndMinus();

});

const minusBtn = document.getElementById("minusBtnMobile");
minusBtn.addEventListener("click",function(){
   
    clickInMinusBtn("mobile");

    const currentMobileBalance = document.getElementById("mobileBalance").innerText;
    const currentMobileBalanceConverted = parseFloat(currentMobileBalance);
    const totalMobileBalance =  currentMobileBalanceConverted - 1219 ;

    notLessThanZeroInnerText("mobileBalance",totalMobileBalance);
    subTotalByAddAndMinus();
    taxByAddAndMinus();
    totalByAddAndMinus();

});

const minusBtncasing = document.getElementById("minusBtnCasing");
minusBtncasing.addEventListener("click",function(){
   
    clickInMinusBtn("casing");
 
    const currentCasingBalance = document.getElementById("casingBalance").innerText;
    const currentCasingBalanceConverted = parseFloat(currentCasingBalance);
    const totalCasingBalance =  currentCasingBalanceConverted - 59;

    notLessThanZeroInnerText("casingBalance",totalCasingBalance);

    subTotalByAddAndMinus();
    taxByAddAndMinus();
    totalByAddAndMinus();
});

function subTotalByAddAndMinus(){

    const mobileBalance = convertToParseFloat("mobileBalance"); 
    const casingBalance = convertToParseFloat("casingBalance"); 

    const subTotal = mobileBalance + casingBalance;
    document.getElementById("subtotal").innerText = subTotal;
    return subTotal;

}

function taxByAddAndMinus(){

    const mobileBalance = convertToParseFloat("mobileBalance"); 
    const casingBalance = convertToParseFloat("casingBalance");
    const subTotal = mobileBalance + casingBalance;
    const taxAmount = subTotal * .08;
    document.getElementById("tax").innerText = taxAmount;
    return taxAmount;

}
function totalByAddAndMinus(){

    const subTotal = convertToParseFloat("subtotal"); 
    const tax = convertToParseFloat("tax");
    const total = subTotal + tax;
    document.getElementById("total").innerText = total;
    return total;


}

function convertToParseFloat(id){

    const data = document.getElementById(id).innerText;
    const convertedData = parseFloat(data);
    return convertedData;

}

function notLessThanZeroInnerText(id,x){
    if (x >= 0){
        document.getElementById(id).innerText = x;
    }
    else{
        document.getElementById(id).innerText = 0;
    } 
}


function clickInPlusBtn(id){
    const click = document.getElementById(id).value;
    const clickAmount = parseFloat(click);
    const totalPlusClick =  clickAmount + 1;
    document.getElementById(id).value = totalPlusClick;
}

function clickInMinusBtn(id){
    const click = document.getElementById(id).value;
    const clickAmount = parseFloat(click);
    const totalMinusClick =  clickAmount - 1;
    document.getElementById(id).value = totalMinusClick;

    if (totalMinusClick >= 0){
        document.getElementById(id).value = totalMinusClick;
    }
    else{
        document.getElementById(id).value = 0;
    } 
}

