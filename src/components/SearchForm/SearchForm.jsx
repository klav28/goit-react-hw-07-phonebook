import { filterEntry } from 'store/filterSlice';
import StyledFilter from './SearchForm.component';
import { useDispatch } from 'react-redux';

export const SearchForm = () => {
  const dispatch = useDispatch();

  const handleFilterChange = ev => {
    // console.log(ev.currentTarget.value);
    dispatch(filterEntry(ev.currentTarget.value));
  };

  return (
    <StyledFilter>
      <StyledFilter.Label>
        Filter by Names:
        <StyledFilter.Input
          type="text"
          name="find"
          onChange={handleFilterChange}
        />
      </StyledFilter.Label>
    </StyledFilter>
  );
};
