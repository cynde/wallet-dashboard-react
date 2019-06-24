import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import axios from "axios";

jest.mock('axios');

const flushPromises = () => new Promise(setImmediate);

describe('App', () => {
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

    it('should rendered without crashing', async () => {
      const divComponent = document.createElement('div');
      ReactDOM.render(<Router><App /></Router>, divComponent);
      await flushPromises();
      ReactDOM.unmountComponentAtNode(divComponent);
    });

    it('should show home component when rendered', async() => {
      axios.get
          .mockImplementationOnce(() => Promise.resolve({data: walletData}))
          .mockImplementationOnce(() => Promise.resolve({data: profileData}));

      const appComponent = mount(<MemoryRouter initialEntries={['/']}>
        <App/>
      </MemoryRouter>);
      await flushPromises();

      expect(appComponent.find('.home__container')).toHaveLength(1);
    });

    it('should show transactions component when rendered', () => {
      const appComponent = mount(<MemoryRouter initialEntries={['/transactions']}>
        <App/>
      </MemoryRouter>);

      expect(appComponent.find('.transactions__container')).toHaveLength(1);
    });
  });
});
