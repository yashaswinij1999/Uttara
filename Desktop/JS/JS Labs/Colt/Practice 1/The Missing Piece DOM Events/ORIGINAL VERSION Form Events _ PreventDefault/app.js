const form = document.querySelector("form");
const ul = document.querySelector("ul");
const uname = form.elements.uname;
const tweet = form.elements.tweet;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("submitted");
  addTweets(uname, tweet);
});

function addTweets(uname, tweet) {
  const list = document.createElement("li");
  list.innerText = `${uname.value} -  ${tweet.value}`;
  ul.appendChild(list);
  uname.value = "";
  tweet.value = "";
}
