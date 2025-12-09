import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ totalItems }) => {
	const navigate = useNavigate();

	const goHome = () => {
		navigate('/');
	};
	return (
		<nav className='nav-bar'>
			<h1 className='shop-name' onClick={goHome}>
				React<span className='shop-text'>Shop</span>
			</h1>
			<div className='nav-div'>
				<NavLink
					className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
					to='/'
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) => `nav-link ${isActive ? 'isActive' : ''}`}
					to='/products'
				>
					Products
				</NavLink>
			</div>

			<button className='btn-icon'>
				<i className='fa-solid fa-cart-shopping'></i>
				{totalItems > 0 ? (
					<span className='cart-badge'>{totalItems}</span>
				) : null}
			</button>
		</nav>
	);
};

export default NavBar;
