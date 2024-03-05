let body = document.body;
 
function handleClick() {
 console.log("Body clicked");
}
 
body.onclick = handleClick;
 
body.addEventListener("click", handleClick);