document.addEventListener("DOMContentLoaded", function () {
	// Get the form element within the "imageInsert" div
	var form = document.querySelector(".imageInsert form");

	// Get all select elements within the form
	var selects = form.querySelectorAll("select");

	// Listen for changes in any select element
	selects.forEach(function (select) {
		select.addEventListener("change", function () {
			// Reset all selects except the one that triggered the change
			selects.forEach(function (otherSelect) {
				if (otherSelect !== select) {
					otherSelect.selectedIndex = 0;
				}
			});
		});
	});

	// Listen for form submission
	form.addEventListener("submit", function (event) {
		// Check if more than one select has a value
		var selectedCount = 0;
		selects.forEach(function (select) {
			if (select.value !== "") {
				selectedCount++;
			}
		});

		// If more than one select has a value, prevent form submission and alert the user
		if (selectedCount > 1) {
			alert("Yo, you can only choose one category, bro!");
			event.preventDefault();
		}
	});
});