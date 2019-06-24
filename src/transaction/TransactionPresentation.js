import React from 'react';
import TransactionItemPresentation from "../transactionItem/TransactionItemPresentation";
import PropTypes from 'prop-types';

const TransactionPresentation = (props) => {
    const {transactions, onSort, filter} = props;
    return (
        <div id="transactions" className="box transactions">
            <div className="box__title">
                <i className="fa fa-file-text-o fa-2x"/><p className="box__title--text">Your Transactions</p>
            </div>
            <div className="box__body">
                <table id="transactions-table">
                    <thead>
                    <tr>
                        <th width="5%">No.</th>
                        <th onClick={onSort('dateOfTransaction')} id="date-of-transaction-header">Date<i
                            className="fa fa-sort"/></th>
                        <th onClick={onSort('typeOfTransaction')} id="type-of-transaction-header">Type Of Transaction<i
                            className="fa fa-sort"/></th>
                        <th onClick={onSort('amount')} id="amount-header">Amount in IDR<i className="fa fa-sort"/></th>
                        <th id="updated-balance-header">Updated Balance in IDR</th>
                    </tr>
                    </thead>
                    <tbody id="transactions-table-body">
                    {getTransactionsList(transactions, filter)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const getTransactionsList = (transactions, filter) => {
    let filteredTransactions = transactions;
    filteredTransactions = getMaximumAmountFiltered(filteredTransactions, filter);
    filteredTransactions = getMinimumAmountFiltered(filteredTransactions, filter);
    filteredTransactions = getMinimumDateFiltered(filteredTransactions, filter);
    filteredTransactions = getMaximumDateFiltered(filteredTransactions, filter);
    filteredTransactions = getTypeOfTransactionFiltered(filteredTransactions, filter);
    return filteredTransactions.map((transaction, index) => {
        return (
            <TransactionItemPresentation transaction={transaction} index={index} key={index}/>
        );
    });
};

const getMaximumAmountFiltered = (transactions, filter) => {
    if (filter.maximumAmountFilter !== '') {
        return transactions.filter((transaction) => {
            return transaction.amount <= filter.maximumAmountFilter;
        });
    }
    return transactions;
};

const getMinimumAmountFiltered = (transactions, filter) => {
    if (filter.minimumAmountFilter !== '') {
        return transactions.filter((transaction) => {
            return transaction.amount >= filter.minimumAmountFilter;
        });
    }
    return transactions;
};

const getMinimumDateFiltered = (transactions, filter) => {
    if (filter.minimumDateFilter !== '') {
        return transactions.filter((transaction) => {
            return new Date(transaction.dateOfTransaction) >= new Date(filter.minimumDateFilter);
        });
    }
    return transactions;
};

const getMaximumDateFiltered = (transactions, filter) => {
    if (filter.maximumDateFilter !== '') {
        return transactions.filter((transaction) => {
            return new Date(transaction.dateOfTransaction) <= new Date(filter.maximumDateFilter);
        });
    }
    return transactions;
};

const getTypeOfTransactionFiltered = (transactions, filter) => {
    if (filter.typeOfTransactionFilter !== 'ALL') {
        return transactions.filter((transaction) => {
            return transaction.typeOfTransaction === filter.typeOfTransactionFilter;
        });
    }
    return transactions;
};

TransactionPresentation.defaultProps = {
    transactions: [],
    filter: {
        minimumAmountFilter: '',
        maximumAmountFilter: '',
        minimumDateFilter: '',
        maximumDateFilter: '',
        typeOfTransactionFilter: 'ALL'
    }
};

TransactionPresentation.propTypes = {
    onSort: PropTypes.func,
    filter: PropTypes.shape({
        minimumAmountFilter: PropTypes.string,
        maximumAmountFilter: PropTypes.string,
        minimumDateFilter: PropTypes.string,
        maximumDateFilter: PropTypes.string,
        typeOfTransactionFilter: PropTypes.string
    })
};

export default TransactionPresentation;
