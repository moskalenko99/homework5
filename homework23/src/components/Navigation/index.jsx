import React from 'react';
import {
Link
} from "react-router-dom";

import cat from './../../assets/image/cat-icon.png';
import dog from './../../assets/image/dog-icon.png';
import mouse from './../../assets/image/mouse-icon.png';
import fish from './../../assets/image/fish-icon.png';
import chicken from './../../assets/image/chicken-icon.png';
import pig from './../../assets/image/pig-icon.png';

import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

class Navigation extends React.Component{
	render() {
		return (
			<nav className="Navigation">
				<div className="header__bottom">
					<div className="menu-item">
						<Link to="/cat">
							<img src={cat} alt="cat" />
						</Link>
					</div>
					<div className="menu-item">
						<Link to="/dog">
							<img src={dog} alt="dog" />
						</Link>
					</div>
					<div className="menu-item">
						<Link to="/mouse">
							<img src={mouse} alt="mouse" />
						</Link>
					</div>
					<div className="menu-item">
						<Link to="/fish">
							<img src={fish} alt="fish" />
						</Link>
					</div>
					<div className="menu-item">
						<Link to="/chicken">
							<img src={chicken} alt="bird" />
						</Link>
					</div>
					<div className="menu-item">
						<Link to="/pig">
							<img src={pig} alt="farm_animal" />
						</Link>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navigation;