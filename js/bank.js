
//  Step 1. Add event listener to the deposit button.

// Step 2. Get deposit amount from the input deposit field.

// Step 2.5 Conver deposit amount to number type. 

// Step 3. Clear the deposit input field after getting the value.

// Step-4. Get the previous deposit total amount from the HTML code.

// Step-5. Calculate new deposit total and set the value to the deposit total.

// Step-6. Get current balance.

// Step-7. Calculate the new balance and set it to the balance total element.

// code starts from here
// Step-1
document.getElementById('button-deposit').addEventListener('click', function(){
    // Step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // Step-2.5
    const newDepositAmount = parseFloat(newDepositAmountString);
    // Step-3
    depositField.value = '';
    // Step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // Step-5 
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    // Step-6
    const balanceTotalElement = document.getElementById('remaining-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    // Step-7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;



    

    


})