import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img31 from '../asssets/images/img31.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';





export default function AppAbout(){
    const coffee = 100;
    const Tea= 80;
    const Dessert = 75;
    return (
        <section id="about" className='block about-block'>

      
        <Container fluid>
            <div className='title-holder'>
                <h2>About Us</h2>
                <div className='subtitle'>Learn more about us</div>
            </div>
      <Row>
        <Col sm={6}>
        <Image src={img31}/>
        </Col>
        <Col sm={6}>
            <p>
            At Coffee Mood, we believe in the power of a good brew to ignite conversations and foster connections. Set against a backdrop of warm woods and rustic charm, our coffee is more than just a drink – it’s an experience. Sourced from the finest beans and handcrafted with love, each cup tells a story. Come, be a part of our tale and make memories one sip at a time.<br/>
            we still make progress and add more options to our customers.
                </p>
                <div className='progress-block'>
                    <h4>COFFEE/LATTE/CAPPUCCINO</h4>
                    <ProgressBar now={coffee} label={`${coffee}%`} />
                </div>
                <div className='progress-block'>
                    <h4>TEA</h4>
                    <ProgressBar now={Tea} label={`${Tea}%`} />
                </div>
                <div className='progress-block'>
                    <h4>DESSERTS</h4>
                    <ProgressBar now={Dessert} label={`${Dessert}%`} />
                </div>
                </Col>

      </Row>
    </Container>
    </section>
    )
}