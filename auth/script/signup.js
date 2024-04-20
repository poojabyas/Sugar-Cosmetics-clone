let form = document.querySelector("form");


let data = []

// function saveData(key,arr){
//     localStorage.setItem(key,"data",JSON.stringify(arr))

function saveData(){
    localStorage.setItem("data",JSON.stringify(data))
    
}

function loadData(){
    let savedData =JSON.parse(localStorage.getItem("data"))
    if(saveData){
        data = savedData
    }
}

function handleFormSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior


    let targetElement = e.target
    console.log(targetElement)

    let username = targetElement[0].value
    let email = targetElement[1].value
    let password = targetElement[2].value
    let confirm = targetElement[3].value

   

    if (password == confirm) {
        let obj = {
            username: username,
            email: email,
            password: password
        };
         data.push(obj)
         console.log(data)
         alert("registration successful")
         window.location.href="Login.html"
       
        saveData(obj);
        // console.log("User data saved:", obj);
        // alert("Registration successful!");
        // window.location.href = "login.html";
    } else {
        alert("Passwords do not match.");
    }
}

form.addEventListener("submit", handleFormSubmit);
loadData()