var maindiv=document.createElement("div");
maindiv.setAttribute("class","container");

var h1=document.createElement("h1");
h1.setAttribute("class","display-1");
h1.innerText="WELCOME";

var signButton=document.createElement("btn");
signButton.setAttribute("class","btn btn-primary");
signButton.innerText="SIGNUP";

var br=document.createElement("br");

var loginButton=document.createElement("btn");
loginButton.setAttribute("class","btn btn-primary");
loginButton.innerText="LOGIN";

maindiv.appendChild(h1);
maindiv.appendChild(signButton);
maindiv.appendChild(br);
maindiv.appendChild(loginButton);
document.body.appendChild(maindiv);