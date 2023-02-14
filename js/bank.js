
//  Step 1. Add event listener to the deposit button.

// Step 2. Get deposit amount from the input deposit field.

// Step 2.5 Conver deposit amount to number type. 

// Step 3. Clear the deposit input field after getting the value.

// Step-4. Get the deposit total amount from the HTML code.



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

    

    


})