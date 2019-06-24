import React from 'react';
import { shallow } from 'enzyme';
import ProfilePresentation from "./ProfilePresentation";

describe('ProfilePresentation', () => {
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

        it('should show the profile data (name, email, date of birth, gender, phone, address) of the given user', () => {
            const walletPresentationComponent = shallow(<ProfilePresentation profile={profileData}/>);

            expect(walletPresentationComponent.find('#user-first-name').text()).toBe(profileData.firstName);
            expect(walletPresentationComponent.find('#user-last-name').text()).toBe(profileData.lastName);
            expect(walletPresentationComponent.find('#user-email').text()).toBe(profileData.email);
            expect(walletPresentationComponent.find('#user-date-of-birth').text()).toBe(profileData.dateOfBirth);
            expect(walletPresentationComponent.find('#user-gender').text()).toBe(profileData.gender);
            expect(walletPresentationComponent.find('#user-phone').text()).toBe(profileData.phoneNumber);
        });
    });
});
