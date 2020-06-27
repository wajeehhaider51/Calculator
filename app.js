function getNumber(num){
    var result = document.getElementById("textArea");
    result.value += num;
}
function clearResult(){
    var result = document.getElementById("textArea");
    result.value = "";
}
function getResult(){
    var result = document.getElementById("textArea");
    result.value = eval(result.value);
}