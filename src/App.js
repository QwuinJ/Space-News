import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Headlines from "./components/Headlines";
import SideBar from "./components/Sidebar";

function App() {
  const [news, setNews] = useState([]);
  const newsGetter = async () =>{
    const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
    const info = await response.json();
    setNews(info)
  };
  
  const [catFact, setCatFact] = useState("");
  const catFactGetter = async () =>{
    const result = await fetch("https://cat-fact.herokuapp.com/facts/random")
    console.log(result);
    const info = result.json();
    setCatFact(info)
    console.log(info)
    console.log(catFact.text);
  }

  const [quote, setQuote] = useState("");
  const quoteGetter = async () =>{
    const response = await fetch("https://programming-quotes-api.herokuapp.com/quotes/random");
    const info = await response.json();
    setQuote(info)
  }

  const [dadJoke, setDadJoke] = useState("");
  const dadJokeGetter = async () =>{
    const headers = new Headers();
    headers.append("Accept", "application/json");
    const response = await fetch("https://icanhazdadjoke.com/", {
      headers
    })
    const info = await response.json();
    setDadJoke(info)
  }


  useEffect(()=>{
    newsGetter();
    catFactGetter();
    quoteGetter();
    dadJokeGetter();
  },[])

	return (
		<div className='App'>
			<Header />
      <div className="main-site-wrapper">
      <div>
        <SideBar
          quote={quote.en}
          quoteAuth={quote.author}
          joke={dadJoke.joke}
          jokeKey={dadJoke.id}
          catFact={catFact.text}
        />
      </div>
      <div>
      {news.map((news, index)=>{
        return (
          <Headlines
            key={index}
            title={news.title}
            image={news.imageUrl}
            summary={news.summary}
            site={news.newsSite}
            published={news.publishedAt}
            url={news.url}
          />
        )
      })}
      </div>
      </div>
		</div>
	);
}



export default App;
