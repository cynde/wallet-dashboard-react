import React from 'react';

const ProfilePresentation = (props) => {
    const {profile} = props;
    return (
        <div className="box profile">
            <div className="box__title">
                <i className="fa fa-user fa-2x"/><p className="box__title--text">Your Profile</p>
            </div>
            <div className="box__body">
                <div className="profile__body--detail">
                    <span className="profile__body--field">First Name</span>
                    <span>: &nbsp;</span>
                    <span className="profile__body--value" id="user-first-name">{profile.firstName}</span>
                </div>
                <div className="profile__body--detail">
                    <span className="profile__body--field">Last Name</span>
                    <span>: &nbsp;</span>
                    <span className="profile__body--value" id="user-last-name">{profile.lastName}</span>
                </div>
                <div className="profile__body--detail">
                    <span className="profile__body--field">Email</span>
                    <span>: &nbsp;</span>
                    <span className="profile__body--value" id="user-email">{profile.email}</span>
                </div>
                <div className="profile__body--detail">
                    <span className="profile__body--field">Date Of Birth</span>
                    <span>: &nbsp;</span>
                    <span className="profile__body--value" id="user-date-of-birth">{profile.dateOfBirth}</span>
                </div>
                <div className="profile__body--detail">
                    <span className="profile__body--field">Gender</span>
                    <span>: &nbsp;</span>
                    <span className="profile__body--value" id="user-gender">{profile.gender}</span>
                </div>
                <div className="profile__body--detail">
                    <span className="profile__body--field">Phone Number</span>
                    <span>: &nbsp;</span>
                    <span className="profile__body--value" id="user-phone">{profile.phoneNumber}</span>
                </div>
            </div>
        </div>
    );
};

export default ProfilePresentation;
