function validateForm(){
    var x = document.forms["myForm"]
    ["fname"].value.trim();
    if (x == "".trim()) {
        alert("Fill in the blank space");
        return false;
    }
}
// function ValidateEmail(inputText){
//     var mailformat = /^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\.[a-zA-Z0-9]+)*$/;
//     if (inputText.value.match(mailformat))
//     {
//         alert("Valid email address!");
//         document.form1.text1.focus();
//         return true;
//     }
//     else
//     {
//         alert("You have entered an invalid email address!");
//         document.form1.text1.focus();
//         return false;
//     }
// }

// function validation() {
//     var form = document.getElementById("form");
//     var email = document.getElementById("email").value;
//     var text = document.getElementById("text");
//     var pattern = /^[a-zA-z0-9]+@[^]+\.[a-zA-Z]{2,3}$/;

//     if (email.match(pattern)) {
//         form.classList.add("valid");
//         form.classList.remove("invalid");
//         alert("Valid")
//         text.style.color = "#00ff00";
//     } else {
//         form.classList.remove("valid");
//         form.classList.add("invalid");
//         alert("Invalid Email Address")
//         text.style.color = "#ff0000";
//     }
//     if (email =="") {
//         form.classList.remove("valid");
//         form.classList.remove("invalid");
//         text.innerHTML = "";
//         text.style.color = "#00ff00";
//     }
// }