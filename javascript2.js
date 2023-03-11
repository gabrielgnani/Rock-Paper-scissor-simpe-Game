function Game(){
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  // Assign the appropriate image based on the random numbers
  let image1 = "";
  if(random1 === 1){
    image1 = "rock.png";
  } else if(random1 === 2){
    image1 = "paper.png";
  } else {
    image1 = "scissors.png";
  }

  let image2 = "";
  if(random2 === 1){
    image2 = "rock.png";
  } else if(random2 === 2){
    image2 = "paper.png";
  } else {
    image2 = "scissors.png";
  }
  let imageSource1 = "img/" + image1;
  let imageSource2 = "img/" + image2;

  // Update images
  document.querySelectorAll("img")[0].setAttribute("src", imageSource1);
  document.querySelectorAll("img")[1].setAttribute("src", imageSource2);

  // Print the winner based on the game rules
  let winner = "";
  if(image1 === "rock.png" && image2 === "scissors.png" || 
     image1 === "paper.png" && image2 === "rock.png" || 
     image1 === "scissors.png" && image2 === "paper.png"){
    winner = "Player 1 wins!";
  } else if(image2 === "rock.png" && image1 === "scissors.png" || 
        image2 === "paper.png" && image1 === "rock.png" || 
        image2 === "scissors.png" && image1 === "paper.png"){
    winner = "Player 2 wins!";
  } else {
    winner = "It's a tie!";
  }

  document.querySelector("h2").innerHTML = winner;
}