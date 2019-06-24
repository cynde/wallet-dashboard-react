import React from 'react';
import PropTypes from "prop-types";

class TransactionFormContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wallet: 1,
            dateOfTransaction: '',
            typeOfTransaction: 'CREDIT',
            amount: 0
        }
    }

    handleOnChange = (event) => {
        const {name, value} = event.target;
        let newState = {};
        newState[name] = value;
        this.setState(newState);
    };

    handleOnSubmit = () => {
        this.props.onSubmit({...this.state});
    };

    render() {
        return (
            <div className="transaction__form">
                <h3>Add new transaction :</h3>
                <span>
                    <label>Date of Transaction :</label>
                    <input type="date" id="date-of-transaction" name="dateOfTransaction" onChange={this.handleOnChange}/>
                </span>
                <span>
                    <label>Type of Transaction :</label>
                    <select name="typeOfTransaction" id="type-of-transaction" onChange={this.handleOnChange}>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                </span>
                <span>
                    <label>Amount :</label>
                    <input type="number" id="amount" name="amount" onChange={this.handleOnChange}/>
                </span>
                <div>
                    <button type="submit" id="add-transaction" onClick={this.handleOnSubmit}>Add Transaction</button>
                </div>
            </div>
        );
    }
}

TransactionFormContainer.propTypes = {
    onSubmit: PropTypes.func
};

export default TransactionFormContainer;
