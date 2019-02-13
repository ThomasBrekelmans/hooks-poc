/** @jsx jsx */

import { useContext } from 'react';

import { css, jsx } from '@emotion/core';

import ItemsContext from './ItemsContext';
import ItemsHeader from './ItemsHeader';
import FilterItemsForm from './FilterItemsForm';
import Items from './Items';
import AddItemForm from './AddItemForm';
import ItemsFooter from './ItemsFooter';

const style = css`
	display: flex;
	flex-direction: column;
	flex: 1;

	> :not(:last-child) {
		margin-bottom: 10px;
	}
`;

export default function ItemsForm() {
	const { isAddItemFormShown, isFilterItemsFormShown } = useContext(ItemsContext);

	return (
		<div css={style}>
			<ItemsHeader />

			{isFilterItemsFormShown && <FilterItemsForm />}

			<Items />

			{isAddItemFormShown && <AddItemForm />}

			<ItemsFooter />
		</div>
	);
}
