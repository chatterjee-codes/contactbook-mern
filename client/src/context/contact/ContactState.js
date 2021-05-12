import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER
} from '../types';

const ContactState = props => {
    const initialState = {

        // these will be pulled from the api
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email:'jill@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Sara Whatson',
                email:'sara@gmail.com',
                phone: '222-222-2222',
                type: 'personal'
            }
        ]
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //add actions to be send tothe reducer function ContactReducer

    //add contact

    //delete contact

    //set current contact

    //clear current contact

    //update contact

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider
        
            value = {{
                contacts: state.contacts
            }}
        >

            { props.children}
        </ContactContext.Provider>
    )

};

export default ContactState;