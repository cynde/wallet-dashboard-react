import React from 'react';
import { shallow } from 'enzyme';
import TransactionFilterPresentation from './TransactionFilterPresentation';

describe('TransactionFilterPresentation', () => {
    const inputMinimumAmountFilter = {
        target: {
            name: 'minimumAmountFilter',
            value: 2000000
        }
    };
    const inputMaximumAmountFilter = {
        target: {
            name: 'minimumAmountFilter',
            value: 2000000
        }
    };
    const inputMinimumDateFilter = {
        target: {
            name: 'minimumDateFilter',
            value: '2019-12-01'
        }
    };
    const inputMaximumDateFilter = {
        target: {
            name: 'maximumDateFilter',
            value: '2019-12-11'
        }
    };
    const inputTypeOfTransactionFilter = {
        target: {
            name: 'typeOfTransactionFilter',
            value: 'CREDIT'
        }
    };
    const handleOnChange = jest.fn();
    const transactionFilterPresentationComponent = shallow(<TransactionFilterPresentation onChange={handleOnChange}/>);

    describe('#render', () => {
        it('should have two number inputs for minimum and maximum amount filter', () => {
            expect(transactionFilterPresentationComponent.find('input[name="minimumAmountFilter"]')).toHaveLength(1);
            expect(transactionFilterPresentationComponent.find('input[name="maximumAmountFilter"]')).toHaveLength(1);
        });

        it('should have two date inputs for minimum and maximum date of transaction filter', () => {
            expect(transactionFilterPresentationComponent.find('input[name="minimumDateFilter"]')).toHaveLength(1);
            expect(transactionFilterPresentationComponent.find('input[name="maximumDateFilter"]')).toHaveLength(1);
        });

        it('should have a select inputs for type of transaction filter', () => {
            expect(transactionFilterPresentationComponent.find('select')).toHaveLength(1);
        });
    });

    describe('#onChange', () => {
        it('should called with a given minimum amount input filter', () => {
            transactionFilterPresentationComponent.find('input[name="minimumAmountFilter"]').simulate('change', inputMinimumAmountFilter);

            expect(handleOnChange).toBeCalledWith(inputMinimumAmountFilter);
        });
        it('should called with a given maximum amount input filter', () => {
            transactionFilterPresentationComponent.find('input[name="maximumAmountFilter"]').simulate('change', inputMaximumAmountFilter);

            expect(handleOnChange).toBeCalledWith(inputMaximumAmountFilter);
        });
        it('should called with a given minimum date input filter', () => {
            transactionFilterPresentationComponent.find('input[name="minimumDateFilter"]').simulate('change', inputMinimumDateFilter);

            expect(handleOnChange).toBeCalledWith(inputMinimumDateFilter);
        });
        it('should called with a given maximum date input filter', () => {
            transactionFilterPresentationComponent.find('input[name="minimumDateFilter"]').simulate('change', inputMaximumDateFilter);

            expect(handleOnChange).toBeCalledWith(inputMaximumDateFilter);
        });
        it('should called with a given type of transaction input filter', () => {
            transactionFilterPresentationComponent.find('select[name="typeOfTransactionFilter"]').simulate('change', inputTypeOfTransactionFilter);

            expect(handleOnChange).toBeCalledWith(inputTypeOfTransactionFilter);
        });
    });
});
