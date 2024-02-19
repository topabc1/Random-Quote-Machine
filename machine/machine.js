document.addEventListener("DOMContentLoaded", () => {
  
    const button = document.querySelector("#new-quote");
    const textEl = document.querySelector("#text");
    const authorEl = document.querySelector("#author");
    const rootEl = document.querySelector(":root");
    const allEl = document.querySelector("*");
    const time = 500;
    
    let current = {
      quote: "",
      author: "",
      color: ""
    }
    
    class Quote {
      constructor(quote, author) {
        this.quote = quote,
        this.author = author
      }
    }
    
    const colors = ["#B76D68", "#B78668", "#B7B268", "#A1B768", "#85B768", "#68B768", "#68B79A", "#68A4B7", "#686FB7", "#AB68B7"];
    
    const quote1 = new Quote("If you do what you’ve always done, you’ll get what you’ve always gotten.", "Tony Robbins");
    const quote2 = new Quote("You can’t use up creativity. The more you use, the more you have.", "Maya Angelou");
    const quote3 = new Quote("Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", "Robert Frost");
    const quote4 = new Quote("If the wind will not serve, take to the oars.", "Latin Proverb");
    const quote5 = new Quote("Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.", "Jamie Paolinetti");
    const quote6 = new Quote("Build your own dreams, or someone else will hire you to build theirs.", "Farrah Gray");
    const quote7 = new Quote("Challenges are what make life interesting and overcoming them is what makes life meaningful.", "Joshua J. Marine");
    const quote8 = new Quote("Whether you think you can or you think you can’t, you’re right.", "Henry Ford");
    const quote9 = new Quote("Nothing is impossible, the word itself says, “I’m possible!”", "Audrey Hepburn");
    const quote10 = new Quote("Your time is limited, so don’t waste it living someone else’s life.", "Steve Jobs");
    const quote11 = new Quote("Be yourself; everyone else is already taken.", "Oscar Wilde");
    const quote12 = new Quote("I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.", "Marilyn Monroe");
    const quote13 = new Quote("So many books, so little time.", "Frank Zappa");
    const quote14 = new Quote("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein");
    const quote15 = new Quote("A room without books is like a body without a soul.", "Marcus Tullius Cicero");
    const quote16 = new Quote("Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", "Bernard M. Baruch");
    const quote17 = new Quote("You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", "William W. Purkey");
    const quote18 = new Quote("You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Dr. Seuss");
    const quote19 = new Quote("You only live once, but if you do it right, once is enough.", "Mae West");
    const quote20 = new Quote("Be the change that you wish to see in the world.", "Mahatma Gandhi");
    const quotes = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10, quote11, quote12, quote13, quote14, quote15, quote16, quote17, quote18, quote19, quote20];
    /* start ********************/
    undisplay();
    display();
    /* update **********************/
    button.addEventListener("click", () => {
      undisplay();
      setTimeout(display, time)
    })
    
    function display() {
      textEl.innerHTML = "<span><i class='fa-solid fa-quote-left'></i></span>" + current.quote;
      textEl.setAttribute("style", "opacity: 100%");
      authorEl.innerHTML = `- ${current.author}`;
      authorEl.setAttribute("style", "opacity: 100%");
    }
    
    function undisplay() {
      let random = Math.floor(Math.random() * quotes.length);
      let randomColor = Math.floor(Math.random() * colors.length);
      
      current.quote = quotes[random].quote;
      current.author = quotes[random].author;
      current.color = colors[randomColor];
      
      textEl.setAttribute("style", "opacity: 0%");
      authorEl.setAttribute("style", "opacity: 0%");
      
      allEl.setAttribute("style", `opacity: 0%`);
      rootEl.setAttribute("style", `--color: ${current.color}`);
    }
    
  })