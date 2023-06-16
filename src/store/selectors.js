export const getContacts = state => state.phonebook;

export const getFilter = state => state.filter.filter;

export const getFilteredContacts = state =>
  getContacts(state).filter(el =>
    el.name.toLowerCase().includes(getFilter(state).toLowerCase())
  );
