import { writable } from 'svelte/store';

export const createSearchStore = (data: SearchPost[]) => {
	const { subscribe, set, update } = writable<SearchStore>({
		data,
		filtered: [],
		search: ''
	});

	return {
		subscribe,
		set,
		update
	};
};

export const searchHandler = (store: SearchStore) => {
	const searchTerm = store.search.toLowerCase() || '';
	store.filtered = store.data.filter((item) => {
		return item.searchTerms.includes(searchTerm);
	});
};
