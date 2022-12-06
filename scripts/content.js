document.getElementById("without-next-ask").checked = true;
var link = document.getElementsByClassName("btn content__goto-link")[0].href;
link = link.replace("https://oo.pe/", "");
window.open(link, "_self", "noreferrer,noopener,nofollow");