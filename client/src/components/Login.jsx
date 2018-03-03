import React from 'react';

const Login = (props) => (
    <div className="Login">
        <div>
            <input placeholder="Nickname" type="text" />
        </div>
        <div>
            <input placeholder="masterblaster.goip.de" type="text" />
        </div>
        <div>
            <input type="submit" value="Connect"/>
        </div>
    </div>
)

export default Login;