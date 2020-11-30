function validateForm(){
    var x = document.forms["myForm"]
    ["fname","fpass"].value.trim();
    if (x == "".trim()) {
        alert("Name must be filled out");
        return false;
    }
}
// var content= document.getElementsByTagName('body')[0];
// var darkMode = document.getElementById("dark-change");
// darkMode.addEventListener('click', function(){
//     darkMode.classList.toggle('active');
//     content.classList.toggle('night')
// })

// $(window).on('load',function(){
//     $(".loader").fadeOut(1000);
//     $(".content").fadeIn(1000)
// })

// code for toggling password visibility
function myFunctio(x){
    var x =
    document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
        x.classList.toggle("fa-eye-splash");
    } else {
        x.type = "password";
        
    }
}