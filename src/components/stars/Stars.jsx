import React from 'react';
import './Stars.css';

const Stars = ({ rate, count }) => {
	const maxStars = 5;

	const roundedRate = Math.round(rate * 2) / 2;

	const stars = [];
	for (let i = 1; i <= maxStars; i++) {
		let starClass = 'fa-star';

		if (roundedRate >= i) {
			starClass = 'fa-solid fa-star filled';
		} else if (roundedRate > i - 1 && roundedRate < i) {
			starClass = 'fa-solid fa-star-half-stroke half-filled';
		} else {
			starClass = 'fa-regular fa-star empty';
		}

		stars.push(
			<i
				key={i}
				className={starClass}
				style={{ color: starClass.includes('filled') ? 'gold' : 'lightgray' }}
			></i>
		);
	}

	return (
		<div className='star-rating'>
			<div className='stars'>{stars}</div>
			<span className='rating-count'>({count} opinii)</span>
		</div>
	);
};

export default Stars;
