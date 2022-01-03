const ContactItem = ({contact}) => {
    return (
        <div>
            <p>id: {contact.id}</p>
            <p>name: {contact.name}</p>
            <p>phone: {contact.phone}</p>
        </div>
    )
}

export default ContactItem
