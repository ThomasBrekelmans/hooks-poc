import { useCallback, useState } from 'react';

export default function useItemsState({ initialItems, propNameToUseAsId = 'id', generateID }) {
	const [items, setItems] = useState(initialItems);

	const removeItem = useCallback(
		itemToRemove => {
			setItems(items => {
				const indexToRemove = items.findIndex(
					item => item[propNameToUseAsId] === itemToRemove[propNameToUseAsId]
				);

				return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)];
			});
		},
		[setItems, items]
	);
	const updateItem = useCallback(
		itemToUpdate => {
			setItems(items => {
				const indexToUpdate = items.findIndex(
					item => item[propNameToUseAsId] === itemToUpdate[propNameToUseAsId]
				);

				return [
					...items.slice(0, indexToUpdate),
					itemToUpdate,
					...items.slice(indexToUpdate + 1)
				];
			});
		},
		[setItems, items]
	);
	const addItem = useCallback(
		itemToAdd => {
			setItems(items => {
				const item = { ...itemToAdd, [propNameToUseAsId]: generateID() };

				return [...items, item];
			});
		},
		[setItems, items]
	);

	return { items, addItem, removeItem, updateItem, setItems };
}
