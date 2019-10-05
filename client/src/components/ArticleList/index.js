import React from "react";
import { Col, Row, Container } from "../Grid";
import Thumbnail from "../Thumbnail";
import "./style.css";

// This file exports both the List and ListItem components

export function ArticleList({ children }) {
  return (
      <ul className="list-group">{children}</ul>
  );
}

export function ArticleItem({ 
  image = "https://placehold.it/300x300",
  title,
  description,
  link
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <p>{description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              Read the full story!
            </a><div class="box"><iframe src={link} width = "500px" height = "500px"></iframe></div>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

