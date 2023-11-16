"use strict";
const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
	//Add event handlers
	$("#calculate").addEventListener("click", processEntry);

});

//Error message that will be displayed
const getErrorMsg = lbl =>
'Entry must be greater than number greater than 0.';

const focusAndSelect = selector => {
const elem = $(selector);
elem.focus();
elem.select();
};


function processEntry() {
	//Get user input from the text box
	let userInput = parseInt(document.getElementById("income").value);

	if (isNaN(userInput) || userInput <= 0 ) {
		alert(getErrorMsg());
		focusAndSelect("#income");
	} 
	else {
		//Pass user input to makeChange function
		calculateTax(userInput);
		focusAndSelect("#income");
	}
}



function calculateTax(userIncome) {
	//Convert the income to an integer
	const incomeInt = parseInt(userIncome);
	let tax = 0;
	
	//Calculate the tax
	if (incomeInt <= 9875 ) {
		tax += incomeInt * 0.10;
	}
	else if (incomeInt <= 40125){
		tax += ((incomeInt-9875)*.12)+987.50;
	}
	else if (incomeInt <= 85525){
		tax += ((incomeInt-40125)*.22)+4617.50;
	}
	else if (incomeInt <= 163300){
		tax += ((incomeInt-85525)*.24)+14605.50;
	}
	else if (incomeInt <= 207350){
		tax += ((incomeInt-163300)*.32)+33271.50;
	}
	else if (incomeInt <= 518400){
		tax += ((incomeInt-207350)*.35)+47367.50;
	}
	else {
		tax += ((incomeInt-518400)*.37)+156235;
	}
	
	//Round the tax to two decimal places
	tax = tax.toFixed(2);
  
	//Display tax amount
	document.getElementById("tax").value = tax;
	focusAndSelect("#income");
	
  }