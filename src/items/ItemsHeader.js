import React, { useContext } from 'react';

import ItemsContext from './ItemsContext';

export default function Header() {
	const { isFilterItemsFormShown, toggleShowFilterItemsForm } = useContext(ItemsContext);

	const label = isFilterItemsFormShown ? 'Hide filter' : 'Show filter';

	return (
		<header>
			<h2>Items</h2>
			<button onClick={toggleShowFilterItemsForm}>{label}</button>
		</header>
	);
}
