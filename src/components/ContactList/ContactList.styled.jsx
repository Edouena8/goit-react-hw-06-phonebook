import styled from '@emotion/styled';

export const ContactWrap = styled.ul`
    width: 600px;
`;


export const ContactItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid black;

    &:hover {
        -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
        box-shadow: 0 0 0 7px rgb(118, 46, 177),
            0 0 0 14px rgba(118, 46, 177, 0.6),
            0 0 0 21px rgba(118, 46, 177, 0.4);
    }
`;