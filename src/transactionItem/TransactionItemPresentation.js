import React from 'react';
import PropTypes from "prop-types";

const TransactionItemPresentation = (props) => {
    const {index, transaction} = props;
    return (
        <tr key={index}>
            <td>{index+1}</td>
            <td>{transaction.dateOfTransaction}</td>
            <td>{transaction.typeOfTransaction}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.updatedBalance}</td>
        </tr>
    );
};

TransactionItemPresentation.propTypes = {
    transaction: PropTypes.shape({
        dateOfTransaction: PropTypes.string,
        typeOfTransaction: PropTypes.string,
        amount: PropTypes.number,
        wallet: PropTypes.shape({
            accountNumber: PropTypes.string,
            currentBalance: PropTypes.number,
            user: PropTypes.shape({
                firstName: PropTypes.string,
                lastName: PropTypes.string,
                phoneNumber: PropTypes.string,
                dateOfBirth: PropTypes.string,
                gender: PropTypes.string,
                email: PropTypes.string
            })
        }),
        updatedBalance: PropTypes.number
    }),
    index: PropTypes.number
};

export default TransactionItemPresentation;
