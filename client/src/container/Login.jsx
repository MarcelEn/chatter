import React, { Component } from 'react';
import LoginForm from '../components/LoginForm.jsx';

const standartServer = 'masterblaster.goip.de';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            server: ''
        }
        this.nameHandler = this.nameHandler.bind(this);
        this.serverHandler = this.serverHandler.bind(this);
        this.buttonHandler = this.buttonHandler.bind(this);
        
    }
    nameHandler(proxy){
        let name = proxy.target.value;
        this.setState({name})
    }
    serverHandler(proxy){
        let server = proxy.target.value;
        if(server === ''){
            server = standartServer;
        }
        this.setState({server})
    }
    buttonHandler(){
        this.props.submitHandler(this.state);
    }
    render() {
        return (
            <LoginForm
                nameHandler={this.nameHandler}
                serverHandler={this.serverHandler}
                buttonHandler={this.buttonHandler}
                disableConnect={this.state.name === ''}
            />
        )
    }
}

export default Login;