import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Products from './pages/Products';
import useCart from './hooks/useCart';

const App = () => {
	const { cart, totalItemsInCart, handleAddToCart, handleRemoveFromCart } =
		useCart();

	const [allProducts, setAllProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then((response) => response.json())
			.then((data) => {
				setAllProducts(data);
			})
			.catch((error) => {
				console.error('Error fetching products:', error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<NavBar totalItems={totalItemsInCart} />
			<>
				<Routes>
					<Route
						path='/'
						element={
							<Home
								products={allProducts}
								onAddToCart={handleAddToCart}
								onRemoveFromCart={handleRemoveFromCart}
								cart={cart}
							/>
						}
					/>
					<Route
						path='/products'
						element={
							<Products
								products={allProducts}
								onAddToCart={handleAddToCart}
								onRemoveFromCart={handleRemoveFromCart}
								cart={cart}
							/>
						}
					/>
					<Route path='*' element={<h1>Page Not Found</h1>} />
				</Routes>
			</>
		</div>
	);
};

export default App;
