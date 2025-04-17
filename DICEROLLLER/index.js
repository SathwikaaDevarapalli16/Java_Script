function rollDice(){
    const numofDice = document.getElementById("numofDice").value;
    const diceresult = document.getElementById("diceresult");
    const diceimages = document.getElementById("diceimages");
    const values = [];
    const images=[];
    for(let i = 1; i <= numofDice; i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }
    diceresult.textContent = `dice: ${values.join(', ')}`;
    diceimages.innerHTML = images.join('');


}