//Реализация лоадера
var delay, delayForList;

function loadPage() {
  delay = setTimeout(showPage, 1000);
  delayForElements = setTimeout(showElements, 1400);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("head").style.display = "block";
}
function showElements(){
  document.getElementById("list").style.display = "block";
  document.getElementById("theme-button").style.display = "block";
}



//Реализация переключения цветовой темы
var btn = document.getElementById("theme-button");
var btnIndex = document.getElementById("theme-button-index");
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
    Request.open("GET", "./styles.php?theme=" + theme, true);
    Request.send();
}
