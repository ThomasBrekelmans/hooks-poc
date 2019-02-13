/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import { useCallback, useContext } from 'react';

import ItemsContext from './ItemsContext';

const style = css`
	* + * {
		margin-left: 4px;
	}
`;

export default function FilterItemsForm() {
	const { filterInput, updateFilterInput } = useContext(ItemsContext);
	const {
		labelContains = '',
		labelContainsIsCaseSensitive = false,
		valueContains = '',
		valueContainsIsCaseSensitive = false
	} = filterInput;

	const handleLabelContainsChange = useCallback(
		({ target: { value } }) => updateFilterInput('labelContains', value),
		[updateFilterInput]
	);
	const handleLabelContainsIsCaseSensitive = useCallback(
		({ target: { checked } }) => updateFilterInput('labelContainsIsCaseSensitive', checked),
		[updateFilterInput]
	);

	const handleValueContainsChange = useCallback(
		({ target: { value } }) => updateFilterInput('valueContains', value),
		[updateFilterInput]
	);
	const handleValueContainsIsCaseSensitive = useCallback(
		({ target: { checked } }) => updateFilterInput('valueContainsIsCaseSensitive', checked),
		[updateFilterInput]
	);

	return (
		<div>
			<div css={style}>
				<label htmlFor="labelContains">Label contains:</label>

				<input
					type="text"
					name="labelContains"
					value={labelContains}
					onChange={handleLabelContainsChange}
				/>

				<label htmlFor="labelContainsIsCaseSensitive">Case sensitive?</label>

				<input
					type="checkbox"
					name="labelContainsIsCaseSensitive"
					checked={labelContainsIsCaseSensitive}
					onChange={handleLabelContainsIsCaseSensitive}
				/>
			</div>
			AND
			<div css={style}>
				<label htmlFor="valueContains">Value contains:</label>

				<input
					type="text"
					name="valueContains"
					value={valueContains}
					onChange={handleValueContainsChange}
				/>

				<label htmlFor="valueContainsIsCaseSensitive">Case sensitive?</label>

				<input
					type="checkbox"
					name="valueContainsIsCaseSensitive"
					checked={valueContainsIsCaseSensitive}
					onChange={handleValueContainsIsCaseSensitive}
				/>
			</div>
		</div>
	);
}
