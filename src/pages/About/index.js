import React from 'react';
import parse from 'html-react-parser';
import GetBlogData from '../../functions/GetBlogData';
import './about.css';

const About = () => {
	const { data, isLoading, error } = GetBlogData('wp/v2/pages');
	const aboutInfo = data[0];
	return (
		<div className="about">
			<div className="container">
				{isLoading && <div className="message">Loading page...</div>}
				{error && <div className="message">{error}</div>}
				{aboutInfo && (
					<>
						<h2>{aboutInfo.title.rendered}</h2>
						<div>{parse(aboutInfo.content.rendered)}</div>
					</>
				)}
			</div>
		</div>
	);
};

export default About;
