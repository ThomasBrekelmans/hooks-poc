/** @jsx jsx */

import { useCallback, useContext } from 'react';

import { css, jsx } from '@emotion/core';

import ItemsContext from './ItemsContext';

const style = css`
	display: flex;
	flex-direction: row;

	* + * {
		margin-left: 4px;
	}
`;

export default function Item({ item }) {
	const { updateItem, removeItem } = useContext(ItemsContext);

	const handleLabelChange = useCallback(
		({ target: { value } }) => updateItem({ ...item, label: value }),
		[updateItem, item]
	);
	const handleValueChange = useCallback(
		({ target: { value } }) => updateItem({ ...item, value }),
		[updateItem, item]
	);
	const handleDeleteButtonClick = useCallback(() => removeItem(item), [removeItem, item]);

	return (
		<div css={style}>
			<div>
				<label htmlFor="label">Label:</label>
				<input name="label" type="text" value={item.label} onChange={handleLabelChange} />
			</div>

			<div>
				<label htmlFor="label">Value:</label>
				<input name="value" type="text" value={item.value} onChange={handleValueChange} />
			</div>

			<button onClick={handleDeleteButtonClick}>X</button>
		</div>
	);
}
