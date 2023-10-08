import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const priceData = [
    {
        id: 1,
        category: "Small",
        ingrediants: ['One shot coffee', 'Milk', 'Sugar' ],
        link: 'http://www.google.com',
        price: '₽150'
    },
    {
        id: 2,
        category: "Meduim",
        ingrediants: ['One shot coffee', 'Extera milk', 'Sugar/syrup(banana, vanilla)' ],
        link: 'http://www.google.com',
        price: '₽190'
    },
    {
        id: 3,
        category: "large",
        ingrediants: ['Double shot coffee', 'Extera milk', 'Sugar/syrup(banana, vanilla)' ],
        link: 'http://www.google.com',
        price: '₽220'
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