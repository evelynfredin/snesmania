import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import './article.css';

const Article = (props) => {
	return (
		<article className="article-list">
			<div className="article-list--col1">
				<img src={props.picture} alt={props.altText} />
			</div>
			<div className="article-list--col2">
				<h3>{props.title}</h3>
				<div className="article-list--excerpt">{parse(props.excerpt)}</div>
				<div className="article-list--meta">
					<p className="article-list--date">Published on: {props.date}</p>
					<a className="article-list--more" href="#">
						Read more{' '}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="arrow"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
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
	date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	excerpt: PropTypes.string
};

export default Article;
