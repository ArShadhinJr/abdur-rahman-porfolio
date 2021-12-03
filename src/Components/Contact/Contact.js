import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import "./Contact.css";

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

        <><div className="bg-custom"><Container>
            <h2 className="mb-0 pb-0 text-info text-uppercase fw-bolder fs-2 nav-heading pt-4" href="#"><span className="fs-1 text-black-50">c</span>ontact <span className="fs-1 text-black-50">M</span>e</h2>
            <Row xs={1} md={2}>
                <Col className="ps-3 pe-3">
                    <form ref={form} className="text-start" onSubmit={sendEmail}>
                        <label class="form-label pt-1 ps-1 mb-0"><i class="p-0 m-0 fas fa-user-circle"></i> {" "}Name</label>
                        <input class="form-control" type="text" name="name" placeholder="Pleace! Type Your Name." />
                        <label class="form-label pt-1 ps-1 mb-0"><i class="p-0 m-0 fas fa-at"></i> {" "}Email</label>
                        <input class="form-control" type="email" name="email" placeholder="Pleace! Type Your Email." />
                        <label class="form-label pt-1 ps-1 mb-0" ><i class="p-0 m-0 fas fa-envelope"></i> {" "}Subject</label>
                        <input class="form-control" type="text" name="subject" placeholder="Pleace! Type Your Subject." />
                        <label class="form-label pt-1 ps-1 mb-0"><i class="p-0 m-0 fas fa-keyboard"></i> {" "}Message</label>
                        <textarea class="form-control" rows="5" name="message" placeholder="Pleace! Type Your Message." />
                        <input class="btn btn-info  mb-3 mt-2" type="submit" value="Send Email" />
                    </form>
                </Col>
                <Col><Card.Img variant="top" className=" p-xs-3 p-2" src="https://i.ibb.co/dfk9cpD/123formbuilder-account-1x.png" /></Col>
            </Row></Container></div></>
    );
};

export default Contact;