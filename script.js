const images =[
    "./images/business-reaching-leadership-achievement.jpg",
    "./images/crisis-hardship-burden-concept.jpg",
    "./images/earn-money-time-management.jpg",
    "./images/golden-arrow-sign-pointing-onwards.jpg",
    "./images/helping-each-other-top-mountain.jpg",
    "./images/high-self-esteem-concept.jpg",
    "./images/kms.PNG",
    "./images/purpose-achiever-vision-concept.jpg",
    "./images/security-protection-concept.jpg"
];
const imagesEl = document.querySelectorAll("img");
const btn = document.querySelector("button");

btn.addEventListener("click",()=>{
    shuffle(images);
    for (let i=0; i<9; i++){
        imagesEl[i].src = images[i];
    }
})

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }