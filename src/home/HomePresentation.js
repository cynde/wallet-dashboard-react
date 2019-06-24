import React from 'react';
import ProfilePresentation from "../profile/ProfilePresentation";
import WalletPresentation from "../wallet/WalletPresentation";
import PropTypes from 'prop-types';
import ErrorPresentation from "../error/ErrorPresentation";

const HomePresentation = (props) => {
    const {wallet, profile, errorMessage} = props;
    return (
        <div>
            <div className="content__row">
                <WalletPresentation wallet={wallet}/>
                <ProfilePresentation profile={profile}/>
            </div>
            <div className="content__row">
                <ErrorPresentation errorMessage={errorMessage}/>
            </div>
        </div>
    );
};

HomePresentation.defaultProps = {
    wallet: {},
    profile: {}
};

HomePresentation.propTypes = {
    wallet: PropTypes.shape({
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
    }),
    profile: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        phoneNumber: PropTypes.string,
        dateOfBirth: PropTypes.string,
        gender: PropTypes.string,
        email: PropTypes.string
    })
};

export default HomePresentation;
