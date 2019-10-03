import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Jumbotron, Container } from "react-bootstrap";
import prettyMoney from "pretty-money";
import Counter from "react-animated-number";

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (800000 - 10 + 1)) + min;
const prettyDollarConfig = {
  currency: "$",
  position: "before",
  spaced: false,
  thousandsDelimiter: ","
};

function UpdateFundsJumbotron(props) {
  return (
        <Jumbotron fluid style={{margin: "0", padding: "1em", textAlign: "center"}}>
            <Container>
                <UpdateFunds />
            </Container>
        </Jumbotron>
        );
}

class UpdateFunds extends Component {
  static displayName = "Counter";

  constructor() {
    super();

    this.state = {
      smallValue: 10,
      bigValue: 1000,
      updates: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.update(), 5000);
    this.interval = setInterval(() => this.mountUnmount(), 12000);
  }

  update() {
    const { updates } = this.state;

    this.setState({
      smallValue: getRandomInt(5, 1000),
      bigValue: getRandomInt(100, 5000),
      updates: updates + 1
    });
  }

  mountUnmount() {
    const { updates } = this.state;

    this.setState({
      updates: updates + 1
    });
  }

  render() {
    const { smallValue, bigValue } = this.state;

    return (
      // Leaves 40px margin at the top
      <div>
        <h4>
          <Counter
            style={{
              transition: "3s ease-out",
              transitionProperty: "background-color, color"
            }}
            frameStyle={perc =>
              perc === 100 ? {} : { backgroundColor: "yellow" }
            }
            stepPrecision={0}
            value={smallValue}
            formatValue={n => `Woohoo! Just got another $${n}` + " donated!"}
          />
        </h4>

        <div>
          <div style={{ marginTop: 0 }}>{"Total Donations Made:"}</div>
          <svg width={"60%"} height={"70"}>
            <g transform="rotate(0 150 150) translate(80,50)">
              <Counter
                style={{
                  transition: "5.0s ease-out",
                  fontSize: 50,
                  margin: 0,
                  padding: 0,
                  transitionProperty: "background-color, color, opacity"
                }}
                frameStyle={perc => (perc === 100 ? {} : { opacity: 0.5 })}
                duration={700}
                value={bigValue}
                component="text"
                formatValue={n => prettyMoney(prettyDollarConfig, n)}
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

export default UpdateFundsJumbotron;
