import { useState, useEffect, useMemo } from 'react';

const STORAGE_KEY = 'reactShopCart';

const useCart = () => {
	const [cart, setCart] = useState(() => {
		try {
			const storedCart = localStorage.getItem(STORAGE_KEY);
			return storedCart ? JSON.parse(storedCart) : {};
		} catch (error) {
			console.error('Błąd odczytu localStorage:', error);
			return {};
		}
	});

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
	}, [cart]);

	const totalItemsInCart = useMemo(() => {
		return Object.values(cart).reduce(
			(total, item) => total + item.quantity,
			0
		);
	}, [cart]);

	const handleAddToCart = (product) => {
		setCart((prevCart) => {
			const productId = product.id.toString();
			const newCart = { ...prevCart };

			if (newCart[productId]) {
				newCart[productId].quantity += 1;
			} else {
				newCart[productId] = {
					productData: product,
					quantity: 1,
				};
			}
			return newCart;
		});
	};

	const handleRemoveFromCart = (productId) => {
		setCart((prevCart) => {
			const newCart = { ...prevCart };
			const id = productId.toString();

			if (newCart[id] && newCart[id].quantity > 1) {
				newCart[id].quantity -= 1;
			} else {
				delete newCart[id];
			}
			return newCart;
		});
	};

	return {
		cart,
		totalItemsInCart,
		handleAddToCart,
		handleRemoveFromCart,
	};
};

export default useCart;
