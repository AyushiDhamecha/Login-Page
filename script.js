var userobj = [
    {
        username: "Ayushi",
        password: "123456",
    },
    {
        username: "Hemangi",
        password: "hsd18",
    },
    {
        username: "mansi",
        password: "md12",
    }
]

function authenticate() {
    var username = document.getElementById('uname').value;
    var password = document.getElementById('pass').value;
    if (username === '' || password === '') {
        alert("You must fill the form");
        return false;
    }
    for (let i = 0; i < userobj.length; i++) {
        if (userobj[i].username == username && userobj[i].password == password) {
            console.log("you are logged in");

            document.getElementById('success').innerHTML = "You are Logged in";
            return false;
        }
    }
    console.log("Please Enter the correct username and password");
    document.getElementById('error').innerHTML = "Please Enter the correct username and password";
    return false;
}

function reset() {
    document.getElementsById('error').style.visibility = 'hidden';
    down.innerHTML = "Element is hidden";
}