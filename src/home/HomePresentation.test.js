import React from 'react';
import { shallow } from 'enzyme';
import HomePresentation from "./HomePresentation";

describe('HomePresentation', () => {
    describe('#render', () => {
        const homePresentationComponent = shallow(<HomePresentation/>);
        it('should render profile presentation component', () => {
            expect(homePresentationComponent.find('ProfilePresentation')).toHaveLength(1);
        });

        it('should render wallet presentation component', () => {
            expect(homePresentationComponent.find('WalletPresentation')).toHaveLength(1);
        });

        it('should render error presentation component', () => {
            expect(homePresentationComponent.find('ErrorPresentation')).toHaveLength(1);
        });
    });
});
