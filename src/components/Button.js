import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: var(--lightYellow);
border: 0.2rem solid var(--mainWhite);
border-color: ${props => 
  props.cart ? 'var(--mainYellow)' : 'var(--mainWhite)'};
color: ${props => 
  props.cart ? 'var(--mainYellow)' :  'var(--mainWhite)'};
border-radius: 0.4rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0 0;
transition: all 0.5s ease-in-out;
&: hover{
  background: ${props => 
  props.cart ? 'var(--mainYellow)' :  'var(--mainWhite)'};
  color: var(--mainYellow);
}
&: focus{
  outline: none;
}
`;