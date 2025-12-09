import React, { useState, useMemo } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductMain.css';

const ProductMain = ({ products, onAddToCart, onRemoveFromCart, cart }) => {
	const [sortKey, setSortKey] = useState('default');

	const sortedProducts = useMemo(() => {
		if (!products || products.length === 0) {
			return [];
		}

		let sorted = [...products];

		if (sortKey === 'title') {
			sorted.sort((a, b) => a.title.localeCompare(b.title));
		} else if (sortKey === 'price-asc') {
			sorted.sort((a, b) => a.price - b.price);
		}

		return sorted;
	}, [products, sortKey]);

	const handleSortChange = (e) => {
		setSortKey(e.target.value);
	};

	if (!products) {
		return <main>Ładowanie produktów...</main>;
	}

	return (
		<main>
			<div className='section-header'>
				<div className='title-box'>
					<h2 className='section-title'>All Products</h2>

					<p className='under-title-text'>
						Browse our collection ({products.length})
					</p>
				</div>

				<div className='sort-control'>
					<label htmlFor='sort' className='sort-label'>
						Sort:
					</label>
					<select
						id='sort'
						name='sort'
						className='sort-select'
						value={sortKey}
						onChange={handleSortChange}
					>
						<option value='default'>Default</option>
						<option value='title'>Title (A-Z)</option>
						<option value='price-asc'>Price (Low to High)</option>
					</select>
				</div>
			</div>

			<div className='products-grid'>
				<h2 className='products-title'>Products</h2>
				<div className='products-container'>
					{sortedProducts.length > 0 ? (
						sortedProducts.map((product) => (
							<ProductCard
								key={product.id}
								product={product}
								onAddToCart={onAddToCart}
								onRemoveFromCart={onRemoveFromCart}
								cart={cart}
							/>
						))
					) : (
						<p>Brak produktów do wyświetlenia.</p>
					)}
				</div>
			</div>
		</main>
	);
};

export default ProductMain;
