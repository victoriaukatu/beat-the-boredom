import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class PairingGame extends Component {

    render() {
        return (
            <h1>This is the page for the pairing game! It's basically the same as 'go fish'.</h1>
        )
    }

}

export default PairingGame;