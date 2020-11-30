function myFunctio(){
    var x =
    document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function validateForm(){
    var x = document.forms["myForm"]
    ["fname","fpass"].value.trim();
    if (x == "".trim()) {
        alert("Password must be filled out");
        return false;
    }
}