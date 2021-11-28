var nameData = document.getElementById("name")
var emailData = document.getElementById("email")
var numberData = document.getElementById("number")
var messageData = document.getElementById("message")
var errorMessage= document.getElementsByClassName("errorDiv")


var letterRegex = /^[a-zA-Z]+$/
var emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var numberRegex = /[0-9]/g

var flag = 0




$("#submit-form").submit((e)=>{
     e.preventDefault()
     flag = 0
      checkName()
      checkEmail()
      checkNumber()
      console.log(flag)

      if(flag == 3){
         $.ajax({
             url:"https://script.google.com/macros/s/AKfycbyN_z8kiHHkaaU3I1BN7hsamRZfA0sXqaXiT3gUl8WHpwGwytvMncKT1jBlnZpeTYEY/exec",  
             data:$("#submit-form").serialize(),
             method:"post",
             success:function (response){
                 alert("Form submitted successfully")
                 window.location.reload()
                 //window.location.href="https://google.com"
             },
             error:function (err){
                 alert("Something Error")

             }
         })
      }

 })

function checkName() {
    console.log("checkname")
    if (nameData.value == "") {
        errorMessage[0].innerHTML="Enter Name"

    } else if (nameData.value.trim() == false) {
        errorMessage[0].innerHTML="Space Not Allowed"

    } else if (letterRegex.test(nameData.value) == false) {
        errorMessage[0].innerHTML="Input Charecters"

    } else {
        errorMessage[0].innerHTML = ""
        flag += 1
    }
}

function checkEmail() {

    if (emailData.value == "") {
        errorMessage[1].innerHTML="Enter Email"     

    } else if (emailData.value.trim() == false) {
        errorMessage[1].innerHTML="Space Not Allowed"

    } else if (emailRegex.test(emailData.value) == false) {
        errorMessage[1].innerHTML="Input Valid Email Address"

    } else {
        errorMessage[1].innerHTML = ""
        flag += 1
    }
}
function checkNumber() {

    if (numberData.value == "") {
        errorMessage[2].innerHTML="Enter Number"

    } else if (numberData.value.trim() == false) {
        errorMessage[2].innerHTML="Space Not Allowed"

    } else if (numberRegex.test(numberData.value) == false) {
        errorMessage[2].innerHTML="Enter Numbers"

    } else {
        errorMessage[2].innerHTML = ""
        flag += 1
    }
}

