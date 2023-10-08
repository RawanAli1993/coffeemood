import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const services = [

    {id: 1,
     icon: "fas fa-book",
     title: "Private Labeling",
     description: "Allow regulars or businesses to create their custom coffee blends and packaging for gifts, events, or resale."
    },
    {id: 2,
        icon: "fas fa-mug-hot",
        title: "Your Recipe",
        description: "where your coffee dreams transform into a reality. At the heart of this service lies an intimate understanding of your unique coffee preferences, ensuring every cup is an embodiment of your desires. "
       },
       {id: 3,
        icon: "fas fa-bicycle",
        title: "Coffee go",
        description: "With a few clicks on our user-friendly app or website, you can have artisanal coffee made to your exact liking, without the wait lines or the cafe ambiance noise."
       },
       {id: 4,
        icon: "fas fa-scroll",
        title: "Memories Wall",
        description: "Share with us your special moments in our lovely space."
       },
       {id: 5,
        icon: "fas fa-life-ring",
        title: "Coffee Catering Services",
        description: "Provide coffee stations for local events, businesses, or meetings, bringing fresh brews and pastries directly to the customer's location."
       },
       {id: 6,
        icon: "fas fa-cake",
        title: "Event Hosting",
        description: "Designate space for community events, book readings, live music, or private functions, providing catering with a curated menu of drinks and pastries."
       }
]

export default function Appservices(){
    return(
        <section id='services' className='block services-block'>
  {/* <div>Services</div> */}
     <Container fluid>
        <div className='title-holder'><h2>Our Services</h2>
        <div className='subtitle'>
            Services we provide
        </div>
        
        
        
        </div>
      <Row>

        {services.map(services => {
            return(
                <Col sm={4} className='holder' key={services.id}>
                <div className='icon'>
                    <i className={services.icon}></i></div>
                <h3> {services.title}</h3>
                <p>{services.description}</p>
        
        
                </Col>

            )
        })}
       
      </Row>
    </Container>
        </section>
      
    )
}