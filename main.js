function startMap() {
    const ironhackSAO = {
        lat: -23.5617375,
        lng: -46.6623218
    };

    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            zoom: 15,
            center: ironhackSAO
        }
    );

    const myMarker = new google.maps.Marker({
        position: ironhackSAO,
        map: map,
        title: "I'm here"
    });

    if (navigator.geolocation) {

        // Get current position
        // The permissions dialog will pop up
        navigator.geolocation.getCurrentPosition(function (position) {
            // Create an object to match Google's Lat-Lng object format
            const myNotebookPosition = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            const myMarker = new google.maps.Marker({
                position: myNotebookPosition,
                map: map,
                title: "I'm here"
            });
            // User granted permission
            // Center the map in the position we got
        }, function () {
            // If something goes wrong
            console.log('Error in the geolocation service.');
        });

        const directionsService = new google.maps.DirectionsService;
        const directionsDisplay = new google.maps.DirectionsRenderer;

        const directionRequest = {
            origin: ironhackSAO,
            destination: 'Alameda Franca 1222',
            travelMode: 'DRIVING'
        };

        directionsService.route(
            directionRequest,
            function (response, status) {
                if (status === 'OK') {
                    // everything is ok
                    directionsDisplay.setDirections(response);

                } else {
                    // something went wrong
                    window.alert('Directions request failed due to ' + status);
                }
            }
        );

        directionsDisplay.setMap(map);

    } else {
        // Browser says: Nah! I do not support this.
        console.log('Browser does not support geolocation.');
    }

}

startMap();