import React from 'react';
import HomePresentation from "./HomePresentation";
import axios from 'axios';

class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            walletApi: 'http://localhost:8080/wallets/1234567890',
            profileApi: 'http://localhost:8080/users/1',
            wallet: {},
            profile: {},
            errorMessage: ''
        }
    }

    componentDidMount() {
        this.fetchWallet();
        this.fetchProfile();
    }

    fetchWallet = async () => {
        try {
            const {data} = await axios.get(this.state.walletApi);
            this.setState({
                wallet: data
            })
        } catch (error) {
            this.setState({
                errorMessage: error.message
            })
        }
    };

    fetchProfile = async () => {
        try {
            const {data} = await axios.get(this.state.profileApi);
            this.setState({
                profile: data
            })
        } catch (error) {
            this.setState({
                errorMessage: error.message
            })
        }
    };

    render() {
        const {wallet, profile, errorMessage} = this.state;
        return (
            <div className="home__container">
                <HomePresentation wallet={wallet} profile={profile} errorMessage={errorMessage}/>
            </div>
        )
    }
}

export default HomeContainer;
