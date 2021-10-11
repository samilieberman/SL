import styled from 'styled-components'
import { Container } from "react-bootstrap";

const Text = styled.h3`
  font-family: 'Lato', sans-serif;
  font-size: 18px;
`;

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    color:#F4B400;
  }
`;

const EducationWrapper = styled(Container)`
  margin-top: 4rem;
  align-items: center;
  justify-content: center;
`;

export { Text, HeadingText, EducationWrapper };
