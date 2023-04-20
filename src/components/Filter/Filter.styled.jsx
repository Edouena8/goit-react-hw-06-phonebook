import styled from '@emotion/styled';

export const FilterWrap = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const FilterText = styled.span`
    font-size: 15px;
`;

export const FilterInput = styled.input`
display: block;
width: 100%;
max-width: 300px;
box-sizing: border-box;
margin: 0 auto 10px;
padding: 10px;
border: 1px solid #000;
border-radius: 4px;
box-shadow: inset 0 2px 10px 1px rgba(0,0,0,.3), inset 0 0 0 60px rgba(0,0,0,.3), 0 1px rgba(255,255,255,.08);  
color: #ccc;
transition: .5s linear;

&:focus {
    outline: none;
    box-shadow: inset 0 1px 3px 1px  rgba(0,0,0,.5), inset 0 0 0 60px rgba(0,0,0,0), 0 1px rgba(255,255,255,.08);
    }
`;