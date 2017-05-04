/*
 * Made by: MladenLo
 * v1.0
 * No licence, just a study code that i made. You may use it in your projects on your own responsibility.
 *
 * HTML code: Table rows must have at least class 'item', because javascript is using that class to catch all rows.
 * 	          Table rows must have data-filter set to the proper values.
 *            Filter buttons must have at least class '.filter-btn' and data-filter set to "value of your filter".
 * JS code  : Variable activeFilters must be filled in with all filter values that you have in your HTML filter buttons.
 * 			: JS code depends on jQuery. Just include jQuery library in your HTML.
 * 		      You should "wrap" this code in $(document).ready(function() {/--HERE--/}.
 * 		      That is it :) Enjoy.
 */
	var allItems = $('.item');
	//Active filters array (default ALL active)
	var activeFilters = ['srb', 'ger', 'vel', 'mal', 'fra']; //Just add how many filters you have
	//allFilterButton
	var allFilterButtons = $('.filter-btn');
	allFilterButtons.on('click', function(){
		var filterValue = $(this).data('filter');
		if($.inArray(filterValue, activeFilters) != -1) {//If filter is active, deactivate it and remove elements
			$(this).removeClass('active');
			activeFilters.splice(activeFilters.indexOf(filterValue), 1);
		} else {
			$(this).addClass('active');
			activeFilters.push($(this).data('filter'));
		}
		//var filtersToString = activeFilters.split(" ");
		$.each( allItems, function( key, value ) {
			var shouldBeShown = true;
			var arrayOfElementFilters = $(value).data('filter').split(" ");
			for(var i = 0; i < arrayOfElementFilters.length; i++) {
				if($.inArray(arrayOfElementFilters[i], activeFilters) === -1) {
					shouldBeShown = false;
					break;
				}
			}
			if(shouldBeShown){
				$(value).fadeIn();
			} else {
				$(value).fadeOut();
			}
		});
	});