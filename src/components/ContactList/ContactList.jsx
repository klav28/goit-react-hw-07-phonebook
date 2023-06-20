import StyledList from './ContactList.component';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../store/operations';
import {
  getFilteredContacts,
  getError,
  getIsLoading,
} from '../../store/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  // const contacts = useSelector(getSortedContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <StyledList>
      {isLoading && <b>Loading Contacts...</b>}
      {error && <b>{error}</b>}
      {contacts.length > 0 && (
        <>
          <h2>
            Contacts
            <span style={{ fontWeight: 400 }}> | {contacts.length} items</span>
          </h2>
          <StyledList.Table>
            <thead>
              <tr>
                <StyledList.Th>Name</StyledList.Th>
                <StyledList.Th>Phone Number</StyledList.Th>
                <StyledList.Th>Delete</StyledList.Th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(el => (
                <StyledList.Tr key={el.id}>
                  <StyledList.Td>{el.contactName}</StyledList.Td>
                  <StyledList.Td>{el.contactPhone}</StyledList.Td>
                  <StyledList.Td>
                    <StyledList.Btn
                      onClick={() => dispatch(deleteContact(el.id))}
                      id={el.id}
                    >
                      X
                    </StyledList.Btn>
                  </StyledList.Td>
                </StyledList.Tr>
              ))}
            </tbody>
          </StyledList.Table>
        </>
      )}
    </StyledList>
  );
};
