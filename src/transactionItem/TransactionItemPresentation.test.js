import React from 'react';
import { shallow } from 'enzyme';
import TransactionItemPresentation from "./TransactionItemPresentation";

describe('TransactionItemPresentation', () => {
    describe('#render', () => {
        const transactionData = {
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
                        "email": "btatchell0@xinhuanet.com"
                    }
                },
                "updatedBalance": 2100000
            };

        it('should show a row of transaction of the given transaction data', () => {
            const transactionPresentationComponent = shallow(<TransactionItemPresentation transaction={transactionData}/>);
            const transactionColumns = transactionPresentationComponent.find('tbody td');

            transactionColumns.forEach((transactionColumn, index) => {
                expect(transactionColumn.text()).toEqual(transactionData[index].id.toString());
                expect(transactionColumn.text()).toEqual(transactionData[index].dateOfTransaction);
                expect(transactionColumn.text()).toEqual(transactionData[index].typeOfTransaction);
                expect(transactionColumn.text()).toEqual(transactionData[index].amount.toString());
                expect(transactionColumn.text()).toEqual(transactionData[index].updatedBalance.toString());
            });
        });
    });
});
