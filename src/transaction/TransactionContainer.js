import React from 'react';
import TransactionPresentation from "./TransactionPresentation";
import axios from 'axios';
import TransactionFormContainer from "../transactionForm/TransactionFormContainer";
import TransactionFilterPresentation from "../transactionFilter/TransactionFilterPresentation";
import ErrorPresentation from "../error/ErrorPresentation";

class TransactionContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fetchTransactionsApi: 'http://localhost:8080/wallets/1234567890/transactions',
            addTransactionApi: 'http://localhost:8080/wallets/1234567890',
            transactions: [],
            sort: {
                column: null,
                direction: 'descending'
            },
            minimumAmountFilter: '',
            maximumAmountFilter: '',
            minimumDateFilter: '',
            maximumDateFilter: '',
            typeOfTransactionFilter: 'ALL',
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.fetchTransactions();
    }

    fetchTransactions = async () => {
        try{
            const {data} = await axios.get(this.state.fetchTransactionsApi);
            this.setState({
                transactions: data
            })
        } catch (error) {
            this.setState({
                errorMessage: error.message
            })
        }
    };

    storeTransaction = async (transaction) => {
        const {dateOfTransaction, typeOfTransaction, amount} = transaction;
        const params = {
            dateOfTransaction: dateOfTransaction,
            typeOfTransaction: typeOfTransaction,
            amount: amount
        };
        try {
            return await axios.put(this.state.addTransactionApi, params);
        } catch (errorMessage) {
            this.setState( {
                errorMessage: errorMessage.message
            })
        }
    };

    handleOnSubmit = async (transaction) => {
        await this.storeTransaction(transaction);
        this.fetchTransactions();
    };

    sortTransactions = (firstTransaction, secondTransaction, column) => {
        let {firstData, secondData} = this.extractData(firstTransaction, secondTransaction, column);
        if(firstData < secondData) {
            return -1;
        }
        if(firstData > secondData) {
            return 1;
        }
        return 0;
    };

    extractData(firstTransaction, secondTransaction, column) {
        if(column === 'dateOfTransaction') {
            return {
                firstData: new Date(firstTransaction.dateOfTransaction),
                secondData: new Date(secondTransaction.dateOfTransaction)
            };
        }
        else if(column === 'typeOfTransaction') {
            return {
                firstData: firstTransaction.typeOfTransaction,
                secondData: secondTransaction.typeOfTransaction
            };
        }
        else {
            return {
                firstData: firstTransaction.amount,
                secondData: secondTransaction.amount
            };
        }
    };

    handleOnSort = (column) => () => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'ascending' ? 'descending' : 'ascending') : 'descending';
        const sortedTransactions = this.state.transactions.sort((firstTransaction, secondTransaction) => {
            return this.sortTransactions(firstTransaction, secondTransaction, column)
        });
        if(direction === 'descending') {
            sortedTransactions.reverse();
        }
        this.setState({
            transactions: sortedTransactions,
            sort: {
                column: column,
                direction: direction
            }
        });
    };

    handleOnChange = (event) => {
        const {name, value} = event.target;
        let newState = {};
        newState[name] = value;
        this.setState(newState);
    };

    render() {
        const  {transactions, minimumAmountFilter, maximumAmountFilter, minimumDateFilter, maximumDateFilter, typeOfTransactionFilter, errorMessage} = this.state;
        const filter = {
            minimumAmountFilter, maximumAmountFilter, minimumDateFilter, maximumDateFilter, typeOfTransactionFilter
        };
        return (
            <div className="transactions__container">
                <TransactionFormContainer onSubmit={this.handleOnSubmit}/>
                <TransactionFilterPresentation onChange={this.handleOnChange}/>
                <TransactionPresentation transactions={transactions} onSort={this.handleOnSort} filter={filter}/>
                <ErrorPresentation errorMessage={errorMessage}/>
            </div>
        );
    }
};

export default TransactionContainer;
