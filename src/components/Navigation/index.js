import React, { useState } from 'react';
import './navigation.css';
import OpenMenuIcon from '../../assets/images/openMenu.svg';
import CloseMenuIcon from '../../assets/images/closeMenu.svg';

const Navigation = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const openIcon = OpenMenuIcon;
	const closeIcon = CloseMenuIcon;

	return (
		<div className="navigation">
			<button className="menuToggler" onClick={() => setOpenMenu(!openMenu)}>
				<img src={openMenu ? closeIcon : openIcon} alt="Toggle menu" />
			</button>
			<nav className={openMenu ? 'nav active' : 'nav'}>
				<ul className="menu">
					<li>Home</li>
					<li>Reviews</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navigation;
