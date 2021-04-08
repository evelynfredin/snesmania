import React from 'react';
import PropTypes from 'prop-types';
import './featuredarticle.css';

const FeaturedArticle = (props) => {
	return (
		<article className="featuredArticle">
			<h3>{props.title}</h3>
			<img src={props.picture} alt={props.altText} />
			<p className="excerpt">{props.excerpt}</p>
			<div className="metadata">
				<p>By {props.author} </p>
				<p>{props.date}</p>
			</div>
		</article>
	);
};

FeaturedArticle.propTypes = {
	title: PropTypes.string,
	picture: PropTypes.string,
	altText: PropTypes.string,
	excerpt: PropTypes.string,
	author: PropTypes.string,
	date: PropTypes.string
};

export default FeaturedArticle;
