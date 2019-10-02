  
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import prettyMoney from "pretty-money";
import Counter from 'react-animated-number';
import CurrencyFormat from 'react-currency-format';

 const getRandomInt = (min, max) => (Math.floor(Math.random() * (max - min + 1)) + min);
 const prettyDollarConfig = {
    currency: "$",
    position: "before",
    spaced: false,
    thousandsDelimiter: ","
}


class  UpdateFunds extends Component {

    static displayName = 'Counter'

    constructor() {
        super();

        this.state = {
            smallValue: 10,
            bigValue: 1024,
            updates: 0
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.update(), 3000);
        this.interval = setInterval(() => this.mountUnmount(), 11000);
    }

    update() {
        const {updates} = this.state;

        this.setState({
            smallValue: getRandomInt(10, 1000),
            bigValue: getRandomInt(1024, Math.pow(1024, 4)),
            updates: updates + 1
        });
    }

    mountUnmount() {
        const {updates} = this.state;

        this.setState({
            updates: updates + 1
        });
    }

    render() {
        const {smallValue, bigValue} = this.state;

        return (
            <div style={{marginTop: 50}}>

<CurrencyFormat value={2456981} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                <h4>  
                    <Counter
                        style={{
                            transition: '1.0s ease-out',
                            transitionProperty:
                                'background-color, color'
                        }}
                        frameStyle={perc => (
                            perc === 100 ? {} : {backgroundColor: 'yellow'}
                        )}
                        stepPrecision={0}
                        value={smallValue}
                        formatValue={n => `We've got another $${n}` + 'just donated!'}/>
                </h4>

                <div>
                    <div>
                        {'Total Donations Made:'}
                    </div>
                    <svg width={600} height={600}>
                        <g transform="rotate(0 150 150) translate(50,100)">
                            <Counter
                                style={{
                                    transition: '1.0s ease-out',
                                    fontSize: 60,
                                    transitionProperty:
                                        'background-color, color, opacity'
                                }}
                                frameStyle={perc => (
                                    perc === 100 ? {} : {opacity: 0.25}
                                )}
                                duration={330}
                                value={bigValue}
                                component="text"
                                formatValue={n =>  prettyMoney(prettyDollarConfig, n)}/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

// ReactDOM.render(<App />, document.getElementById('appRoot'));
export default UpdateFunds ;