$(document).ready( function () {
	let amenities = {};
	$('imput[type="checkbox"]').on('change', function() {
		let amenityId = $(this).data('id');
		if (this.checked) {
			amenities[amenityId] = amenityId;
		} else {
			delete amenities[amenityId];
		}

		$('h4#amenities').text(object.values(amenities).join(','));
	});
});
