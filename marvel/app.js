function renderCard() {
     marvel.forEach(e => {
        document.querySelector("#container").innerHTML += 
         
        `
        <div class="card"> 
        <img src="${e.image}   width="200px" heigth="230px"   >
        <p> Hero name: ${e.name} </p>
        <p> Real name: ${e.realname} </p> 
        
        
        </div>
        
    
        `
        
        })
};
renderCard();













