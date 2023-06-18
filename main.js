var card = document.getElementById("card");
function Next()
{
    document.getElementById("h4").innerHTML = "Loading...";
    let sound = new Audio('swoosh.wav');
	sound.play();
    setTimeout(function() {
        window.location.href = "card.html"
    }, 5000);

    
}

