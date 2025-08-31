document.getElementById('log-btn').addEventListener('click', function(e){
    e.preventDefault();
    let mobileNumber = 18668389910;
    let pin = 1234;
    let mobileNumberValue = parseInt(document.getElementById('mobile-number').value);
    let pinValue = parseInt(document.getElementById('pin').value);
    if(mobileNumber === mobileNumberValue && pin === pinValue){
        window.location.href = '../html/home.html';
    } else{
        alert('Wrong Credentials');
    }
})