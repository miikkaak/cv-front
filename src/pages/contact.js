import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/_home.scss";
import Block from "../components/block";
import { ReactComponent as ContactIcon } from "../img/contact.svg";
import ContactForm from "../components/contact-form";

function Contact() {
    return (
        <div>
            <Header/>
            <div className="page-container">
                <Block 
                    id="contact"
                    icon={<ContactIcon/>}
                    isDark={true}
                    isTopDown={true}
                    title="Contact Me"
                    excerpt={`Interested in working with me? Contact me with the form below or just message me at <a target=_blank href='https://www.linkedin.com/in/miikkakivinen/'>LinkedIn</a>`}
                    text=""
                />
                <ContactForm />
            </div>
            
            <Footer />
        </div>
    );
}

export default Contact;