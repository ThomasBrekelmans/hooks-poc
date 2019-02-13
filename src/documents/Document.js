/** @jsx jsx */

import { useCallback, useContext } from 'react';

import { css, jsx } from '@emotion/core';

import DocumentsContext from './DocumentsContext';

const style = css`
	* + * {
		margin-top: 4px;
	}
`;

export default function Document({ document }) {
	const { removeDocument } = useContext(DocumentsContext);

	const handleClick = useCallback(() => removeDocument(document), [document, removeDocument]);

	return (
		<div css={style}>
			<h3>{document.title}</h3>

			<div>{document.content}</div>

			<button onClick={handleClick}>Remove document</button>
		</div>
	);
}
