export const getContacts = state => state.phonebook.items;

export const getSortedContacts = state => {
  return getContacts(state)
    .slice()
    .sort((a, b) => (a.contactName < b.contactName ? -1 : 1));
};

export const getIsLoading = state => state.phonebook.isLoading;

export const getError = state => state.phonebook.error;

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = state =>
  getSortedContacts(state).filter(el =>
    el.contactName.toLowerCase().includes(getFilter(state).toLowerCase())
  );
