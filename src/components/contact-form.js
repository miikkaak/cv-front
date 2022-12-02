import { FormControl, TextField} from '@mui/material';
import { useRef, useState } from 'react';
import '../styles/_contact-form.scss';
import '../styles/_block.scss';
import { submitFormData } from '../api/api';

const ContactForm = () => {
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ serverMessage, setServerMessage ] = useState(null);
    
    const name = useRef('');
    const email = useRef('');
    const phone = useRef('');
    const message = useRef('');
    
    const submitForm = (e) => {
        e.preventDefault();
        if (!isErrors()) {
            const data = {
                name: name.current.value, 
                email: email.current.value, 
                phone: phone.current.value, 
                message: message.current.value
            }

            try {
                submitFormData(data)
                    .then((res) => {
                        if (res.error) {
                            setServerMessage(res.error.includes('email') ? res.error : 'Something went wrong');
                            setSuccess(false);
                            return;
                        }

                        if (res.message == false) {
                            setServerMessage('Something went wrong');
                            setSuccess(false);
                            return;
                        }

                        setServerMessage(res.message);
                        setSuccess(true);
                        name.current.value = '';
                        email.current.value = '';
                        phone.current.value = '';
                        message.current.value = '';
                    });
            } catch (error) {
                // console.log(error);
                setServerMessage(error);
            }
        }       
    }

    const isErrors = () => {
        let errors = false;

        if (name.current.value == '') {
            setNameError(true);
            errors = true;
        } else {
            setNameError(false);
        }

        if (email.current.value == '') {
            setEmailError(true);
            errors = true;
        } else {
            setEmailError(false);
        }

        if (message.current.value == '') {
            setMessageError(true);
            errors = true;
        } else {
            setMessageError(false);
        }

        return errors;
    }

    return (
        <div className="form-container">
            <div className="form">
                <FormControl
                    fullWidth={true}
                >
                    <div className='form-row'>
                       <TextField
                            error={nameError}
                            id="name"
                            label="Name"
                            fullWidth={true}
                            helperText={nameError ? "Name is required" : ''}
                            inputRef={name}
                        /> 
                    </div>
                    <div className='form-row'>
                        <TextField
                            error={emailError}
                            id="email"
                            label="Email"
                            fullWidth={true}
                            helperText={emailError ? "Email is required" : ''}
                            inputRef={email}
                        />
                    </div>
                    <div className='form-row'>
                        <TextField
                            id="phone"
                            label="Phone (optional)"
                            fullWidth={true}
                            inputRef={phone}
                        />
                    </div>
                    <div className='form-row'>
                        <TextField
                            error={messageError}
                            id="message"
                            label="Message"
                            multiline={true}
                            rows="8"
                            fullWidth={true}
                            inputRef={message}
                            helperText={messageError ? "Message is required" : ''}
                        />
                    </div>
                    <div className='form-row submit'>
                        <a className="cta-button" onClick={submitForm}>Submit</a>
                    </div>
                    { serverMessage != null &&
                        <div className='form-row' style={{alignSelf:"center"}}>
                            { success ? 'Your message was submitted successfully!': serverMessage}
                        </div>
                    }
                </FormControl>
            </div>
        </div>
    );
}

export default ContactForm;