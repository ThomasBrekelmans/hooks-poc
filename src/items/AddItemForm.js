/** @jsx jsx */

import { useCallback, useContext, useState } from 'react';

import { css, jsx } from '@emotion/core';

import ItemsContext from './ItemsContext';

const style = css`
	display: flex;
	flex-direction: row;

	* + * {
		margin-left: 4px;
	}
`;
export default function AddItemForm() {
	const { addItem } = useContext(ItemsContext);

	const [label, setLabel] = useState('');
	const [value, setValue] = useState('');

	const submitForm = useCallback(
		() => {
			addItem({ label, value });

			setLabel('');
			setValue('');
		},
		[addItem, setLabel, setValue, label, value]
	);

	const handleLabelChange = useCallback(({ target: { value } }) => setLabel(value), [setLabel]);
	const handleValueChange = useCallback(({ target: { value } }) => setValue(value), [setValue]);

	return (
		<div css={style}>
			<div>
				<label htmlFor="label">Label:</label>
				<input name="label" type="text" value={label} onChange={handleLabelChange} />
			</div>

			<div>
				<label htmlFor="value">Value:</label>
				<input name="value" type="text" value={value} onChange={handleValueChange} />
			</div>

			<button onClick={submitForm}>Add</button>
		</div>
	);
}
