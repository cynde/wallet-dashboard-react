import React from 'react';
import {shallow} from 'enzyme';
import TransactionFormContainer from './TransactionFormContainer';

describe('TransactionFormContainer', () => {
    const handleOnSubmit = jest.fn();
    describe('#render', () => {
        const transactionFormComponent = shallow(<TransactionFormContainer onSubmit={handleOnSubmit}/>);
        it('should have one number input for amount', () => {
            expect(transactionFormComponent.find('input[name="amount"]')).toHaveLength(1);
        });
        it('should have two date input for date of transaction', () => {
            expect(transactionFormComponent.find('input[name="dateOfTransaction"]')).toHaveLength(1);
        });
        it('should have one select input for type of transaction', () => {
            expect(transactionFormComponent.find('select')).toHaveLength(1);
        });
        it('should have submit button to add a transaction to transaction list', () => {
            expect(transactionFormComponent.find('button[type="submit"]')).toHaveLength(1);
        });
    });

    describe('#handleOnSubmit', () => {
        const inputDateOfTransaction = {
            target: {
                name: 'dateOfTransaction',
                value: '2019-07-19'
            }
        };

        const inputTypeOfTransaction = {
            target: {
                name: 'typeOfTransaction',
                value: 'CREDIT'
            }
        };

        const inputAmount = {
            target: {
                name: 'amount',
                value: 100000
            }
        };

        it('should get data of transaction from the form', () => {
            const transactionFormComponent = shallow(<TransactionFormContainer onSubmit={handleOnSubmit}/>);
            transactionFormComponent.find('#date-of-transaction').simulate('change', inputDateOfTransaction);
            transactionFormComponent.find('#type-of-transaction').simulate('change', inputTypeOfTransaction);
            transactionFormComponent.find('#amount').simulate('change', inputAmount);
            transactionFormComponent.find('#add-transaction').simulate('click');

            expect(handleOnSubmit).toHaveBeenCalled();
            expect(handleOnSubmit).toBeCalledWith({
                wallet: 1,
                dateOfTransaction: '2019-07-19',
                typeOfTransaction: 'CREDIT',
                amount: 100000
            });
        });
    });
});
