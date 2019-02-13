/** @jsx jsx */

import { useContext } from 'react';

import { css, jsx } from '@emotion/core';

import AddDocumentForm from './AddDocumentForm';
import Documents from './Documents';
import DocumentsContext from './DocumentsContext';
import DocumentsFooter from './DocumentsFooter';

const style = css`
	display: flex;
	flex-direction: column;
	flex: 1;

	> :not(:last-child) {
		margin-bottom: 10px;
	}
`;

export default function DocumentsForm() {
	const { isAddDocumentFormShown } = useContext(DocumentsContext);

	return (
		<div css={style}>
			<h2>Documents</h2>

			<Documents />

			{isAddDocumentFormShown && <AddDocumentForm />}

			<DocumentsFooter />
		</div>
	);
}
