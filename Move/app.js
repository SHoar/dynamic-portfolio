var main = function() {

		var cities = [
			'Tokyo',
      'Seoul',
      'Mexico City',
      'New York',
      'Mumbai',
      'Jakarta',
      'Sao Paulo',
      'Delhi',
      'Keihanshin',
      'Shanghai',
      'Manila',
      'Hong Kong',
      'Los Angeles',
      'Kolkata',
      'Moscow',
      'Cairo',
      'Buenos Aires',
      'London',
      'Beijing',
      'Karachi'
		];
		$( "#search" ).autocomplete({
			source: cities
		});
		function split( val ) {
			return val.split( /,\s*/ );
		}
		function extractLast( term ) {
			return split( term ).pop();
		$( "#search" )
			// don't navigate away from the field on tab when selecting an item
			.on( "keydown", function( event ) {
				if ( event.keyCode === $.ui.keyCode.TAB &&
						$( this ).autocomplete( "instance" ).menu.active ) {
					event.preventDefault();
				}
			})
			.autocomplete({
				minLength: 0,
				source: function( request, response ) {
					// delegate back to autocomplete, but extract the last term
					response( $.ui.autocomplete.filter(
						cities, extractLast( request.term ) ) );
				},
				focus: function() {
					// prevent value inserted on focus
					return false;
				},
				select: function( event, ui ) {
					var terms = split( this.value );
					// remove the current input
					terms.pop();
					// add the selected item
					terms.push( ui.item.value );
					// add placeholder to get the comma-and-space at the end
					terms.push( "" );
					this.value = terms.join( ", " );
					return false;
				}
			});

};

$(document).ready(main);
