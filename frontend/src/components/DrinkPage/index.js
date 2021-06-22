import { useEffect, useState } from 'react';
const DrinkPage = () => {
	const [drinks, setDrinks] = useState("")
	return (
		<div className="main__container">
			{drinks}
		</div>
	);
};

export default DrinkPage;