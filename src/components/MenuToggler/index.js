import React from 'react';
import PropTypes from 'prop-types';
import './menutoggler.css';

const MenuToggler = (props) => {
	return (
		<button aria-label="Toggle menu" className="toggler" onClick={props.handleClick}>
			{props.children}
		</button>
	);
};

MenuToggler.propTypes = {
	handleClick: PropTypes.func
};

export default MenuToggler;
