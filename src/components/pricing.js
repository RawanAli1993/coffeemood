import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const priceData = [
    {
        id: 1,
        category: "Stander",
        ingrediants: ['coffee', 'milk', 'vanilia/banana' ],
        link: 'http://www.google.com',
        price: '$19'
    },
    {
        id: 2,
        category: "premium",
        ingrediants: ['coffee', 'Extera milk', 'Couconat' ],
        link: 'http://www.google.com',
        price: '$49'
    },
    {
        id: 3,
        category: "premium",
        ingrediants: ['coffee', 'milk', 'nuts' ],
        link: 'http://www.google.com',
        price: '$90'
    }
]

export default function AppPrice (){
    return(
        <section id='pricing'  className='block pricing-block'>

        <Container fluid>
        <div className='title-holder'><h2>Our prices</h2>
        <div className='subtitle'>
           We offer the best quality</div></div>



        <Row>
            {
                priceData.map(pricing => {
                    return(
                        <Col sm={4} key={pricing.id}>
            <div className='heading'>
                <h3>{pricing.category}</h3>
                <span className='price'>{pricing.price}</span>
            </div>
            <div className='content'>
            <ListGroup>
                {pricing.ingrediants.map((ingrediant, index) => {
                    return(
                        <ListGroup.Item key={index}> {ingrediant}</ListGroup.Item>
               

                    )
                }

                )}
                
                </ListGroup>
            </div>
            
            <div className='btn-holder'>
                <a href='#' className='btn btn-primary'>Order Now</a></div>
            </Col>

                    )
                })
            }
          
        </Row>
      </Container>
           </section>
       
    )
}