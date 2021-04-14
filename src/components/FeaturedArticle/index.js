import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import './featuredarticle.css';
import { Link } from 'react-router-dom';

const FeaturedArticle = (props) => {
	return (
		<article className="featuredArticle">
			<Link to={`/blog/${props.slug}`}>
				<h3>{props.title}</h3>
			</Link>
			<img src={props.picture} alt={props.altText} />
			<div className="excerpt">{parse(props.excerpt)}</div>
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
	date: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default FeaturedArticle;
