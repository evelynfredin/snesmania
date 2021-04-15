import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import './articlesingle.css';

const ArticleSingle = (props) => {
	return (
		<article className="single-article container">
			<img src={props.picture} alt={props.altText} />
			<h2>{props.title}</h2>

			<div className="single-article--content">
				<div className="single-article--col1">{parse(props.content)}</div>

				<div className="single-article--meta">
					<ul>
						<li className="single-article--field">
							Rating: <span>{props.rating}</span>
						</li>
						<li className="separator">·</li>
						<li className="single-article--field">
							Genre: <span>{props.genre}</span>
						</li>
						<li className="separator">·</li>
						<li className="single-article--field">
							Publisher: <span>{props.publisher}</span>
						</li>
						<li className="separator">·</li>
						<li className="single-article--field">
							Release year: <span>{props.year}</span>
						</li>
					</ul>
				</div>
			</div>
		</article>
	);
};

ArticleSingle.propTypes = {
	title: PropTypes.string,
	picture: PropTypes.string,
	altText: PropTypes.string,
	content: PropTypes.string,
	rating: PropTypes.string,
	genre: PropTypes.string,
	publisher: PropTypes.string,
	year: PropTypes.string
};

export default ArticleSingle;
