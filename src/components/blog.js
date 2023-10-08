import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';




const blogData =[
    {
        id: 1,
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/waiter3.jpeg'),
        title: 'coffee lovers',
        description:'Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans',
        time:'12.Nov.2022',
        link:'http://www.google.com'

    },
    {
        id: 2,
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/premium_photo-1675789510270-b968e067b6e2.jpeg'),
        title: 'coffee lovers',
        description:'Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans',
        time:'12.Nov.2022',
        link:'http://www.google.com'

    },
    {
        id: 3,
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/1.jpg'),
        title: 'coffee lovers',
        description:'Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans',
        time:'12.Nov.2022',
        link:'http://www.google.com'

    }
    
]

export default function AppBlog() {
    return(


        <section>
             <Container fluid>
             <div className='title-holder'><h2>Blogs</h2>
        <div className='subtitle'>
            our memories</div></div>
      <Row>
        {
            blogData.map(blog => {
                return(
                    <Col sm={4} key={blog.id}>
            <div className="holder">
            <Card>
                <Card.Img variant="top" src={blog.image} />
                <Card.Body>
                    <time>{blog.time}</time>
                    
                    <Card.Title>{blog.title}</Card.Title>
                    <Card.Text>
                   {blog.description}
                    </Card.Text>
                  <a href={blog.link} className='btn btn-primary'>Read more<i className="fas fa-chevron-right"></i></a>
                </Card.Body>
                </Card>

            </div>
            
            
            
            
            </Col>

                )
            })
        }

        
      </Row>
    </Container>


        </section>
        
        )
        
}