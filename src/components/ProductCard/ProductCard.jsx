import React from 'react';
import Stars from '../stars/stars.jsx';
import './ProductCard.css';

function ProductCard({ product, onAddToCart, onRemoveFromCart, cart }) {
	if (!product) {
		return null;
	}

	const priceFormatted = product.price ? product.price.toFixed(2) : 'N/A';
	const itemId = product.id.toString();
	const itemInCart = cart ? cart[itemId] : null;
	const currentQuantity = itemInCart ? itemInCart.quantity : 0;
	return (
		<div className='card'>
			<p className='category'>{product.category}</p>
			<img className='product-image' src={product.image} alt={product.title} />
			<h3 className='product-title'>{product.title}</h3>
			<Stars rate={product.rating?.rate} count={product.rating?.count} />
			<p className='product-price'>${priceFormatted}</p>

			<div className='cart-controls'>
				{currentQuantity > 0 && (
					<button
						className='btn-remove'
						onClick={() => onRemoveFromCart(product.id)}
					>
						-
					</button>
				)}

				{currentQuantity > 0 && (
					<span className='current-quantity'>{currentQuantity} szt.</span>
				)}

				<button
					className='add-to-cart'
					onClick={(e) => {
						e.stopPropagation();
						onAddToCart(product);
					}}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default ProductCard;
