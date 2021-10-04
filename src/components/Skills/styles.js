import styled from 'styled-components'
import { Badge } from "react-bootstrap";

const HeadingText = styled.h1`
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  font-size: 24px;
  &:hover {
    color:#F4B400;
  }
`;

const SkillBadge = styled(Badge)`
    margin-right:.75rem;
`;

export {
    HeadingText, SkillBadge
}