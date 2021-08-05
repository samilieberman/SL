import styled from 'styled-components'
import retro from '../../assets/retro2.gif'
import Typist from 'react-typist';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const InputWrapper = styled.div`
    color: white;
    background-image: url(${retro});
    background-size: 100%;
    height: 25rem;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`;

const HeaderText = styled.div`
    text-align: center;
    padding: 2rem;
`;

const StyledTypist = styled(Typist)`
    color: ${(props) => props.color};
`

const StyledButton = styled(Link)`
    background-color: black;
    color: white;
`

export {
    InputWrapper, HeaderText, StyledTypist, StyledButton
}