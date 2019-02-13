import React, { useContext } from 'react';

import ItemsContext from './ItemsContext';

export default function ItemsFooter() {
	const { isAddItemFormShown, toggleShowAddItemForm } = useContext(ItemsContext);

	const label = isAddItemFormShown ? 'Hide add item form' : 'Show add item form';

	return (
		<footer>
			<button onClick={toggleShowAddItemForm}>{label}</button>
		</footer>
	);
}
