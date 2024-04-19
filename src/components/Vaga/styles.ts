import styled from 'styled-components'

export const ListStyles = styled.li`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  h3 {
    font-weight: bold;
    margin-bottom: 16px;
  }

  a {
    border-color: ${(props) => props.theme.corSecundaria};
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corSecundaria};
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
      display: block;
    }
  }

  :hover {
    background-color: ${(props) => props.theme.corPrincipal};
    color: ${(props) => props.theme.corSecundaria};
  }

  :hover a {
    border-color: ${(props) => props.theme.corPrincipal};
    background-color: ${(props) => props.theme.corSecundaria};
    color: ${(props) => props.theme.corPrincipal};
  }
`
