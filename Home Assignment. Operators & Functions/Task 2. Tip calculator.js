function computeTip(totalBill){
    tipAmount = totalBill * 0.1;
    return tipAmount;
}
totalBill = 1500;
console.log(`For a total bill of $${totalBill}, leave a $${computeTip(totalBill)} tip`);