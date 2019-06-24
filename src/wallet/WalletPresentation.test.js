import React from 'react';
import { shallow } from 'enzyme';
import WalletPresentation from "./WalletPresentation";

describe('WalletPresentation', () => {
    describe('#render', () => {
        const profileData = {
            id: 1,
            firstName: 'Blake',
            lastName: 'Tatchell',
            phoneNumber: '7826854186',
            dateOfBirth: '04/07/1992',
            gender: 'FEMALE',
            email: 'btatchell0@xinhuanet.com'
        };

        const walletData = {
            id: 1,
            accountNumber: '1234567890',
            currentBalance: 2200000,
            user: profileData
        };

        it('should show the wallet data (account number and the current balance) of the given wallet', () => {
            const walletPresentationComponent = shallow(<WalletPresentation wallet={walletData}/>);

            expect(walletPresentationComponent.find('#wallet-account-number').text()).toBe(walletData.accountNumber);
            expect(walletPresentationComponent.find('#wallet-balance').text()).toBe((walletData.currentBalance).toString());
        });
    });
});
