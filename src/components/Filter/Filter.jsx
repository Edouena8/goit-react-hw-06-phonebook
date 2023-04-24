import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { FilterWrap, FilterText, FilterInput } from "./Filter.styled";

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);

    return (
    <FilterWrap>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput 
            type="text" 
            velue={filter} 
            onChange={(evt) => {dispatch(changeFilter(evt.currentTarget.value))}}
        />
    </FilterWrap>
)};

export default Filter;