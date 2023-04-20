import styled from '@emotion/styled';

export const IconBtn = styled.button`
    margin: 0;
    padding: 10px;
    border: none;
    border-radius: 50%;
    color: white;
    font: inherit;
    background-color: green;
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg:hover {
        animation-name: spin;
        animation-duration: 5s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
      
        100% {
          transform: rotate(360deg);
        }
      }
`;