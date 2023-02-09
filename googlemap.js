
function initmap(){
    window.addEventListener("load",function(){

    mymap = this.document.getElementById("map");

    });
}

function getlocation(view){ 
    if(navigator.geolocation){
        if(view === 'dislpaymap'){
            navigator.geolocation.getCurrentPosition(getposition, errorhandeler);
        }else if(view === 'info'){
            navigator.geolocation.getCurrentPosition(showdetails , errorhandeler);
        }
    }else{
        mymap.innerText="Update Your Browser";
    }
}

let marker;
function getposition(position) {

    lat = position.coords.latitude;
    lon = position.coords.longitude;

    //latlon = lat + " , " + lon;
    //mymap.innerText = latlon;
/* steps to deal with google maps api */
    //1- create google latlng ovject ( lat , lon )
    var location = new google.maps.LatLng(lat, lon);
    //2- specify specs of map : zoom : , center
    var specs = { zoom: 17, center: location };
    // 3 retrive map and display map
    const map = new google.maps.Map(mymap, specs);

    marker = new google.maps.Marker({
        position: location,
        map,
        draggable : true,
        Animation : google.maps.Animation.DROP
        });
        marker.addListener('click',toggleBounce);
}

function toggleBounce(){
    if (marker.getAnimation() !== null){
        marker.setAnimation(null)
    }else{
        marker.setAnimation(google.maps.Animation.BOUNCE)
    }
}

function errorhandeler() {
    alert('error')
}

function showdetails(position){
    lat = position.coords.latitude;
    lon = position.coords.longitude;

    latlon = `latitude : ${lat}\nLongtuide : ${lon}`;
    mymap.innerText = latlon;
}

