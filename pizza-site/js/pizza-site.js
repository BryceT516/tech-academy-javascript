$(document).ready(function() {
	
	//Update the pizza size listing on changes
	$('input[type=radio][name=radioSize').change(function() {
		if(this.value == "personal") {
			$('#currentSize').html('Personal&nbsp&nbsp$6.00');
		} else if (this.value == "medium") {
			$('#currentSize').html('Medium&nbsp&nbsp$10.00');
		} else if (this.value == "large") {
			$('#currentSize').html('Large&nbsp&nbsp$14.00');
		} else if (this.value == "extraLarge") {
			$('#currentSize').html('Extra Large&nbsp&nbsp$16.00');
		}

	});

	//Update the crust selection on change
	$('input[type=radio][name=radioCrust').change(function() {
		if(this.value == "plain") {
			$('#currentCrust').html('Plain&nbsp&nbsp$0.00');
		} else if (this.value == "garlicButter") {
			$('#currentCrust').html('Garlic Butter&nbsp&nbsp$0.00');
		} else if (this.value == "cheeseStuffed") {
			$('#currentCrust').html('Cheese Stuffed&nbsp&nbsp$3.00');
		} else if (this.value == "spicy") {
			$('#currentCrust').html('Spicy&nbsp&nbsp$0.00');
		} else if (this.value == "houseSpecial") {
			$('#currentCrust').html('House Special&nbsp&nbsp$0.00');
		}

	});

});