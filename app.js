 document.querySelector("#tip-form").onchange = function () {
     // Selectiong Element 
    const bill = Number(document.getElementById("totalBill").value);
    const tip = document.getElementById("tipInput").value;
    const tipOutput = document.getElementById("tipOutput");
    const tipAmount = document.getElementById("tipAmount");
    const totalBillWithTip = document.getElementById("totalBillWithTip");
    const results = document.getElementById("results")
     // Calculation 
     const tipValue = bill * (tip / 100);
     const finalBill = bill + tipValue;

     tipAmount.value = tipValue.toFixed(2);
     totalBillWithTip.value = finalBill.toFixed(2);
     // Showimg Result
     tipOutput.innerHTML = `${tip}%`;
     results.style.display = "block";
 }