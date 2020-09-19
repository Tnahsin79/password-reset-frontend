var maindiv=document.createElement("div");
maindiv.setAttribute("class","container");

var h1=document.createElement("h1");
h1.setAttribute("class","display-1");
h1.innerText="SIGNUP";

var formdiv=document.createElement("div");
formdiv.setAttribute("class","container-fluid");

var form=document.createElement("form");
form.setAttribute("onsubmit","signup();return false;");
var fname=document.createElement("input");
fname.setAttribute("type","text");
fname.setAttribute("id","fname");
fname.setAttribute("required",true);
fname.setAttribute("class","form-control");
fname.setAttribute("placeholder","ENTER FIRST NAME");
var br1=document.createElement("br");
var lname=document.createElement("input");
lname.setAttribute("type","text");
lname.setAttribute("id","lname");
lname.setAttribute("required",true);
lname.setAttribute("class","form-control");
lname.setAttribute("placeholder","ENTER LAST NAME");
var br2=document.createElement("br");
var email=document.createElement("input");
email.setAttribute("type","text");
email.setAttribute("id","email");
email.setAttribute("required",true);
email.setAttribute("class","form-control");
email.setAttribute("placeholder","ENTER EMAIL");
var br3=document.createElement("br");
var pwd=document.createElement("input");
pwd.setAttribute("type","password");
pwd.setAttribute("id","pwd");
pwd.setAttribute("required",true);
pwd.setAttribute("class","form-control");
pwd.setAttribute("placeholder","ENTER PASSWORD");
var br4=document.createElement("br");
var button=document.createElement("button");
button.setAttribute("class","btn btn-primary");
button.setAttribute("type","submit");
button.innerText="SIGN UP";
formdiv.appendChild(form);
form.appendChild(fname);
form.appendChild(br1);
form.appendChild(lname);
form.appendChild(br2);
form.appendChild(email);
form.appendChild(br3);
form.appendChild(pwd);
form.appendChild(br4);
form.appendChild(button);

maindiv.appendChild(h1);
maindiv.appendChild(formdiv);
document.body.appendChild(maindiv);

async function signup()
{
    try
    {
        var data={
            first_name:document.getElementById("fname").value,
            last_name:document.getElementById("lname").value,
            email:document.getElementById("email").value,
            password:document.getElementById("pwd").value,
            status:false
        }
        let temp=await fetch("https://user-login-fs.herokuapp.com/users/register",{
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