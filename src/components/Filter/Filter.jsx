import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={onChange} />
    </Label>
  );
};
