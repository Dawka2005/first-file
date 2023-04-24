    const signUpDiv = document.querySelector("#create"); 

    const signInDiv = document.querySelector("#signIn")

    const switchInBtn = document.querySelector("#switch")






    switchInBtn.onclick = () => {
            signUpDiv.classList.toggle("hide");
            signInDiv.classList.toggle("hide");
}