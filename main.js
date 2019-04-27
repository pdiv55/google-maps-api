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
}

startMap();