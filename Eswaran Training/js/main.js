// JS Database
var user =  {
    "username":"eswar",
    "email":"eswar@gmail.com",
    "password":"12345",
  }

// Login Form Auth
{
  try {
    document.getElementById('loginForm').addEventListener('submit',function(event) {
        event.preventDefault();
    
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let  emailFeedBack = document.getElementById('emailFeedBack');
        emailFeedBack.style.marginBottom = "4px";
        
        if(user.email == email && user.password == password){
            emailFeedBack.innerHTML = "Login Successfully";
            emailFeedBack.style.color = "green";
            window.location.href = '/home page/home.html';
        }else{
          emailFeedBack.innerHTML = "Email / Password Incorrect";
          emailFeedBack.style.color = "red";
        }
    });
    } catch (error) {
      console.log(error);
    }
}

// Register Form Auth
{
  try {
    document.getElementById('regForm').addEventListener('submit',function(event) {
        event.preventDefault();
        let username = document.getElementById("username").value
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        let conpassword = document.getElementById("conpassword").value
         
        if (password === conpassword) {
          window.location.href = "index.html";
        }else{
          console.log("Password dose't Match");
        }

        console.log(user);
    });
    } catch (error) {
      console.log(error);
    }
}

var myError = document.getElementById("myError");
try {
  myError.innerHTML = "No Error Found";
  myError.style.color = "green"; 
} catch (error) {
  myError.innerHTML = error;
  myError.style.color = "red";
}

//----------------------------- Loading Design ---------------------------


