import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

const index = (props) => {
	return (
		<article>
			<h3>{props.title}</h3>
			<img src={props.picture} alt={props.altText} />
			<div>{parse(props.content)}</div>
		</article>
	);
};

index.propTypes = {
	title: PropTypes.string,
	picture: PropTypes.string,
	altText: PropTypes.string,
	content: PropTypes.string
};

export default index;
