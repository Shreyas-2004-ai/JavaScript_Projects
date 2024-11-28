function rolldice(){
    const no_of_dice=document.getElementById("dicenum").value;
    const dice_result=document.getElementById("diceresult");
    const dice_images=document.getElementById("diceimages");
    const values=[];
    const images=[];

    for(i=0;i<no_of_dice;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value)
        images.push(`<img src="./images/${value}.png">`);
    }
    dice_result.textContent=`Dice Result:${values.join(", ")}`;
    dice_images.innerHTML=images.join(" ");
}