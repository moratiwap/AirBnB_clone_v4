/*$(document).ready( function () {
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
$.ajax({
	type: 'GET',
	url: 'http://0.0.0.0:5001/api/v1/status/', 
	success: function(data) {
		if (data.status === "OK") {
			$("#api_status").addClass("available");
		} else {
			$("#api_status").removeClass("available");
		}
	}
});*/

$(function () {
        let amenities = []
        $('input[type="checkbox"]').change(function() {
                const id = $(this).attr('data-id');
                const name = $(this).attr('data-name');
                if (this.checked) {
                        //amenity_id.append($(this).attr("data-name"))
                        amenities.push({name: name, id: id});
                        //amenity_id = $('amenities.popover').val();
                }
                else {
                        const index = amenities.findIndex(function (d) {
                        return d.id === id;
                        });
                        if (index > -1 ) {
                                amenity_id.splice(index, 1);
                        }
                }
                const amenityNames = amenities.map(function (d) {
                        return d.name.replace(':', '');
                }).join(', ');
                $('.amenities h4').text(amenityNames);
        });
	$.ajax({
        	type: 'GET',
        	url: 'http://127.0.0.1:5002/api/v1/status/',
        	success: function(data) {
                	if (data.status === "OK") {
                        	$("#api_status").addClass("available");
                	} else {
                        	$("#api_status").removeClass("available");
                	}
        	}
	});
});
