/** @jsx jsx */
import { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';

import { css, jsx } from '@emotion/core';

import useItemsState from './shared/useItemsState';
import useToggleState from './shared/useToggleState';

import DocumentsContext from './documents/DocumentsContext';
import DocumentsForm from './documents/DocumentsForm';

import filterItems from './items/filterItems';
import ItemsContext from './items/ItemsContext';
import ItemsForm from './items/ItemsForm';

import FormsContainer from './FormsContainer';
import Heading from './Heading';

const style = css`
	font-family: sans-serif;

	display: flex;
	flex-direction: column;
`;

let DOCUMENT_ID = 1;
const initialDocuments = [
	{ id: DOCUMENT_ID++, title: 'Document 1', content: 'Contents of document 1' },
	{ id: DOCUMENT_ID++, title: 'Document 2', content: 'Contents of document 2' },
	{ id: DOCUMENT_ID++, title: 'Document 3', content: 'Contents of document 3' }
];

let ITEM_ID = 1;
const initialItems = [
	{ id: ITEM_ID++, label: 'Item 1', value: 'A' },
	{ id: ITEM_ID++, label: 'Item 2', value: 'B' },
	{ id: ITEM_ID++, label: 'Item 3', value: 'C' }
];

const initialFilterInput = {
	labelContains: '',
	labelContainsIsCaseSensitive: false,
	valueContains: '',
	valueContainsIsCaseSensitive: false
};

function App() {
	const { items: documents, addItem: addDocument, removeItem: removeDocument } = useItemsState({
		initialItems: initialDocuments,
		generateID: () => DOCUMENT_ID++
	});
	const [isAddDocumentFormShown, toggleShowAddDocumentForm] = useToggleState(false);

	const documentsContext = {
		documents,
		addDocument,
		removeDocument,
		isAddDocumentFormShown,
		toggleShowAddDocumentForm
	};

	const { items, addItem, removeItem, updateItem } = useItemsState({
		initialItems,
		generateID: () => ITEM_ID++
	});
	const [filterInput, setFilterInput] = useState(initialFilterInput);
	function updateFilterInput(name, value) {
		setFilterInput(filterInput => ({ ...filterInput, [name]: value }));
	}
	const filteredItems = useMemo(() => filterItems(items, filterInput), [items, filterInput]);
	const [isFilterItemsFormShown, toggleShowFilterItemsForm] = useToggleState(false);
	const [isAddItemFormShown, toggleShowAddItemForm] = useToggleState(false);

	const itemsContext = {
		items,
		addItem,
		removeItem,
		updateItem,
		isAddItemFormShown,
		toggleShowAddItemForm,
		filteredItems,
		filterInput,
		updateFilterInput,
		isFilterItemsFormShown,
		toggleShowFilterItemsForm
	};

	return (
		<div css={style}>
			<Heading>Documents & Forms w/ Hooks</Heading>

			<FormsContainer>
				<DocumentsContext.Provider value={documentsContext}>
					<DocumentsForm />
				</DocumentsContext.Provider>

				<ItemsContext.Provider value={itemsContext}>
					<ItemsForm />
				</ItemsContext.Provider>
			</FormsContainer>
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
