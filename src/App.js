import React from 'react';
import './App.css';
import logo from './logo.png';
import { Route, Link } from 'react-router-dom';
import HomeContainer from './home/HomeContainer';
import TransactionContainer from './transaction/TransactionContainer';

function App() {
    return (
        <div className="App">
            <div className="sidebar">
                <img src={logo} alt="bank-icon"/>
                <h2>CHiP Bank</h2>
                <h4>internet</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/transactions">Transactions</Link></li>
                </ul>
            </div>
            <div className="navbar">
                <span><i className="fa fa-sign-out fa-lg"/>Logout</span>
            </div>
            <div className="content">
                <Route exact path="/" component={HomeContainer} />
                <Route path="/transactions" component={TransactionContainer} />
            </div>
        </div>
  );
}

export default App;
