var maindiv=document.createElement("div");
maindiv.setAttribute("class","container");

var h1=document.createElement("h1");
h1.setAttribute("class","display-1");
h1.innerText="LOGIN PAGE";

var formdiv=document.createElement("div");
formdiv.setAttribute("class","container-fluid");

var form=document.createElement("form");
form.setAttribute("onsubmit","login();return false;");
var email=document.createElement("input");
email.setAttribute("type","text");
email.setAttribute("id","email");
email.setAttribute("required",true);
email.setAttribute("class","form-control");
email.setAttribute("placeholder","ENTER EMAIL");
var br1=document.createElement("br");
var pwd=document.createElement("input");
pwd.setAttribute("type","password");
pwd.setAttribute("id","pwd");
pwd.setAttribute("required",true);
pwd.setAttribute("class","form-control");
pwd.setAttribute("placeholder","ENTER PASSWORD");
var br2=document.createElement("br");
var button=document.createElement("button");
button.setAttribute("class","btn btn-primary");
button.setAttribute("type","submit");
button.innerText="LOG IN";
formdiv.appendChild(form);
form.appendChild(email);
form.appendChild(br1);
form.appendChild(pwd);
form.appendChild(br2);
form.appendChild(button);

maindiv.appendChild(h1);
maindiv.appendChild(formdiv);
document.body.appendChild(maindiv);

async function login()
{
    try
    {
        //alert("working");
    }
    catch(error)
    {
        alert("try again");
    }
}