import React from 'react';
import PropTypes from 'prop-types';
import './article.css';

const Article = (props) => {
	return (
		<article className="article-list">
			<div className="article-list--col1">
				<img src={props.picture} alt={props.altText} />
			</div>
			<div className="article-list--col2">
				<h3>{props.title}</h3>
				<div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
				<div className="metadata">
					<p>By {props.author} </p>
					<p>{props.date}</p>
				</div>
			</div>
		</article>
	);
};

Article.propTypes = {
	picture: PropTypes.string,
	altText: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
	date: PropTypes.string,
	children: PropTypes.string
};

export default Article;
