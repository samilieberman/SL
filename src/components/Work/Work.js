import React from "react";
import { Container, Row } from "react-bootstrap";
import { Text, HeadingText } from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../../data.json";

function Work() {
  return (
    <Row>
      <HeadingText> Work </HeadingText>
      {data[0].employment.map((employer) => (
        <Text>
          <a href={employer.link}>{employer.employer}</a> <br />
          {employer.title} <br />
          <ul>
            {employer.jobDescription.map((description) => (
              <li>{description}</li>
            ))}
          </ul>
        </Text>
      ))}
    </Row>
  );
}
export default Work;
