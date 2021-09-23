import React from "react";
import { Text, HeadingText, EducationWrapper } from "./styles";
import { Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

function Education() {
  return (
    <EducationWrapper>
      <Row>
        <HeadingText> Education </HeadingText>
      </Row>
      {data[0].education.map((item) => (
        <Row>
          <Text>
            {item.college}
            <br />
            {item.degree}
            <br />
            {item.graduationYear}, {item.location}
          </Text>
        </Row>
      ))}
    </EducationWrapper>
  );
}
export default Education;
