let rating;
function getValue() {
  let reviewChildren = document.querySelectorAll(".review-container");
  let container = document.querySelector(".container");
  let yourRating = document.querySelector(".your-rating");

  rating = document.querySelector('input[name="rating"]:checked').value;

  if (rating) {
    console.log(Array.from(reviewChildren)[0]);
    container.style.transform = "rotateY(-180deg)";

    yourRating.innerHTML = `You selected ${rating} out of 5`;
  }
  return rating;
}
