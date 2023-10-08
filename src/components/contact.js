import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'

export default function AppContact(){
    return(
       <section id='contact' className='block contact-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Contact us</h2>
                <div className='subtitle'>you are with us</div>
            </div>
            <Form className='contact-form'>
                <Row>
                    <Col sm={4}>
                    <Form.Control type="text" placeholder="First name" required/>
                    </Col>
                    <Col sm={4}>
                    <Form.Control type="email" placeholder="email" required/>
                    </Col>
                    <Col sm={4}>
                    <Form.Control type="tel" placeholder="telephone" required/>
                    </Col>  
                </Row>
                <Row>
                    <Col sm={12}>
                        <Form.Control as="textarea" placeholder='Enter your comment'/>
                    </Col>
                </Row>
                <div className='btn-holder'>
                    <Button type="submit">Submit</Button>
                </div>
                </Form>
        </Container>
        <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71798.61307525355!2d49.1388928!3d55.7809664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead2bf058c7cf%3A0x7156d6346a9f8df6!2sKazanMall!5e0!3m2!1sen!2sru!4v1696759836937!5m2!1sen!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
        <Container fluid>
            <div className='contact-info'>
                <ul>
                    <li>
                        <i className='fas fa-envelope'></i>
                        info@coffeemood.com
                    </li>
                    <li>
                        <i className='fas fa-phone'></i>
                        971-445-42-41
                    </li>
                    <li>
                        <i className='fas fa-map-marker-alt'></i>
                        Ulitsa Pavlyukhina, 91, Kazan, Republic of Tatarstan, 420059
                    </li>
                </ul>
            </div>
        </Container>


       </section>
    )
}