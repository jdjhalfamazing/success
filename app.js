function calculateScore() {
	// Get user inputs
	var height = parseInt(document.getElementById("height").value);
	var income = parseInt(document.getElementById("income").value);
	var vehicle = document.querySelector('input[name="vehicle"]:checked').value;
	var fitness = parseInt(document.getElementById("fitness").value);

	// Calculate score
	var score = 0;
	if (height >= 72 && height <= 78) {
		score += 25;
	} else if (height > 78) {
		score += 50;
	}

	if (income >= 50000 && income <= 100000) {
		score += 25;
	} else if (income > 100000) {
		score += 50;
	}

	if (vehicle == "yes") {
		score += 25;
	}

	if (fitness >= 3) {
		score += 25;
	}

	// Display result
	var result = document.getElementById("result");
	if (score >= 75) {
		result.innerHTML = "Congratulations! You are successful with a score of " + score + ".";
	} else {
		result.innerHTML = "Sorry, you are not successful yet. You have a score of " + score + ".";
	}
}
