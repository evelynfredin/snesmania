import React from 'react';
import PropTypes from 'prop-types';
import './title.css';

const index = (props) => {
	return (
		<div className="page-title">
			<div className={props.cname}></div>
			<h2>{props.title}</h2>
		</div>
	);
};

index.propTypes = {
	cname: PropTypes.string,
	tittle: PropTypes.string
};

export default index;
