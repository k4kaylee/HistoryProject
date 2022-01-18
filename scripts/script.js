//Реализация лоадера
var delay, delayForList;

function myFunction() {
  delay = setTimeout(showPage, 1000);
  delayForList = setTimeout(showList, 1400);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("head").style.display = "block";
}
function showList(){
  document.getElementById("list").style.display = "block";
}
