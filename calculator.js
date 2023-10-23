function doClear(){
    document.getElementById("txtC").value = "";
}
function doCalc(value){
    document.getElementById("txtC").value += value;
}

function switchTheme(changetheme){
    document.getElementById('theme').setAttribute('href', changetheme);
}
