const mergePARFiltersV2 = imports["global.mergePARFilters"]().v2;
	const { appliedFilters } = event.payload;
	api.setState("parFilters", ({ currentValue, api }) => {
		const { parFilters } = mergePARFiltersV2(currentValue, appliedFilters);
		return parFilters;
	});
