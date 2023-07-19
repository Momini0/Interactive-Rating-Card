let rating = "";

const handleSubmit = () => {
    document.getElementById("rating-card").style.display = "none";
    document.getElementById("thank-you-card").style.display = "flex";
    document.getElementById("rating").innerHTML = "You Selected " + rating + " out of 5";
}

const handleClick = (ratingNumber) => {

    for(let i=1;i<=5;i++)
    {
        if(i==ratingNumber){
            document.getElementById("buttons").childNodes[i-1].classList.add("active");
            rating = i;
        }
        else{
            document.getElementById("buttons").childNodes[i-1].classList.remove("active");            }
    }
}

const renderButtons  = () => {

    let buttons = document.getElementById("buttons");
    for(let i=1;i<=5;i++)
    {
        let button = document.createElement("div");
        button.innerHTML = i;
        button.addEventListener("click",()=>handleClick(i));
        buttons.appendChild(button);
    }
}

renderButtons();
document.getElementById("submit-button").addEventListener("click",()=>handleSubmit());