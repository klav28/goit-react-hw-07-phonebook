import StyledList from './ContactList.component';

import { useDispatch, useSelector } from 'react-redux';
import { deleteEntry } from '../../store/pbSlice';
import { getFilteredContacts } from 'store/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <StyledList>
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
              <StyledList.Td>{el.name}</StyledList.Td>
              <StyledList.Td>{el.number}</StyledList.Td>
              <StyledList.Td>
                <StyledList.Btn
                  onClick={() => dispatch(deleteEntry(el.id))}
                  id={el.id}
                >
                  X
                </StyledList.Btn>
              </StyledList.Td>
            </StyledList.Tr>
          ))}
        </tbody>
      </StyledList.Table>
    </StyledList>
  );
};
