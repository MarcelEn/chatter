import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Login from './Login.jsx';
import Center from '../components/Center.jsx';
import Loader from '../components/Loader.jsx';
import { actions } from './actions';

class App extends Component {
  render() {
    switch (this.props.UI.procedureState) {
      case 'searchConfig':
        return (
          <Center>
            <Loader />
          </Center>
        );
      default:
        return (
          <Center>
            <Login
              submitHandler={this.props.createConnectToken}
            />
          </Center>
        );
    }

  }
}

const mapStateToProps = (state) => (state)

const mapDispatchToProps = (dispatch) => ({
  createConnectToken: (userInputNameServer) => { dispatch(actions.createConnectToken(userInputNameServer)) }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)