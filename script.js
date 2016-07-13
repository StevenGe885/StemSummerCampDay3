console.log('Where is console?');
//document.write('Hello World'); //you cant see me

var a = 1;
var b = 2;
var c = a+b;
console.log('a+b='+c);

function changeTextColorTianyi() {
    document.getElementById("container").style.color = "#66ccff";
}
function changeTextColorMiku() {
    document.getElementById("container").style.color = "#66ffcc";
}
function changeTextColorMaki() {
    document.getElementById("container").style.color = "#ff0000";
}
function changeTextColorBack() {
    document.getElementById("container").style.color = "#000000";
}

function getName() {
    var firstName = document.getElementById("userFirstName").value;
    var lastName = document.getElementById("userLastName").value;
    var fullName = firstName + " " + lastName;
    console.log(fullName);
    document.getElementById("userName").textContent = fullName;
    document.getElementById("userName2").textContent = fullName;
    if (fullName === "Steven Ge"){
        alert('Hello World!');
    }
}
