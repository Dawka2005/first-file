const input = document.querySelector("#pin");
const btn = document.querySelector("#btn");


function checkPin(){ 

if(input.value.length !=4){
    alert("пин код 4 оронтой байхыг анхаарна уу !") ; 
}else{
    if(input.value == 1234){

        location.href = "./choose.html" ;

    }else{
        alert("таны пин код буруу байна дахин оролдоно уу") ; 
    }
  }
}


btn.addEventListener("click" , ()=> {
    alert()
    checkPin(); 
})
    




