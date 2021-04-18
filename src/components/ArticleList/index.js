import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import './article.css';
import { Link } from 'react-router-dom';

const ArticleList = (props) => {
	return (
		<article className="article-list">
			<div className="article-list--col1">
				<Link to={`/blog/${props.id}`}>
					<img src={props.picture} alt={props.altText} />
				</Link>
			</div>
			<div className="article-list--col2">
				<Link to={`/blog/${props.id}`}>
					<h3>{props.title}</h3>
				</Link>
				<div className="article-list--excerpt">{parse(props.excerpt)}</div>
				<div className="article-list--meta">
					<p className="article-list--date">Published on: {props.date}</p>
					<Link to={`/blog/${props.id}`}>
						<p className="article-list--link">
							Read more
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
						</p>
					</Link>
				</div>
			</div>
		</article>
	);
};

ArticleList.propTypes = {
	picture: PropTypes.string,
	altText: PropTypes.string,
	title: PropTypes.string,
	author: PropTypes.string,
	date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	excerpt: PropTypes.string,
	id: PropTypes.number
};

export default ArticleList;
