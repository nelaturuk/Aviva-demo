function initialize(markers) {

    /*var bounds = new google.maps.LatLngBounds();
    var mapProp = {
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        zoomControl: false,
        draggable: false
    };
    var map = new google.maps.Map($('#map-container')[0], mapProp);
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    var beaches = [
        ['Bondi Beach', -33.890542, 151.274856, 4],
        ['Coogee Beach', -33.423036, 151.259052, 5],
        ['Cronulla Beach', -34.028249, 121.157507, 3],
        ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
        ['Maroubra Beach', -33.450198, 151.259302, 1]
    ];

    for (i = 0; i < beaches.length; i++) {
        markers[i].then(function (data) {
            if (data.results[0] != undefined) {
                var position = new google.maps.LatLng(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                bounds.extend(position);
                marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: data.results[0].formatted_address
                });

                // Allow each marker to have an info window    
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infoWindow.setContent(data.results[0].formatted_address);
                        infoWindow.open(map, marker);
                    }
                })(marker, i));

            }
        });
    }
    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);*/
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the page
    map = new google.maps.Map($('#map-container')[0], mapOptions);
    map.setTilt(45);

    // Multiple Markers
    /*var markers = [
        ['London Eye, London', 51.503454,-0.119562],
        ['Palace of Westminster, London', 51.499633,-0.124755]
    ];*/

    // Info Window Content
    /*var infoWindowContent = [
        ['<div class="info_content">' +
            '<h3>London Eye</h3>' +
            '<p>The London Eye is a giant Ferris wheel situated on the banks of the River Thames. The entire structure is 135 metres (443 ft) tall and the wheel has a diameter of 120 metres (394 ft).</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Palace of Westminster</h3>' +
            '<p>The Palace of Westminster is the meeting place of the House of Commons and the House of Lords, the two houses of the Parliament of the United Kingdom. Commonly known as the Houses of Parliament after its tenants.</p>' +
            '</div>']
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Loop through our array of markers & place each one on the map  
    for (i = 0; i < markers.length; i++) {
        markers[i].then(function (data) {
            console.log(data);
            if (data.results[0] != undefined) {
                var position = new google.maps.LatLng(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
                bounds.extend(position);
                marker = new google.maps.Marker({
                    position: position,
                    map: map,
                    title: markers[i][0]
                });

                // Allow each marker to have an info window    
                google.maps.event.addListener(marker, 'click', (function (marker, i) {
                    return function () {
                        infoWindow.setContent(infoWindowContent[i][0]);
                        infoWindow.open(map, marker);
                    }
                })(marker, i));
            }
        });

    }



                // Automatically center the map fitting all markers on the screen
                map.fitBounds(bounds);

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });*/
}

function getAllLatLong(codes) {
    //var defer = $.Deferred();
    var markers = [];
    /*$.each(codes, function (index, value) {
        var address = value.placeName + ',' + value.countryCode + ',' + value.postalCode;
        var promise = $.ajax({
            url: 'http://maps.googleapis.com/maps/api/geocode/json',
            data: {
                sensor: false,
                address: address
            }
        });
        markers.push(promise);
    });*/
    return markers;
}


$(document).ready(function () {
    var data = { "postalCodes": [{ "adminCode2": "1721", "adminCode3": "3203", "adminName3": "St. Gallen", "adminCode1": "SG", "adminName2": "Wahlkreis St. Gallen", "lng": 9.399845287638328, "countryCode": "CH", "postalCode": "9011", "adminName1": "Kanton St. Gallen", "placeName": "St. Gallen", "lat": 47.414775553450646 }, { "adminCode1": "GS", "lng": 17.781944437499998, "countryCode": "HU", "postalCode": "9011", "adminName1": "Győr-Moson-Sopron", "placeName": "Győr", "lat": 47.607638900000005 }, { "adminCode2": "1902", "adminCode1": "19", "adminName2": "Tromsø", "lng": 18.95508, "countryCode": "NO", "postalCode": "9011", "adminName1": "Troms", "ISO3166-2": "10", "placeName": "Tromsø", "lat": 69.6489 }, { "lng": 6.1041667, "countryCode": "LU", "postalCode": "L-9011", "placeName": "Ettelbruck", "lat": 49.8475 }, { "adminCode1": "Z", "lng": -67.528136, "countryCode": "AR", "postalCode": "9011", "adminName1": "SANTA CRUZ", "placeName": "CALETA OLIVIA", "lat": -46.439291 }, { "adminCode1": "Z", "lng": -67.5333333, "countryCode": "AR", "postalCode": "9011", "adminName1": "SANTA CRUZ", "placeName": "CAÑADON ESTHER", "lat": -46.4333333 }, { "adminCode1": "Z", "lng": -67.5333333, "countryCode": "AR", "postalCode": "9011", "adminName1": "SANTA CRUZ", "placeName": "EL MANGRULLO", "lat": -46.4333333 }, { "adminCode1": "Z", "lng": -67.5333333, "countryCode": "AR", "postalCode": "9011", "adminName1": "SANTA CRUZ", "placeName": "BAHIA LANGARA", "lat": -46.4333333 }, { "lng": 170.47198, "countryCode": "NZ", "postalCode": "9011", "placeName": "Mornington", "lat": -45.87922 }, { "lng": 124.7325, "countryCode": "PH", "postalCode": "9011", "placeName": "Balinguan", "lat": 9.050317457142857 }] }

    initialize(getAllLatLong(data.postalCodes));
});

