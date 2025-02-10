
  function searchFunction() {
    var input = document.getElementById('searchInput').value.toLowerCase(); 
    
   
    var gameCards = document.getElementsByClassName('game-card');
    
   
    for (var i = 0; i < gameCards.length; i++) {
        var cardTitle = gameCards[i].getElementsByClassName('game-title')[0].textContent.toLowerCase();
        
        
        if (cardTitle.indexOf(input) > -1) {
            gameCards[i].style.display = "";
        } else {
            gameCards[i].style.display = "none";
        }
    }
}



function showThankYou(event) {
    event.preventDefault(); 
    document.getElementById("contact-form").reset();

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your form has been sent",
        showConfirmButton: false,
        timer: 1500
      });
  }

  function showThankYou2(event) {
    event.preventDefault(); 
    document.getElementById("contact-form").reset();

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Muvaffaqqiyatli yuborildi",
        showConfirmButton: false,
        timer: 1500
      });
  }