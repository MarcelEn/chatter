const hash = require('object-hash');

export const actionNames = {
    SET_PROCEDURE_STATE: 'SET_PROCEDURE_STATE',
    CREATE_CONNECT_TOKEN: 'CREATE_CONNECT_TOKEN'
}

export const actions = {
    setProcedureStateLogin: (newProcedureState) => ({ type: actionNames.SET_PROCEDURE_STATE, payload: newProcedureState }),
    createConnectToken: (userInputNameServer) => ({
        type: actionNames.CREATE_CONNECT_TOKEN, payload: {
            name: createToken(userInputNameServer.name),
            server: userInputNameServer.server
        }
    })
}




function createToken(name) {
    const getRandomToken = () => {
        let token = '';
        for (let i = 0; i < 1000; i++) {
            token += '' + Math.random();
        }
        return hash(token);
    }
    const token = getRandomToken();
    return name + '==' + token + ':' + hash(name + token);
}
