import styled from 'styled-components';

const CloseButton = styled.button`
  cursor: pointer;
  font-size: 3rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
  &:hover{
    color: ${props => props.theme.red};
  }
`;

export default CloseButton;
