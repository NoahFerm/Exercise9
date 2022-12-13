const button = document.getElementById('bishBoshSubmit');
button.addEventListener('click', bishBosh())

function bishBosh(){
    let startNumber = document.getElementById("start").value;
    let endNumber = document.getElementById("end").value;
    let bish = document.getElementById("bish").value;
    let bosh = document.getElementById("bosh").value;

    document.getElementById("result").innerHTML = "Result: ";

    if(startNumber == "" || endNumber == "" || bish == "" || bosh == ""){
        document.getElementById("result").innerHTML = "Please make sure that all fields have a number";
    }
    else if(startNumber < 0 || endNumber <= startNumber || bish < 1 || bosh < 1){
        document.getElementById("result").innerHTML = "Please make sure that:<ol><li>Start number isn't negative</li><li>End number is higher than start number</li><li>Bish and bosh are higher than 1</li></ol>";
    }
    else{
        for(number = startNumber; number <= endNumber; number++){
            if(number % bish == 0 && number % bosh == 0){
                console.log('Bish Bosh');
                document.getElementById("result").innerHTML += "<p>Bish Bosh</p>";
            }
            else if(number % bish == 0){
                console.log('Bish');
                document.getElementById("result").innerHTML += "<p>Bish</p>";
            }
            else if (number % bosh == 0) {
                console.log('Bosh');
                document.getElementById("result").innerHTML += "<p>Bosh</p>";
            } else {
                console.log(number);
                document.getElementById("result").innerHTML += "<p>"+ number +"</p>";
            }
        }
    }
}
