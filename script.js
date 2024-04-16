const URL = "https://api.quotable.io/quotes/random";
const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const new_quote_btn = document.querySelector("#new_quote");
const tweet = document.querySelector("#tweet");

async function get_data() {
    let response = await fetch(URL);
    let data = await response.json();

    quote.innerHTML = data[0].content;
    author.innerHTML = data[0].author;
}

new_quote_btn.addEventListener("click",get_data);


function tweet_quote(){
    window.open("https://twitter.com/intent/tweet?text= " + quote.innerHTML + "  ---by  " + author.innerHTML , "Tweet Window","width=600, height = 350");
}

tweet.addEventListener("click",tweet_quote);