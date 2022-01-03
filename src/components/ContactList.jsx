import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useEffect} from "react";
import {getContactsAsync} from "../redux/contactsSlice"
import ContactItem from "./ContactItem";

const ContactList = () => {
    const contacts = useSelector((state) => state.contacts.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getContactsAsync())
    }, [dispatch])

    return (
        <div>
            <h2>Contacts Page</h2>
            {contacts.map(contact => {
                return (
                    <div key={contact.id}>
                        <ContactItem contact={contact}/>
                        <hr/>
                    </div>
                )
            })}
            <p>
                <Link to="/">Back to Home Page</Link>
            </p>
        </div>
    )
}

export default ContactList
