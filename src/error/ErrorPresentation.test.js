import React from 'react';
import { shallow } from 'enzyme';
import ErrorPresentation from "./ErrorPresentation";

describe('ErrorPresentation', () => {
    describe('#render', () => {
        it('should show error message from the given message', () => {
            const message = 'Internal Server Error';
            const errorPresentationComponent = shallow(<ErrorPresentation errorMessage={message}/>);
            expect(errorPresentationComponent.find('h1').text()).toEqual(message);
        });
    });
});
