export const getContacts = state => state.phonebook.items;

export const getIsLoading = state => state.phonebook.isLoading;

export const getError = state => state.phonebook.error;

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = state =>
  getContacts(state).filter(el =>
    el.name.toLowerCase().includes(getFilter(state).toLowerCase())
  );
