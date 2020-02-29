import React from 'react';
import {
Link
} from "react-router-dom";
import Navigation from '../Navigation';


import kitten from './../../assets/image/kitten.png';
import grandorf from './../../assets/image/grandorf-pack.png';

import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

class Recommendations extends React.Component{

	render(){
		return(
			<div className="menu">
				<div className="kitten">
					<img src={kitten} alt="kitten" />
				</div>
				<div className="button-buy">
					<button className="button"></button>
				</div>
				<div className="item-list">
					<div className="grandorf-image">
						<img src={grandorf} alt="grandorf" />
					</div>
					<div className="description">
						<span className="range">
							в ассортименте <br /> 400г, 700г, 800г
						</span>
						<div className="buy">
							<button></button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Recommendations;