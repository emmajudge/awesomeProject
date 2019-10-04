import React from "react";
import React, { useState } from "react";
import Notification from "./components/Toast/index";

function Notification() {
    const [show, setShow] = useState(false);
  
    return (
      <Row>
        <Col xs={6}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Awesome Bot</strong>
              <small>5 seconds ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you've just donated $10!</Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={() => setShow(true)}>DONATE!</Button>
        </Col>
      </Row>
    );
}
  
render(<Notification />);

export default Notification;