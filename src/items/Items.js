import React, { useCallback, useContext } from 'react';

import Item from './Item';
import ItemsContext from './ItemsContext';

export default function Items() {
	const { filteredItems, isFilterItemsFormShown, items } = useContext(ItemsContext);

	const currentItems = isFilterItemsFormShown ? filteredItems : items;
	const itemViews = useCallback(currentItems.map(item => <Item key={item.id} item={item} />), [
		currentItems
	]);

	return <div>{itemViews}</div>;
}
