
window.addEventListener('load',()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
                long=position.coords.longitude;
                lat=position.coords.latitude;

                const proxy='https://cors-anywhere.herokuapp.com/';
                const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e9ad889c214cdd99f48384e6dd84d239&units=metric`;
         
                fetch(api)
                .then(response=>{
                    return response.json();
                })
                .then(data=>{
                    console.log(data);
                    let temp = data.main.temp;
                    let local = data.name;
                    document.getElementById('local').innerText=`Local: ${local}`;
                    document.getElementById('tempo').innerText=temp;
                });
            }
        );
        
    }
});