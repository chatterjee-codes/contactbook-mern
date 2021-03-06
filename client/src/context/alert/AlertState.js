import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {
    SET_ALERT,
    REMOVE_ALERT
    
} from '../types';

const AlertState = props => {
    const initialState = [];

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //add actions to be send tothe reducer function AuthReducer

    // set alert
    const setAlert = (msg, type, timeout = 2000) => {
        const id = uuidv4();
        dispatch({
            type: SET_ALERT,
            payload: { msg, type, id }
        });

        setTimeout( () => dispatch( { type: REMOVE_ALERT, payload: id } ), timeout )
    }
    

    return (
        <AlertContext.Provider
        
            value = {{
                alerts: state,
                setAlert
            }}
        >

            { props.children}
        </AlertContext.Provider>
    )

};

export default AlertState;