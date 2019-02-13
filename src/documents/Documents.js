import React, { useContext, useMemo } from 'react';

import Document from './Document';
import DocumentsContext from './DocumentsContext';

export default function Documents() {
	const { documents } = useContext(DocumentsContext);

	const documentViews = useMemo(
		() => documents.map(document => <Document key={document.id} document={document} />),
		[documents]
	);

	return <div>{documentViews}</div>;
}
