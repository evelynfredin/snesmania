import Logo from '../Logo';
import Navigation from '../Navigation';
import './header.css';

const Header = () => {
	return (
		<header className="container">
			<Logo />
			<div>
				<Navigation />
			</div>
		</header>
	);
};

export default Header;
