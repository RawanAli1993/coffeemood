import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';





const worksData = [

    {id: 1,
        title: 'The perfect one',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/media1.jpg'),
        subtitle: 'kncsdkvnjsfs',
        link: 'http://www.twitter.com'
    },
    {id: 2,
        title: 'The perfect one',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/img33.jpg'),
        subtitle: 'kncsdkjsbvhjsfbjsfs',
        link: 'http://www.twitter.com'
    },
    {id: 3,
        title: 'The perfect one',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/img13.jpg'),
        subtitle: 'kncsdkvnjsfbjsfs',
        link: 'http://www.twitter.com'
    },
    {id: 4,
        title: 'The perfect one',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/coffe5.jpg'),
        subtitle: 'kncsdkvnsnfbjsfs',
        link: 'http://www.twitter.com'
    },
    {id: 5,
        title: 'The perfect one',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/blog1.jpg'),
        subtitle: 'kncsdkvnsnfbjsfs',
        link: 'http://www.twitter.com'
    },
    {id: 6,
        title: 'The perfect one',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/3.jpg'),
        subtitle: 'kncsdkvnsnfvfbjsfs',
        link: 'http://www.twitter.com'
    }
  



]
let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
export default function Appworks(){
    return (
        // <div>works</div>
        <section id='works' className='block works-block'>
            <Container fluid>
            <div className='title-holder'><h2>Our Vibes</h2>
        <div className='subtitle'>
            
            some remarkable moments with our visitors
        </div></div>
      <Row className='portfoliolist'>
        {
        worksData.map (works => {
            return (
                <Col sm={4} key={works.id}>
            <div className='portfolio-wrapper'>
                <a href={works.link}>
                    <Image src={works.image} />
                    
                <div className='label text-center'>
                    <h3>{works.title}</h3>
                    <p>{works.subtitle}</p>
                </div>
                </a>
            </div>




        </Col>


            )
        })}
        
      </Row>
      <Pagination>{items}</Pagination>
    </Container>

        </section>
     
    )
}