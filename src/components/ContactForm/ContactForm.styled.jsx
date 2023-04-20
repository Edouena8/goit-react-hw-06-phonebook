import styled from '@emotion/styled';

export const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const LabelWrap = styled.label`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const LabelText = styled.span`
    font-size: 15px;
    color: #fff;
`;

export const FormInput = styled.input` 
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

export const AddBtn = styled.button`

text-decoration: none;
display: inline-block;
margin: 10px 20px;
padding: 10px 30px;
position: relative;
border: 2px solid #63009C;
color: #63009C;
font-family: 'Montserrat', sans-serif;
transition: .4s;
cursor: pointer;

&:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  border: 2px solid rgba(0, 0, 0, 0);
  transition: .4s;
}
&:hover:after {
  border-color: #63009C;
  width: calc(100% - 10px);
  height: calc(100% + 10px);
}
`;
