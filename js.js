var one = document.getElementById('btn_one');
one.onclick = function () {
    document.getElementById('one').style.display = "none"
    document.getElementById('two').style.display = "block"
}
var two = document.getElementById('btn_two');
two.onclick = function () {
    document.getElementById('two').style.display = "none"
    document.getElementById('three').style.display = "block"
}
var three = document.getElementById('btn_three');
three.onclick = function () {
    document.getElementById('three').style.display = "none"
    document.getElementById('four').style.display = "block"
}
var four = document.getElementById('btn_four');
four.onclick = function () {
    if (confirm("Are You Sure?") == true) {
        document.getElementById('four').style.display = "none"
        document.getElementById('five').style.display = "block"
    }
}
var back = document.getElementById('btn_back');
back.onclick = function () {
    document.getElementById('three').style.display = "none"
    document.getElementById('four').style.display = "block"
}
var five = document.getElementById('btn_five');
five.onclick = function () {
    document.getElementById('five').style.display = "none"
    document.getElementById('one').style.display = "block"
}