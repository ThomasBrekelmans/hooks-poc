import React, { useContext } from 'react';

import DocumentsContext from './DocumentsContext';

export default function DocumentsFooter() {
	const { isAddDocumentFormShown, toggleShowAddDocumentForm } = useContext(DocumentsContext);

	const label = isAddDocumentFormShown ? 'Hide add document form' : 'Show add document form';

	return (
		<footer>
			<button onClick={toggleShowAddDocumentForm}>{label}</button>
		</footer>
	);
}
