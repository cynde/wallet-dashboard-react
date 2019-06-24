import React from 'react';
import {shallow} from 'enzyme';
import TransactionContainer from "./TransactionContainer";
import axios from 'axios';

jest.mock('axios');

const flushPromises = () => new Promise(setImmediate);

describe('TransactionContainer', () => {
    const transactionsData = [
        {
            "id": 1,
            "dateOfTransaction": "2019-07-19",
            "typeOfTransaction": "CREDIT",
            "amount": 200000,
            "wallet": {
                "id": 1,
                "accountNumber": "1234567890",
                "currentBalance": 2200000,
                "user": {
                    "id": 1,
                    "firstName": "Blake",
                    "lastName": "Tatchell",
                    "phoneNumber": "7826854186",
                    "dateOfBirth": "04/07/1992",
                    "gender": "FEMALE",
                    "email": "btatchell0@xinhuanet.com",
                    "address": {
                        "id": 1,
                        "street": "853 Cordelia Road",
                        "city": "Pan-an",
                        "postalCode": "7202",
                        "country": "Philippines"
                    }
                }
            },
            "updatedBalance": 2100000
        },
        {
            "id": 2,
            "dateOfTransaction": "2019-07-19",
            "typeOfTransaction": "CREDIT",
            "amount": 200000,
            "wallet": {
                "id": 1,
                "accountNumber": "1234567890",
                "currentBalance": 2200000,
                "user": {
                    "id": 1,
                    "firstName": "Blake",
                    "lastName": "Tatchell",
                    "phoneNumber": "7826854186",
                    "dateOfBirth": "04/07/1992",
                    "gender": "FEMALE",
                    "email": "btatchell0@xinhuanet.com",
                    "address": {
                        "id": 1,
                        "street": "853 Cordelia Road",
                        "city": "Pan-an",
                        "postalCode": "7202",
                        "country": "Philippines"
                    }
                }
            },
            "updatedBalance": 2300000
        },
        {
            "id": 3,
            "dateOfTransaction": "2019-07-19",
            "typeOfTransaction": "DEBIT",
            "amount": 100000,
            "wallet": {
                "id": 1,
                "accountNumber": "1234567890",
                "currentBalance": 2200000,
                "user": {
                    "id": 1,
                    "firstName": "Blake",
                    "lastName": "Tatchell",
                    "phoneNumber": "7826854186",
                    "dateOfBirth": "04/07/1992",
                    "gender": "FEMALE",
                    "email": "btatchell0@xinhuanet.com",
                    "address": {
                        "id": 1,
                        "street": "853 Cordelia Road",
                        "city": "Pan-an",
                        "postalCode": "7202",
                        "country": "Philippines"
                    }
                }
            },
            "updatedBalance": 2200000
        }
    ];
    const params = {
        "dateOfTransaction": "2019-07-19",
        "typeOfTransaction": "CREDIT",
        "amount": 200000
    };
    describe('#render', () => {
        const homeContainerComponent = shallow(<TransactionContainer/>);

        it('should render home presentation component', () => {
            expect(homeContainerComponent.find('TransactionPresentation')).toHaveLength(1);
        });

        it('should render error presentation component', () => {
            expect(homeContainerComponent.find('ErrorPresentation')).toHaveLength(1);
        });
    });

    describe('#fetchTransactions', () => {
        it('should get all transactions data of given wallet when called', async () => {
            axios.get.mockResolvedValue({data: transactionsData});
            const transactionContainerComponent = shallow(<TransactionContainer/>);
            await flushPromises();

            expect(transactionContainerComponent.state().transactions).toEqual(transactionsData);
        });

        it('should display error message when failed to call the api endpoint', async() => {
            axios.get.mockRejectedValue(new Error('Internal Server Error'));
            const transactionContainerComponent = shallow(<TransactionContainer/>);
            await flushPromises();

            expect(transactionContainerComponent.state().errorMessage).toContain('Internal Server Error');
        });
    });

    describe('#handleOnSubmit', () => {
        it('should call put api in the given endpoint with the given parameter', async () => {
            const api = "http://localhost:8080/wallets/1234567890";
            axios.put.mockResolvedValue(params);
            const wrapper = shallow(<TransactionContainer/>);

            wrapper.find('TransactionFormContainer').props().onSubmit(params);
            await flushPromises();

            expect(axios.put).toHaveBeenCalledWith(api, params);
        });

        it('should add transaction to transactions list', async () => {
            axios.put.mockResolvedValue(params);
            axios.get
                .mockImplementationOnce(() => Promise.resolve({data: {}}))
                .mockImplementationOnce(() => Promise.resolve({data: params}));

            const transactionContainerComponent = shallow(<TransactionContainer/>);

            transactionContainerComponent.find('TransactionFormContainer').props().onSubmit(params);
            await flushPromises();
            const {transactions} = transactionContainerComponent.state();

            expect(transactions).toEqual(params);
        });
    });
});
