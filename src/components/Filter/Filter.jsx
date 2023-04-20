import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import { FilterWrap, FilterText, FilterInput } from "./Filter.styled";

const Filter = ({value}) => {
    const dispatch = useDispatch();
    return (
    <FilterWrap>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput 
            type="text" 
            velue={value} 
            onChange={(evt) => {dispatch(changeFilter(evt.currentTarget.value))}}
        />
    </FilterWrap>
)};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
}

export default Filter;