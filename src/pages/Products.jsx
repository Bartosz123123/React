import React from 'react';
import ProductMain from '../components/ProductMain/ProductMain';

const Products = ({ products, onAddToCart, onRemoveFromCart, cart }) => {
	return (
		<div>
			<ProductMain
				products={products}
				onAddToCart={onAddToCart}
				onRemoveFromCart={onRemoveFromCart}
				cart={cart}
			/>
		</div>
	);
};

export default Products;
