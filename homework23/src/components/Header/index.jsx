import React from 'react';
import {
Link
} from "react-router-dom";
import Navigation from './../Navigation';

import logo from './../../assets/image/logo-final-1.png';
import phone from './../../assets/image/phone-icon.png';
import location from './../../assets/image/location-icon.png';
import search from './../../assets/image/search-icon.png';
import user from './../../assets/image/user-icon.png';
import cart from './../../assets/image/cart-icon.png';

import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component{

	render(){
		return(
			<header>
				<div className="header">
					<div className="header__top">
						<div className="logo">
							<Link to="/">
							<img src={logo} alt="logo" />
							</Link>
						</div>
						<div className="contacts">
							<div className="contacts-numder">
								<a href="#" className="number">
									<img src={phone} alt="phone" />
									+7 (4872) 71-71-71
								</a>
							</div>
							<div className="contacts-address">
								<a href="#" className="address">
									<img src={location} alt="location" />
									г. Тула, ул. Пузакова, 44
								</a>
							</div>
						</div>
						<div className="header__search">
							<input type="text" placeholder="Поиск по товарам" />
							<div className="search">
								<img className="search-icon" src={search} alt="search" />
								<a href="#">Найти</a>
							</div>
						</div>
						<Link className="private__cabinet" to="/cabinet">
							<div class="header__private__cabinet">
								<div class="user">
									<img class="user__icon" src={user} alt="user" />
								</div>
								<div class="private">
									<a class="private__cabinet">Личный кабинет</a>
								</div>
							</div>
						</Link>
						<Link className="cart" to="/cart">
							<div className="header__cart">
								<div className="cart">
									<img className="cart__icon" src={cart} alt="cart" />
								</div>
								<div className="cart">
									<a className="cart__link">Корзина</a>
								</div>
							</div>
						</Link>
					</div>
					<Navigation />
				</div>
			</header>
		);
	}
}

export default Header;