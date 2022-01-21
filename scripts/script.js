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



//Реализация переключения цветовой темы
var btn = document.getElementById("theme-button");
var link = document.getElementById("theme-link");

btn.addEventListener("change", function () { ChangeTheme(); });

function ChangeTheme()
{
    let lightTheme = "styles/light.css";
    let darkTheme = "styles/dark.css";

    var currTheme = link.getAttribute("href");
    var theme = "";

    if(currTheme == lightTheme)
    {
   	 currTheme = darkTheme;
   	 theme = "dark";
    }
    else
    {
   	 currTheme = lightTheme;
   	 theme = "light";
    }

    link.setAttribute("href", currTheme);

    Save(theme);
}

function Save(theme)
{
    var Request = new XMLHttpRequest();
    Request.open("GET", "./themes.php?theme=" + theme, true); //У вас путь может отличаться
    Request.send();
}
