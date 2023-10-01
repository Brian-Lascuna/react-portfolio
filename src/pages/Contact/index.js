// Contact Page HTML
import React from "react";
import ContactForm from "../../components/ContactForm";
import './contact.css';

const Contact = () => {
    return (
        <React.Fragment>
            <div className="h-5/6 w-1/4 bg-white m-auto mt-12 p-4 form-container">
            <ContactForm />
            </div>
        </React.Fragment>
    )
}

export default Contact;