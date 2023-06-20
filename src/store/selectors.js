export const getContacts = state => state.phonebook.items;

export const getSortedContacts = state => {
  return getContacts(state)
    .slice()
    .sort((a, b) => {
      const aName = a.contactName;
      const bName = b.contactName;
      if (aName.toLowerCase() < bName.toLowerCase()) {
        return -1;
      }
      if (aName.toLowerCase() > bName.toLowerCase()) {
        return 1;
      }
      return 0;
    });
};

export const getIsLoading = state => state.phonebook.isLoading;

export const getError = state => state.phonebook.error;

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = state =>
  getContacts(state).filter(el =>
    el.name.toLowerCase().includes(getFilter(state).toLowerCase())
  );
