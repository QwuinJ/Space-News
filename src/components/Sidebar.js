import './Sidebar.css';

const SideBar = (props) => {
	return (
		<div className='top-wrapper'>
			<ProgQuotes quote={props.quote} author={props.quoteAuth} />
			<DadJokes joke={props.joke} id={props.jokeKey} />
		</div>
	);
};

const ProgQuotes = (props) => {
	return (
		<div className='quote-wrapper'>
			<h3 className='quote-content'>"{props.quote}"</h3>
			<p className='quote-author'>--{props.author}</p>
		</div>
	);
};

const DadJokes = (props) => {
	return (
		<div className='dad-joke-wrapper'>
			<h3 className='dad-joke-content'>"{props.joke}"</h3>
			<p>Dad joke of the day</p>
		</div>
	);
};

export default SideBar;
