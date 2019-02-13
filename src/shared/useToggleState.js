import { useCallback, useState } from 'react';

export default function useToggleState(initialValue) {
	const [value, setValue] = useState(initialValue);

	const toggleValue = useCallback(() => setValue(value => !value), [setValue]);

	return [value, toggleValue, setValue];
}
