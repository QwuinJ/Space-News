const SideBar = (props) =>{
  return (
    <div>
      <ProgQuotes
       quote={props.quote}
       author={props.quoteAuth}
       />
      <DadJokes
        joke={props.joke}
        id={props.jokeKey}
      />
      <CatFact 
        fact={props.catFact}
      />
    </div>
  )
}

const ProgQuotes = (props) =>{
  return (
    <div>
      <h3>
        {props.quote}
      </h3>
      <p>
        {props.author}
      </p>
      <button>Click for new quote</button>
    </div>
  )
}

const DadJokes = (props) =>{
  return (
    <div>
      <h1>
        {props.joke}
      </h1>
      <button>Get new Dad Joke</button>
    </div>
  )
}

const CatFact = (props) =>{
  return(
    <div>
      <h1>Cat Fact</h1>
      <p>{props.fact}</p>
      <button>Get new fact</button>
    </div>
  )
}

export default SideBar