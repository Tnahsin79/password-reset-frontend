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
var br3=document.createElement("br");
var forgot=document.createElement("button");
forgot.setAttribute("class","btn btn-primary");
//forgot.setAttribute("type","submit");
forgot.setAttribute("onclick","forgotPwd()");
forgot.innerText="FORGOT PASSWORD";

form.appendChild(email);
form.appendChild(br1);
form.appendChild(pwd);
form.appendChild(br2);
form.appendChild(button);
//form.appendChild(br3);
//form.appendChild(forgot);
formdiv.appendChild(form);
formdiv.appendChild(br3);
formdiv.appendChild(forgot);

maindiv.appendChild(h1);
maindiv.appendChild(formdiv);
document.body.appendChild(maindiv);

async function login()
{
    try
    {
        var data={
            email:document.getElementById("email").value,
            password:document.getElementById("pwd").value
        }
        let temp=await fetch("https://user-login-fs.herokuapp.com/users/login",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        });
        //console.log(temp);
        alert("Data sent");
    }
    catch(error)
    {
        console.log(error);
        alert("try again");
    }
}