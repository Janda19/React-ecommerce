import styled, {css} from "styled-components"


const buttonStyle = css`
  background-color: black;
  color: white;
  border: none;
`


const inverted = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none

  }
`
const GoogleSignIn = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`
const getButtonStyle = props => {
    if (props.isGoogleSignIn) {
        return GoogleSignIn
    }

    return props.inverted ? inverted : buttonStyle
}
export const CustomButtonContainer = styled.div`
  ${getButtonStyle};
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;


  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

