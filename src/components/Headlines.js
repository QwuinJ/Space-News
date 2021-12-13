import "./Headlines.css";

const Headlines = (props) => {
	return (
		<div className='headline-wrapper'>
			<div className='headline-header-wrapper'>
				<a href={props.url}>
					<h2 className='headline-header'>{props.title}</h2>
				</a>
			</div>
			<div className='headline-content-wrapper'>
				<h3 className='headline-source'>From {props.site}</h3>
				<h3>Published at {props.published}</h3>
				<img alt={props.title} className='headline-image' src={props.image} />
				<p className='headline-summary'>{props.summary}</p>
			</div>
		</div>
	);
};

export default Headlines;
