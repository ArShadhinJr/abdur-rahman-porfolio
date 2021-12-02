import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    const form = useRef();

    const sendEmail = ( e ) => {
        e.preventDefault();

        emailjs.sendForm( 'service_ddxep1b', 'template_g8d9eje', form.current, 'user_anwibJU1GtZHadHmtzUZH' )
            .then( ( result ) => {
                alert( "Thanks, your message send successfully." );
                form.current.reset();
            }, ( error ) => {
                alert( error.text );
                form.current.reset();
            } );
            
    };

    return (

        <><Container>
            <h2 className="mb-0 pb-0 text-info text-uppercase fw-bolder fs-2 nav-heading" href="#"><span className="fs-1 text-black-50">c</span>ontact</h2>
            <Row xs={1} md={2}>
                <Col className="ps-3 pe-5">
                    <form ref={form} className="text-start" onSubmit={sendEmail}>
                        <label class="form-label">Name</label>
                        <input class="form-control" type="text" name="name" />
                        <label class="form-label">Email</label>
                        <input class="form-control" type="email" name="email" />
                        <label class="form-label">Subject</label>
                        <input class="form-control" type="text" name="subject" />
                        <label class="form-label">Message</label>
                        <textarea class="form-control" rows="3" name="message" />
                        <input class="btn btn-info  mb-3 mt-2" type="submit" value="Send" />
                    </form>
                </Col>
                <Col></Col>
            </Row></Container></>
    );
};

export default Contact;