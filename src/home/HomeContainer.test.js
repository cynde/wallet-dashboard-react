import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from "./HomeContainer";
import axios from 'axios';

jest.mock('axios');

const flushPromises = () => new Promise(setImmediate);

describe('HomeContainer', () => {
    describe('#render', () => {
        it('should render home presentation component', () => {
            const homeContainerComponent = shallow(<HomeContainer/>);

            expect(homeContainerComponent.find('HomePresentation')).toHaveLength(1);
        });
    });

    describe('#fetchWallet', () => {
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

        it('should get wallet data when called', async () => {
            axios.get.mockResolvedValue({data: walletData});

            const homeContainerComponent = shallow(<HomeContainer/>);
            await flushPromises();

            expect(homeContainerComponent.state().wallet).toEqual(walletData);
        });

        it('should get profile data when called', async () => {
            axios.get.mockResolvedValue({data: profileData});

            const homeContainerComponent = shallow(<HomeContainer/>);
            await flushPromises();

            expect(homeContainerComponent.state().profile).toEqual(profileData);
        });

        it('should have error message when failed to catch the api endpoint', async() => {
            axios.get.mockRejectedValue(new Error('Internal Server Error'));

            const homeContainerComponent = shallow(<HomeContainer/>);
            await flushPromises();

            expect(homeContainerComponent.state().errorMessage).toContain('Internal Server Error');

        });
    });
});
