import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from 'redux/modalSlice';
import { IconBtn } from './IconButton.styled';

const IconButton = ({children, ...allyProps}) => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);
    console.log(modal);
    return (
    <IconBtn type="button" onClick={() => dispatch(toggleModal(modal))} {...allyProps}>
        {children}
    </IconBtn>
)};

IconButton.defaultProps = {
    children: null,
};

IconButton.propTypes = {
    children: PropTypes.node,
    'aria-label': PropTypes.string.isRequired,
};

export default IconButton;