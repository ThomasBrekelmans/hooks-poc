export default function filterItems(
	items,
	{ labelContains, labelContainsIsCaseSensitive, valueContains, valueContainsIsCaseSensitive }
) {
	return items.filter(item => {
		if (labelContains !== '') {
			const matchesLabel = labelContainsIsCaseSensitive
				? item.label.includes(labelContains)
				: item.label.toLowerCase().includes(labelContains.toLowerCase());
			if (!matchesLabel) {
				return false;
			}
		}

		if (valueContains !== '') {
			const matchesValue = valueContainsIsCaseSensitive
				? item.value.includes(valueContains)
				: item.value.toLowerCase().includes(valueContains.toLowerCase());
			if (!matchesValue) {
				return false;
			}
		}

		return true;
	});
}
