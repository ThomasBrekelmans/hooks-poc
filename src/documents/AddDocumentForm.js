/** @jsx jsx */

import { useCallback, useContext, useState } from 'react';

import { css, jsx } from '@emotion/core';

import DocumentsContext from './DocumentsContext';

const style = css`
	display: flex;
	flex-direction: row;

	* + * {
		margin-left: 4px;
	}
`;
export default function AddDocumentForm() {
	const { addDocument } = useContext(DocumentsContext);

	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const submitForm = useCallback(
		() => {
			addDocument({ title, content });

			setTitle('');
			setContent('');
		},
		[addDocument, title, content, setTitle, setContent]
	);

	const handleTitleChange = useCallback(({ target: { value } }) => setTitle(value), [setTitle]);
	const handleContentChange = useCallback(({ target: { value } }) => setContent(value), [
		setContent
	]);

	return (
		<div css={style}>
			<div>
				<label htmlFor="title">Title:</label>
				<input name="title" type="text" value={title} onChange={handleTitleChange} />
			</div>

			<div>
				<label htmlFor="content">Content:</label>
				<input name="content" type="text" value={content} onChange={handleContentChange} />
			</div>

			<button onClick={submitForm}>Add</button>
		</div>
	);
}
