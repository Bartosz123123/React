import React from 'react';
import HomeMain from '../components/HomeMain/HomeMain';

const Home = ({ products, onAddToCart, onRemoveFromCart, cart }) => {
	return (
		<div>
			<HomeMain
				products={products}
				onAddToCart={onAddToCart}
				onRemoveFromCart={onRemoveFromCart}
				cart={cart}
			/>
		</div>
	);
};

export default Home;
