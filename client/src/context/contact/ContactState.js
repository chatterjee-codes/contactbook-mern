import React, { useReducer } from 'react';
import {v4 as uuidv4} from 'uuid';
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

        // these will be pulled from the mongodb api
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
            },
            {
                id: 3,
                name: 'Harry White',
                email:'harry@gmail.com',
                phone: '333-333-3333',
                type: 'professional'
            }
        ],
        current: null
    };

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //add actions to be send tothe reducer function ContactReducer

    //add contact
    const addContact = (contact) => {

        // when we add to mongodb it creates an id for us
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    //delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }

    //set current contact
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    //clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    //update contact
    const  updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }

    // filter contacts

    // clear filter

    return (
        <ContactContext.Provider
        
            value = {{
                contacts: state.contacts,
                current: state.current,
                setCurrent,
                clearCurrent,
                addContact,
                deleteContact,
                updateContact
            }}
        >

            { props.children}
        </ContactContext.Provider>
    )

};

export default ContactState;