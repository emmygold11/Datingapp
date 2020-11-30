function validateForm(){
    var x = document.forms["myForm"]
    ["fname","fpass"].value.trim();
    if (x == "".trim()) {
        alert("Name must be filled out");
        return false;
    }
}