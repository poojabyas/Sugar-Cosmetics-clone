let form = document.querySelector("form")

let data;

function loadData(){
    let savedData =JSON.parse(localStorage.getItem("data"))
    if(savedData){
        data = savedData
    }
}

function handleFormSubmit(e){
    e.preventDefault()

    let targetElement = e.target

    let email = targetElement[0].value
    let password = targetElement[1].value
    console.log(data)
    let narr = data.filter(function(ele,i){
        return(ele.email===email)&&(ele.password===password)
    })

    // [{}]
    if (narr.length>0){
        localStorage.setItem("loggedStatus",JSON.stringify({status:true,username:narr[0].user}))
        alert("Login Successfully")
        window.location.href ="./home.html"
    }else{
        alert("Wrong")
    }
}


form.addEventListener("submit", function(event){
    handleFormSubmit(event)
})
loadData()