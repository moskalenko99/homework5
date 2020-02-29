import React from 'react';
import Footer from './../../components/Footer';
import Header from './../../components/Header';
import Recommendations from '../../components/Recommendations';

import product from './../../assets/image/product.png';
import rating_0 from './../../assets/image/rating-0.png';
import rating_2 from './../../assets/image/rating-2.png';
import rating_3 from './../../assets/image/rating-3.png';
import rating_4 from './../../assets/image/rating-4.png';
import rating_5 from './../../assets/image/rating-5.png';
import check from './../../assets/image/check-icon.png';
import discount from './../../assets/image/discount.png';
import cost from './../../assets/image/cost.png';

import './styles.scss';
import 'bootstrap/dist/css/bootstrap.css';

class HomePage extends React.Component{
	render(){
		return(
			<React.Fragment>
				<Header />
				<Recommendations />

				<div className="container">
					<div className="row product">

{/*  */}

						<div className="card col-xl col-md-5 product-item">
							<img className="card-img-top" src={product} alt="product" />
							<div className="card-rating">
								<div>
									<img src={rating_3} alt="rating" />
								</div>
								<span>
									<img src={check} alt="check" /> в наличии
								</span>
							</div>
							<p className="card-text">Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак </p>
							<div className="row d-flex justify-content-between weight-product">
								<div>
									<input type="radio" id="c1" name="cc" />
									<label for="c1"><span></span>300гр</label>
								</div>
								<div>
									<input type="radio" id="c2" name="cc" />
									<label for="c2"><span></span>1кг</label>
								</div>
								<div>
									<input type="radio" id="c3" name="cc" />
									<label for="c3"><span></span>2кг</label>
								</div>
								<div>
									<input type="radio" id="c4" name="cc" />
									<label for="c4"><span></span>5кг</label>
								</div>
							</div>
							<div className=" d-flex justify-content-between price">
								<div className="discount">
									<img src={discount} alt="discount" />
								</div>
								<div className="btn-buy">
									<button className="btn"></button>
								</div>
							</div>
						</div>

{/*  */}

						<div className="card col-xl col-md-5 product-item">
							<img className="card-img-top" src={product} alt="product" />
							<div className="card-rating">
								<div>
									<img src={rating_4} alt="rating" />
								</div>
								<span>
									<img src={check} alt="check" /> в наличии
								</span>
							</div>
							<p className="card-text">Сухой корм Hill's Science Plan Adult Large Breed Lamb & Rice для взрослых собак </p>
							<div className="row d-flex justify-content-between price">
								<div className="d-flex align-items-center cost">
									<img src={cost} alt="discount" />
								</div>
								<div className="btn-buy">
									<button className="btn"></button>
								</div>
							</div>
						</div>

{/*  */}

						<div className="card col-xl col-md-5 product-item">
							<img className="card-img-top" src={product} alt="product" />
							<div className="card-rating">
								<div>
									<img src={rating_0} alt="rating" />
								</div>
								<span>
									<img src={check} alt="check" /> в наличии
								</span>
							</div>
							<p className="card-text">Точило Seven Seeds</p>
							<div className="row d-flex justify-content-between price">
								<div className="d-flex align-items-center cost">
									<img src={cost} alt="discount" />
								</div>
								<div className="btn-buy">
									<button className="btn"></button>
								</div>
							</div>
						</div>

{/*  */}

						<div className="card col-xl col-md-5 product-item">
							<img className="card-img-top" src={product} alt="product" />
							<div className="card-rating">
								<div>
									<img src={rating_5} alt="rating" />
								</div>
								<span>
									<img src={check} alt="check" /> в наличии
								</span>
							</div>
							<p className="card-text">Beeztee 2002535 Переноска серая 90*48*60см</p>
							<div className="row d-flex justify-content-between price">
								<div className="d-flex align-items-center cost">
									<img src={cost} alt="discount" />
								</div>
								<div className="btn-buy">
									<button className="btn"></button>
								</div>
							</div>
						</div>

{/*  */}

					</div>
					<div className="row product">

{/*  */}

						<div className="card col-sm product-item">
							<img className="card-img-top" src={product} alt="product" />
							<div className="card-rating">
								<div>
									<img src={rating_0} alt="rating" />
								</div>
								<span>
									<img src={check} alt="check" /> в наличии
								</span>
							</div>
							<p className="card-text">PRO PAC Ultimates Large Breed Chicken & Brown Rice ПРО ПАК для собак</p>
							<div className="d-flex justify-content-between weight-product">
								<div>
									<input type="radio" id="a1" name="aa" />
									<label for="a1"><span></span>300гр</label>
								</div>
								<div>
									<input type="radio" id="a2" name="aa" />
									<label for="a2"><span></span>1кг</label>
								</div>
								<div>
									<input type="radio" id="a3" name="aa" />
									<label for="a3"><span></span>2кг</label>
								</div>
								<div>
									<input type="radio" id="a4" name="aa" />
									<label for="a4"><span></span>5кг</label>
								</div>
							</div>
							<div className="d-flex justify-content-between price">
								<div className="d-flex align-items-center cost">
									<img src={cost} alt="discount" />
								</div>
								<div className="btn-buy">
									<button className="btn"></button>
								</div>
							</div>
						</div>

{/*  */}

						<div className="card col-sm product-item">
							<img className="card-img-top" src={product} alt="product" />
							<div className="card-rating">
								<div>
									<img src={rating_4} alt="rating" />
								</div>
								<span>
									<img src={check} alt="check" /> в наличии
								</span>
							</div>
							<p className="card-text">Royal Groom Роял Грум воск для лап</p>
							<div className="row d-flex justify-content-between price">
								<div className="d-flex align-items-center cost">
									<img src={cost} alt="discount" />
								</div>
								<div className="btn-buy">
									<button className="btn"></button>
								</div>
							</div>
						</div>

{/*  */}

						<div className="card col-sm product-item">
							<img className="card-img-top" src={product} alt="product" />
							<div className="card-rating">
								<div>
									<img src={rating_2} alt="rating" />
								</div>
								<span>
									<img src={check} alt="check" /> в наличии
								</span>
							</div>
							<p className="card-text">Brit Care Брит Кеа Лакомство для кошек Shiny Hair для блестящей шерсти</p>
							<div className="row d-flex justify-content-between weight-product">
								<div>
									<input type="radio" id="b1" name="bb" />
									<label for="b1"><span></span>300гр</label>
								</div>
								<div>
									<input type="radio" id="b2" name="bb" />
									<label for="b2"><span></span>1кг</label>
								</div>
								<div>
									<input type="radio" id="b3" name="bb" />
									<label for="b3"><span></span>2кг</label>
								</div>
								<div>
									<input type="radio" id="b4" name="bb" />
									<label for="b4"><span></span>5кг</label>
								</div>
							</div>
							<div className="row d-flex justify-content-between price">
								<div className="discount">
									<img src={discount} alt="discount" />
								</div>
								<div className="btn-buy">
									<button className="btn"></button>
								</div>
							</div>
						</div>

{/*  */}

						<div className="card col-sm product-item">
							<img className="card-img-top" src={product} alt="product" />
							<div className="card-rating">
								<div>
									<img src={rating_0} alt="rating" />
								</div>
								<span>
									<img src={check} alt="check" /> в наличии
								</span>
							</div>
							<p className="card-text">8 in 1 Лакомство для собак Минис Ягненок и клюква, с картофелем </p>
							<div className="row d-flex justify-content-between weight-product">
								<div>
									<input type="radio" id="d1" name="dd" />
									<label for="d1"><span></span>300гр</label>
								</div>
								<div>
									<input type="radio" id="d2" name="dd" />
									<label for="d2"><span></span>1кг</label>
								</div>
								<div>
									<input type="radio" id="d3" name="dd" />
									<label for="d3"><span></span>2кг</label>
								</div>
								<div>
									<input type="radio" id="d4" name="dd" />
									<label for="d4"><span></span>5кг</label>
								</div>
							</div>
							<div className="row d-flex justify-content-between price">
								<div className="d-flex align-items-center cost">
									<img src={cost} alt="discount" />
								</div>
								<div className="btn-buy">
									<button className="btn"></button>
								</div>
							</div>
						</div>

						{/*  */}

					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default HomePage;