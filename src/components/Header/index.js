import React, { useState, useEffect } from 'react';
import Logo from '../Logo';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import MenuToggler from '../MenuToggler';
import OpenMenuIcon from '../../assets/images/openMenu.svg';
import CloseMenuIcon from '../../assets/images/closeMenu.svg';
import './header.css';

const Header = (props) => {
	const [openMenu, setOpenMenu] = useState(false);
	const openIcon = OpenMenuIcon;
	const closeIcon = CloseMenuIcon;
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname !== '404') setOpenMenu(false);
	}, [pathname]);

	return (
		<header className="container">
			<div className="logo-container">
				<Link to={'/'}>
					<Logo size="img-sm" />
				</Link>
				<MenuToggler handleClick={() => setOpenMenu(!openMenu)}>
					<img src={openMenu ? closeIcon : openIcon} alt="Toggle menu" className="toggler" />
				</MenuToggler>
			</div>
			<nav className={openMenu ? 'nav active' : 'nav'}>
				<ul className="menu">
					<Link to={'/'}>
						<li>Home</li>
					</Link>
					<Link to={'/reviews'}>
						<li>Reviews</li>
					</Link>
					<Link to={'/about'}>
						<li>About</li>
					</Link>
					<li>
						<button className="bulbContainer" aria-label="Toggle theme" onClick={props.handleClick}>
							{' '}
							🌓
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

Header.propTypes = {
	handleClick: PropTypes.func
};

export default Header;
