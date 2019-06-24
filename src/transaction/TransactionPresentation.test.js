import React from 'react';
import { shallow } from 'enzyme';
import TransactionPresentation from "./TransactionPresentation";

describe('TransactionPresentation', () => {
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
            "dateOfTransaction": "2019-07-20",
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
    const handleOnSort = jest.fn();
    describe('#render', () => {
        const transactionPresentationComponent = shallow(<TransactionPresentation transactions={transactionsData} onSort={handleOnSort}/>);

        it('should have one table for list of transactions', () => {
            expect(transactionPresentationComponent.find('#transactions-table')).toHaveLength(1);
        });
    });

    describe('#handleOnSort', () => {
        const inputSort = 'amount';
        it('should call the function when click a header of the table', () => {
            const transactionPresentationComponent = shallow(<TransactionPresentation transactions={transactionsData} onSort={handleOnSort}/>);

            transactionPresentationComponent.find({id: 'amount-header'}).simulate('click');

            expect(handleOnSort).toBeCalledWith(inputSort);
        });
    });

    describe('#getTransactionList', () => {
        const transactionPresentationComponent = shallow(<TransactionPresentation transactions={transactionsData} onSort={handleOnSort}/>);

        it('should show 3 different rows of transaction of the given wallet', () => {
            expect(transactionPresentationComponent.find('TransactionItemPresentation')).toHaveLength(3);
        });
    });

    describe('#getMaximumAmountFiltered', () => {
        it('should return filtered list of transaction when called with a maximum amount filter', () => {
            const filter = {
                minimumAmountFilter: '',
                maximumAmountFilter: '100000',
                minimumDateFilter: '',
                maximumDateFilter: '',
                typeOfTransactionFilter: 'ALL'
            };
            const expectedTransactionList = {
                "id": 3,
                "dateOfTransaction": "2019-07-20",
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
            };

            const transactionPresentationComponent = shallow(<TransactionPresentation transactions={transactionsData} onSort={handleOnSort} filter={filter}/>);

            expect(transactionPresentationComponent.find('TransactionItemPresentation')).toHaveLength(1);
            expect(transactionPresentationComponent.find('TransactionItemPresentation').props().transaction).toEqual(expectedTransactionList);
        });
    });

    describe('#getMinimumAmountFiltered', () => {
        it('should return filtered list of transaction when called with a minimum amount filter', () => {
            const filter = {
                minimumAmountFilter: '200000',
                maximumAmountFilter: '',
                minimumDateFilter: '',
                maximumDateFilter: '',
                typeOfTransactionFilter: 'ALL'
            };
            const expectedTransactionList = [
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
                }
            ];

            const transactionPresentationComponent = shallow(<TransactionPresentation transactions={transactionsData} onSort={handleOnSort} filter={filter}/>);

            expect(transactionPresentationComponent.find('TransactionItemPresentation')).toHaveLength(2);
            transactionPresentationComponent.find('TransactionItemPresentation').forEach((item, index) => {
                expect(item.props().transaction).toEqual(expectedTransactionList[index]);
            });
        });
    });

    describe('#getMinimumDateFiltered', () => {
        it('should return filtered list of transaction when called with a minimum date filter', () => {
            const filter = {
                minimumAmountFilter: '',
                maximumAmountFilter: '',
                minimumDateFilter: '2019-07-20',
                maximumDateFilter: '',
                typeOfTransactionFilter: 'ALL'
            };
            const expectedTransactionList = {
                "id": 3,
                "dateOfTransaction": "2019-07-20",
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
            };

            const transactionPresentationComponent = shallow(<TransactionPresentation transactions={transactionsData} onSort={handleOnSort} filter={filter}/>);

            expect(transactionPresentationComponent.find('TransactionItemPresentation')).toHaveLength(1);
            expect(transactionPresentationComponent.find('TransactionItemPresentation').props().transaction).toEqual(expectedTransactionList);
        });
    });

    describe('#getMaximumDateFiltered', () => {
        it('should return filtered list of transaction when called with a maximum date filter', () => {
            const filter = {
                minimumAmountFilter: '',
                maximumAmountFilter: '',
                minimumDateFilter: '',
                maximumDateFilter: '2019-07-19',
                typeOfTransactionFilter: 'ALL'
            };
            const expectedTransactionList = [
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
                }
            ];

            const transactionPresentationComponent = shallow(<TransactionPresentation transactions={transactionsData} onSort={handleOnSort} filter={filter}/>);

            expect(transactionPresentationComponent.find('TransactionItemPresentation')).toHaveLength(2);
            transactionPresentationComponent.find('TransactionItemPresentation').forEach((item, index) => {
                expect(item.props().transaction).toEqual(expectedTransactionList[index]);
            });
        });
    });

    describe('#getTypeOfTransactionFiltered', () => {
        it('should return filtered list of transaction when called with a type of transaction filter', () => {
            const filter = {
                minimumAmountFilter: '',
                maximumAmountFilter: '',
                minimumDateFilter: '',
                maximumDateFilter: '',
                typeOfTransactionFilter: 'CREDIT'
            };
            const expectedTransactionList = [
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
                }
            ];

            const transactionPresentationComponent = shallow(<TransactionPresentation transactions={transactionsData} onSort={handleOnSort} filter={filter}/>);

            expect(transactionPresentationComponent.find('TransactionItemPresentation')).toHaveLength(2);
            transactionPresentationComponent.find('TransactionItemPresentation').forEach((item, index) => {
                expect(item.props().transaction).toEqual(expectedTransactionList[index]);
            });
        });
    });
});
