var maindiv=document.createElement("div");
maindiv.setAttribute("class","container");

var h1=document.createElement("h1");
h1.setAttribute("class","display-1");
h1.innerText="RESET PASSWORD";

var formdiv=document.createElement("div");
formdiv.setAttribute("class","container-fluid");

var form=document.createElement("form");
form.setAttribute("onsubmit","reset();return false;");
var email=document.createElement("input");
email.setAttribute("type","text");
email.setAttribute("id","email");
email.setAttribute("required",true);
email.setAttribute("class","form-control");
email.setAttribute("placeholder","ENTER EMAIL");
var br1=document.createElement("br");
var newpwd=document.createElement("input");
newpwd.setAttribute("type","password");
newpwd.setAttribute("id","newpwd");
newpwd.setAttribute("required",true);
newpwd.setAttribute("class","form-control");
newpwd.setAttribute("placeholder","ENTER NEW PASSWORD");
var br2=document.createElement("br");
var cnfpwd=document.createElement("input");
cnfpwd.setAttribute("type","password");
cnfpwd.setAttribute("id","cnfpwd");
cnfpwd.setAttribute("required",true);
cnfpwd.setAttribute("class","form-control");
cnfpwd.setAttribute("placeholder","CONFIRM PASSWORD");
var br3=document.createElement("br");
var button=document.createElement("button");
button.setAttribute("class","btn btn-primary");
button.setAttribute("type","submit");
button.innerText="RESET PASSWORD";
formdiv.appendChild(form);
form.appendChild(email);
form.appendChild(br1);
form.appendChild(newpwd);
form.appendChild(br2);
form.appendChild(cnfpwd);
form.appendChild(br3);
form.appendChild(button);

maindiv.appendChild(h1);
maindiv.appendChild(formdiv);
document.body.appendChild(maindiv);

async function reset()
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