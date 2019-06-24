import React from 'react';
import PropTypes from 'prop-types';

const TransactionFilterPresentation = (props) => {
    const {onChange} = props;
    return (
        <div className="transaction__filter">
            <h3>Filter by :</h3>
            <span>
                <label>Date Of Transaction :</label>
                <input type="date" name="minimumDateFilter" onChange={onChange}/>
                <input type="date" name="maximumDateFilter" onChange={onChange}/>
            </span>
            <span>
                <label>Type Of Transaction :</label>
                <select name="typeOfTransactionFilter" onChange={onChange}>
                    <option value="ALL">All</option>
                    <option value="CREDIT">Credit</option>
                    <option value="DEBIT">Debit</option>
                </select>
            </span>
            <span>
                <label>Amount :</label>
                <input type="number" name="minimumAmountFilter" placeholder="Minimum amount" onChange={onChange}/>
                <input type="number" name="maximumAmountFilter" placeholder="Maximum amount" onChange={onChange}/>
            </span>
        </div>
    );
};

TransactionFilterPresentation.propTypes = {
    onChange: PropTypes.func
};

export default TransactionFilterPresentation;
