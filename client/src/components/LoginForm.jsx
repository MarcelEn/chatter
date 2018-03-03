import React from 'react';

const LoginForm = (props) => (
    <div className="Login">
        <div>
            <input onChange={props.nameHandler} placeholder="Nickname" type="text" />
        </div>
        <div>
            <input onChange={props.serverHandler} placeholder="masterblaster.goip.de" type="text" />
        </div>
        <div>
            <button disabled={props.disableConnect} onClick={props.buttonHandler}>Connect</button>
        </div>
    </div>
)

export default LoginForm;