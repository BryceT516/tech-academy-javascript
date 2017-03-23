$(document).ready(function() {
	var currentPizzaObject = {
		size: "",
		crust: "",
		sauce: "",
		cheese: "",
		meat: [],
		toppings: [],
		price: 0
	};
	var fullOrderObject = [];


	$('#startOverBtn').hide();
	$('#fullOrderPanel').hide();
	$('#btnAddToOrder').prop('disabled', true);
	$('#btnPlaceOrder').prop('disabled', true);

	$('#startOrderMainBtn').click(function(){
		//hides the start button and brings up the ordering forms.
		$(this).hide();
		$('#orderFormContent').css('visibility','visible');
		$('#startOverBtn').show();
	});


	//Update the pizza size listing on changes
	$('input[type=radio][name=radioSize').change(function() {
		if(this.value == "personal") {
			$('#currentSize').html('Personal&nbsp&nbsp$6.00');
			currentPizzaObject.size = 'Personal';
		} else if (this.value == "medium") {
			$('#currentSize').html('Medium&nbsp&nbsp$10.00');
			currentPizzaObject.size = 'Medium';
		} else if (this.value == "large") {
			$('#currentSize').html('Large&nbsp&nbsp$14.00');
			currentPizzaObject.size = 'Large';
		} else if (this.value == "extraLarge") {
			$('#currentSize').html('Extra Large&nbsp&nbsp$16.00');
			currentPizzaObject.size = 'Extra Large';
		}

		checkCurrentPizzaReady();
		calculateCurrentPizzaPrice();
		$('#currentPizzaPrice').html(currentPizzaObject.price);
		$('#crustPanel').click();

	});

	//Update the crust selection on change
	$('input[type=radio][name=radioCrust').change(function() {
		if(this.value == "plain") {
			$('#currentCrust').html('Plain&nbsp&nbsp$0.00');
			currentPizzaObject.crust = 'Plain';
		} else if (this.value == "garlicButter") {
			$('#currentCrust').html('Garlic Butter&nbsp&nbsp$0.00');
			currentPizzaObject.crust = 'Garlic Butter';
		} else if (this.value == "cheeseStuffed") {
			$('#currentCrust').html('Cheese Stuffed&nbsp&nbsp$3.00');
			currentPizzaObject.crust = 'Cheese Stuffed';
		} else if (this.value == "spicy") {
			$('#currentCrust').html('Spicy&nbsp&nbsp$0.00');
			currentPizzaObject.crust = 'Spicy';
		} else if (this.value == "houseSpecial") {
			$('#currentCrust').html('House Special&nbsp&nbsp$0.00');
			currentPizzaObject.crust = 'House Special';
		}

		checkCurrentPizzaReady();
		calculateCurrentPizzaPrice();
		$('#currentPizzaPrice').html(currentPizzaObject.price);
		$('#saucePanel').click();
	});

	//Update the sauce selection on change
	$('input[type=radio][name=radioSauce').change(function() {
		if(this.value == "marinara") {
			$('#currentSauce').html('Marinara&nbsp&nbsp$0.00');
			currentPizzaObject.sauce = 'Marinara sauce';
		} else if (this.value == "white") {
			$('#currentSauce').html('White&nbsp&nbsp$0.00');
			currentPizzaObject.sauce = 'White sauce';
		} else if (this.value == "barbeque") {
			$('#currentSauce').html('Barbeque&nbsp&nbsp$0.00');
			currentPizzaObject.sauce = 'Barbeque sauce';
		} else if (this.value == "noSauce") {
			$('#currentSauce').html('No Sauce&nbsp&nbsp$0.00');
			currentPizzaObject.sauce = 'No sauce';
		}

		checkCurrentPizzaReady();
		calculateCurrentPizzaPrice();
		$('#currentPizzaPrice').html(currentPizzaObject.price);
		$('#cheesePanel').click();
	});

	//Update the Cheese selection on change
	$('input[type=radio][name=radioCheese').change(function() {
		if(this.value == "regular") {
			$('#currentCheese').html('Regular Cheese&nbsp&nbsp$0.00');
			currentPizzaObject.cheese = 'Regular Cheese';
		} else if (this.value == "noCheese") {
			$('#currentCheese').html('No Cheese&nbsp&nbsp$0.00');
			currentPizzaObject.cheese = 'No Cheese';
		} else if (this.value == "extraCheese") {
			$('#currentCheese').html('Extra Cheese&nbsp&nbsp$3.00');
			currentPizzaObject.cheese = 'Extra Cheese';
		}

		checkCurrentPizzaReady();
		calculateCurrentPizzaPrice();
		$('#currentPizzaPrice').html(currentPizzaObject.price);
		$('#meatsPanel').click();
	});

	$('.panel-heading').click(function(event){
		//Using this to make it possible to click anywhere in the heading of the 
		// accordion panels to activate that panel.
		$(event.target).children("a").click();
	})







	$('#btnMeatDone').click(function() {
		//A button to move on from selecting meat options
		event.preventDefault();
		$('#toppingsPanel').click();
	});


	$("input:checkbox").click(function() {
		//Check each meat checkbox and add the text as needed.
		var firstItem = true;		
		var firstTopItem = true;

		//Clear the currentMeat list
		$('#currentMeat').html('');
		//Clear the currentPizzaObject meat array
		currentPizzaObject.meat = [];

		//Check the meat options and edit the current info listings
		if($('#pepperoni').prop('checked')){
			if (firstItem) {
				$('#currentMeat').html('Pepperoni&nbsp;&nbsp;$0.00');
				firstItem = false;
			} else {
				$('#currentMeat').append('<br>Pepperoni&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.meat.push('Pepperoni');
		}
		if($('#sausage').prop('checked')){
			if (firstItem) {
				$('#currentMeat').html('Sausage&nbsp;&nbsp;$0.00');
				firstItem = false;
			} else {
				$('#currentMeat').append('<br>Sausage&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.meat.push('Sausage');
		}
		if($('#canadianBacon').prop('checked')){
			if (firstItem) {
				$('#currentMeat').html('Cnadian Bacon&nbsp;&nbsp;$0.00');
				firstItem = false;
			} else {
				$('#currentMeat').append('<br>Canadian Bacon&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.meat.push('Canadian Bacon');
		}
		if($('#groundBeef').prop('checked')){
			if (firstItem) {
				$('#currentMeat').html('Ground Beef&nbsp;&nbsp;$0.00');
				firstItem = false;
			} else {
				$('#currentMeat').append('<br>Ground Beef&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.meat.push('Ground Beef');
		}
		if($('#anchovy').prop('checked')){
			if (firstItem) {
				$('#currentMeat').html('Anchovy&nbsp;&nbsp;$0.00');
				firstItem = false;
			} else {
				$('#currentMeat').append('<br>Anchovy&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.meat.push('Anchovy');
		}
		if($('#chicken').prop('checked')){
			if (firstItem) {
				$('#currentMeat').html('Chicken&nbsp;&nbsp;$0.00');
				firstItem = false;
			} else {
				$('#currentMeat').append('<br>Chicken&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.meat.push('Chicken');
		}

		//Clear the current toppings list
		$('#currentToppings').html('');

		//Clear the currentPizzaObject toppings array
		currentPizzaObject.toppings = [];

		//Check the toppings check boxes and edit the current toppings section accordingly
		if($('#tomatoes').prop('checked')){
			if (firstTopItem) {
				$('#currentToppings').html('Tomatoes&nbsp;&nbsp;$0.00');
				firstTopItem = false;
			} else {
				$('#currentToppings').append('<br>Tomatoes&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.toppings.push('Tomatoes');
		}
		if($('#onions').prop('checked')){
			if (firstTopItem) {
				$('#currentToppings').html('Tomatoes&nbsp;&nbsp;$0.00');
				firstTopItem = false;
			} else {
				$('#currentToppings').append('<br>Tomatoes&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.toppings.push('Onions');
		}
		if($('#olives').prop('checked')){
			if (firstTopItem) {
				$('#currentToppings').html('Olives&nbsp;&nbsp;$0.00');
				firstTopItem = false;
			} else {
				$('#currentToppings').append('<br>Olives&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.toppings.push('Olives');
		}
		if($('#greenPeppers').prop('checked')){
			if (firstTopItem) {
				$('#currentToppings').html('Green Peppers&nbsp;&nbsp;$0.00');
				firstTopItem = false;
			} else {
				$('#currentToppings').append('<br>Green Peppers&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.toppings.push('Green Peppers');
		}
		if($('#mushrooms').prop('checked')){
			if (firstTopItem) {
				$('#currentToppings').html('Mushrooms&nbsp;&nbsp;$0.00');
				firstTopItem = false;
			} else {
				$('#currentToppings').append('<br>Mushrooms&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.toppings.push('Mushrooms');
		}
		if($('#pineapple').prop('checked')){
			if (firstTopItem) {
				$('#currentToppings').html('Pineapple&nbsp;&nbsp;$0.00');
				firstTopItem = false;
			} else {
				$('#currentToppings').append('<br>Pineapple&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.toppings.push('Pineapple');
		}
		if($('#spinach').prop('checked')){
			if (firstTopItem) {
				$('#currentToppings').html('Spinach&nbsp;&nbsp;$0.00');
				firstTopItem = false;
			} else {
				$('#currentToppings').append('<br>Spinach&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.toppings.push('Spinach');
		}
		if($('#jalapeno').prop('checked')){
			if (firstTopItem) {
				$('#currentToppings').html('Jalapeno&nbsp;&nbsp;$0.00');
				firstTopItem = false;
			} else {
				$('#currentToppings').append('<br>Jalapeno&nbsp;&nbsp;+$1.00');
			}
			currentPizzaObject.toppings.push('Jalapeno');
		}

		calculateCurrentPizzaPrice();
		$('#currentPizzaPrice').html(currentPizzaObject.price);

	});


	$('#btnAddToOrder').click(function(){
		//Add the current pizza values to the full order array
		fullOrderObject.push(currentPizzaObject);
		currentPizzaObject = {
			size: "",
			crust: "",
			sauce: "",
			cheese: "",
			meat: [],
			toppings: [],
			price: 0
		};

		var totalOrderPrice = 0;

		//Construct the content to display in the full order area
		totalOrderPrice = displayFullOrder();

		//Make sure the full order area is displayed
		$('#fullOrderPanel').show();

		//Clear out all the current pizza displays and clear all the form elements
		$('#currentSize').html("");
		$('#currentCrust').html("");
		$('#currentSauce').html("");
		$('#currentCheese').html("");
		$('#currentMeat').html("");
		$('#currentToppings').html("");
		$('#currentPizzaPrice').html("0");

		$('#sizePanel').click();
		$('[type=radio').prop("checked", false);
		$('[type=checkbox').prop("checked", false);

		$('#btnAddToOrder').prop('disabled', true);

		//Activate the Place Order button
		$('#btnPlaceOrder').prop('disabled', false);

		//Show the total order button in the required places
		$('#fullOrderPrice').html(totalOrderPrice);
		$('#placeOrderPrice').html(totalOrderPrice);

		registerRemoveButtons();

	});

	function displayFullOrder(){
		var totalOrderPrice = 0;
		$('#pizzaTotalList').html('');
		for (var i=0; i < fullOrderObject.length; i++){
			$('#pizzaTotalList').append('<button class="pizzasInOrder btn-danger btn-small" value='+i+'><span class="danger">&times;</span></button> &nbsp;');
			$('#pizzaTotalList').append(fullOrderObject[i].size + ', ');
			$('#pizzaTotalList').append(fullOrderObject[i].crust + ' crust, ');
			$('#pizzaTotalList').append(fullOrderObject[i].sauce + ', ');
			$('#pizzaTotalList').append(fullOrderObject[i].cheese);
			if(fullOrderObject[i].meat.length > 0){				
				for (var m = 0; m < fullOrderObject[i].meat.length; m++) {
					$('#pizzaTotalList').append(', ' + fullOrderObject[i].meat[m]);
				}
			}
			if(fullOrderObject[i].toppings.length > 0){				
				for (var t = 0; t < fullOrderObject[i].toppings.length; t++) {
					$('#pizzaTotalList').append(', ' + fullOrderObject[i].toppings[t]);
				}
			}
			$('#pizzaTotalList').append('<br>$' + fullOrderObject[i].price + '.00');
			$('#pizzaTotalList').append('<hr>');

			totalOrderPrice += fullOrderObject[i].price;

		}
		return totalOrderPrice;

	}


	function registerRemoveButtons(){
		//This is monitoring the click event on any of the remove pizza buttons in the full order listing area.
		$('.pizzasInOrder').click(function(event){
			
			event.preventDefault();
			var pizzaToRemove = $(this).val();
			var tempArray = [];
			var totalOrderPrice;

			if (fullOrderObject.length == 1){
				fullOrderObject=[];

				//Hide the full order panel
				$('#fullOrderPanel').hide();

				//Clear out all the current pizza displays and clear all the form elements
				$('#currentSize').html("");
				$('#currentCrust').html("");
				$('#currentSauce').html("");
				$('#currentCheese').html("");
				$('#currentMeat').html("");
				$('#currentToppings').html("");
				$('#currentPizzaPrice').html("0");

				//$('#sizePanel').click();
				$('[type=radio').prop("checked", false);
				$('[type=checkbox').prop("checked", false);

				$('#btnAddToOrder').prop('disabled', true);

				//De-Activate the Place Order button
				$('#btnPlaceOrder').prop('disabled', true);

				//Show the total order button in the required places
				$('#fullOrderPrice').html('0');
				$('#placeOrderPrice').html('0');

			}else{
				for(var f=0; f < fullOrderObject.length; f++) {
					if(f == parseInt(pizzaToRemove)){
						//skip
					} else {
						tempArray.push(fullOrderObject[f]);
					}
				}
				fullOrderObject = [];

				fullOrderObject = tempArray;

				totalOrderPrice = displayFullOrder();

				//Show the total order button in the required places
				$('#fullOrderPrice').html(totalOrderPrice);
				$('#placeOrderPrice').html(totalOrderPrice);

				registerRemoveButtons();
			}
			

		});
	}


	$('#btnPlaceOrder').click(function(){
		// Update all the information in the modal that displays the receipt.
		var modalOut = $('#infoTable');
		var htmlOut = "";
		var grandTotal = 0;

		modalOut.html('');
		for (var i=0; i < fullOrderObject.length; i++){
			htmlOut += "<tr><th align='center'>Pizza " + (i+1) + "</th><th align='center'>$" + fullOrderObject[i].price + ".00</th></tr>";
			htmlOut += '<tr><td align="left">' + fullOrderObject[i].size + '</td><td align="left">';
			switch(fullOrderObject[i].size) {
				case 'Personal':
					htmlOut += "$6.00</td></tr>";
					break;
				case 'Medium':
					htmlOut += "$10.00</td></tr>";
					break;
				case 'Large':
					htmlOut += "$14.00</td></tr>";
					break;
				case 'Extra Large':
					htmlOut += "$16.00</td></tr>";
					break;
				default:
					htmlOut += "$0.00</td></tr>";
			}

			htmlOut += "<tr><td align='left'>" + fullOrderObject[i].crust + " crust</td>";
			if(fullOrderObject[i].crust == "Cheese Stuffed"){
				htmlOut += "<td align='left'>+ $3.00</td></tr>";
			} else {
				htmlOut += "<td align='left'>+ $0.00</td></tr>";
			}

			htmlOut += "<tr><td align='left'>" + fullOrderObject[i].sauce + "</td>";
			htmlOut += "<td align='left'>+ $0.00</td></tr>";

			htmlOut += "<tr><td align='left'>" + fullOrderObject[i].cheese + "</td>";
			if(fullOrderObject[i].cheese == "Extra Cheese"){
				htmlOut += "<td align='left'>+ $3.00</td></tr>";
			} else {
				htmlOut += "<td align='left'>+ $0.00</td></tr>";
			}


			if(fullOrderObject[i].meat.length > 0){				
				for (var m = 0; m < fullOrderObject[i].meat.length; m++) {
					htmlOut += "<tr><td align='left'>" + fullOrderObject[i].meat[m] + "</td>";
					if(m==0){
						htmlOut += "<td align='left'>+ $0.00</td></tr>";
					} else {
						htmlOut += "<td align='left'>+ $1.00</td></tr>";
					}
				}
			}
			if(fullOrderObject[i].toppings.length > 0){				
				for (var t = 0; t < fullOrderObject[i].toppings.length; t++) {
					htmlOut += "<tr><td align='left'>" + fullOrderObject[i].toppings[t] + "</td>";
					if(t==0){
						htmlOut += "<td align='left'>+ $0.00</td></tr>";
					} else {
						htmlOut += "<td align='left'>+ $1.00</td></tr>";
					}
				}
			}

			grandTotal += fullOrderObject[i].price;

		}

		// Now populate the modal with the content.
		modalOut.append(htmlOut);

		$('#acceptOrderTotalPrice').html('Grand Total: $' + grandTotal + '.00');

	});





	function calculateCurrentPizzaPrice() {
		//Calculate the price of the current pizza selections
		switch(currentPizzaObject.size) {
			case 'Personal':
				currentPizzaObject.price = 6;
				break;
			case 'Medium':
				currentPizzaObject.price = 10;
				break;
			case 'Large':
				currentPizzaObject.price = 14;
				break;
			case 'Extra Large':
				currentPizzaObject.price = 16;
				break;
			default:
				currentPizzaObject.price = 0;
		}

		if(currentPizzaObject.cheese == 'Extra Cheese'){
			currentPizzaObject.price += 3;
		}

		if(currentPizzaObject.crust == 'Cheese Stuffed'){
			currentPizzaObject.price += 3;
		}

		if(currentPizzaObject.meat.length > 1){
			currentPizzaObject.price += (currentPizzaObject.meat.length - 1);
		}

		if(currentPizzaObject.toppings.length > 1){
			currentPizzaObject.price += (currentPizzaObject.toppings.length - 1);
		}
	}

});


function checkCurrentPizzaReady() {
	//Check if the current pizza being selected is ready to be added to the order.
	if(	!$('#currentSize').html() == "" &&
		!$('#currentCrust').html() == "" &&
		!$('#currentSauce').html() == "" &&
		!$('#currentCheese').html() == "" ) {
		
		//Activate the "add to order" button
		$('#btnAddToOrder').prop('disabled', false);
	}
}


