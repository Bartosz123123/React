import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './HomeMain.css';
import ProductCard from '../ProductCard/ProductCard.jsx';

const HomeMain = ({ products, onAddToCart, onRemoveFromCart, cart }) => {
	const navigate = useNavigate();

	const [randomProduct] = useState(() => {
		if (!products || products.length === 0) {
			return null;
		}

		const randomIndex = Math.floor(Math.random() * products.length);
		return products[randomIndex];
	});

	if (!randomProduct) {
		return (
			<div className='no-products'>
				Loading main section or no products available.
			</div>
		);
	}

	const handleSeeFullOffer = () => {
		navigate('/products');
	};

	return (
		<main className='home-main'>
			<span className='shop-icon'>
				<i className='fa-solid fa-basket-shopping'></i>
			</span>

			<h2 className='title'>
				Welcome to React<span className='shop-text'>Shop</span>!
			</h2>
			<p>
				Discover the best products at exceptional prices. Electronics, fashion,
				and jewelry all in one place.
			</p>

			<button className='btn-shop' onClick={handleSeeFullOffer}>
				See the full offer
			</button>

			<span className='hot-offer-text'>Hot Offer!!</span>

			<ProductCard
				product={randomProduct}
				onAddToCart={onAddToCart}
				onRemoveFromCart={onRemoveFromCart}
				cart={cart}
			/>
		</main>
	);
};

export default HomeMain;
