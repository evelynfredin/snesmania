import React from 'react';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
	const { slug } = useParams();
	return (
		<div>
			<h2>Blog deets {slug}</h2>
		</div>
	);
};

export default SingleBlog;
