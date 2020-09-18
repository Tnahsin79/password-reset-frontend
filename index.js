var maindiv=document.createElement("div");
maindiv.setAttribute("class","container");

var h1=document.createElement("h1");
h1.setAttribute("class","display-1");
h1.innerText="WELCOME";

var a1=document.createElement("a")
a1.setAttribute("href","signup.html");
var signButton=document.createElement("btn");
signButton.setAttribute("class","btn btn-primary");
signButton.innerText="SIGNUP";
a1.appendChild(signButton);

var br=document.createElement("br");

var a2=document.createElement("a")
a2.setAttribute("href","login.html");
var loginButton=document.createElement("btn");
loginButton.setAttribute("class","btn btn-primary");
loginButton.innerText="LOGIN";
a2.appendChild(loginButton);

maindiv.appendChild(h1);
maindiv.appendChild(a1);
maindiv.appendChild(br);
maindiv.appendChild(a2);
document.body.appendChild(maindiv);