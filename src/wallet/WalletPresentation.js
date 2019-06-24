import React from 'react';
import PropTypes from "prop-types";

const WalletPresentation = (props) => {
    const {accountNumber, currentBalance} = props.wallet;
    return (
        <div className="box wallet">
            <div className="box__title">
                <i className="fa fa-money fa-2x"/><p className="box__title--text">Your Wallet</p>
            </div>
            <div className="box__body">
                <div className="wallet__detail">
                    <p>Account Number:</p>
                    <h4 id="wallet-account-number">{accountNumber}</h4>
                    <p>Current Balance in IDR:</p>
                    <h4 id="wallet-balance">{currentBalance}</h4>
                </div>
            </div>
        </div>
    );
};

WalletPresentation.propTypes = {
    accountNumber: PropTypes.string,
    currentBalance: PropTypes.number,
    user: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        phoneNumber: PropTypes.string,
        dateOfBirth: PropTypes.string,
        gender: PropTypes.string,
        email: PropTypes.string
    })
};

export default WalletPresentation;
