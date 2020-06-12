let validate = function(callback)
{
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if(username == "")
            {
            document.getElementById('3').innerHTML ="**please fill the username field";
            document.getElementById('username').style.border="2px solid red";
            document.getElementById('3').style.color="red";
            return false;
            }
    
    else if(password == "")
            {
            document.getElementById('4').innerHTML ="**please fill the password field";
            document.getElementById('password').style.border="2px solid red";
            document.getElementById('4').style.color="red";
            return false;
            }

    else if(username == "admin" && password == "12345")
            {
                    document.getElementById('username').style.border="2px solid green";
                    document.getElementById('password').style.border="2px solid green";
                    callback();
                    return false;
                   
                }
    else
                {
                    document.getElementById('username').style.border="2px solid red";
                    document.getElementById('password').style.border="2px solid red";
                    return false;
                }
} 
let x = function()
    {
        window.location = "index.html";
    }      
        
        
