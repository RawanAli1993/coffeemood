import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';





var reviewsData = [

    {
        id: 1,
        name: "Rawan Ali",
        designation: "Engineer",
        description:"The ambiance here is so cozy; it's the perfect spot for a quiet afternoon."

    },
    {
        id: 2,
        name: "Karam Almaghout",
        designation: "Manager",
        description:"The space is so relaxing, making it ideal for both catching up on work and leisurely reading"

    },
    {
        id: 3,
        name: "Razan Amar",
        designation: "Artist",
        description:"I was greeted with the rich aroma of freshly brewed coffee as soon as I walked in."

    },
    {
        id: 4,
        name: "Masha Sonata",
        designation: "Vet",
        description:"From the decor to the coffee, everything here feels inviting and warm."

    }
]

export default function AppReview(){
    return (
        <section id="review" className='testimonials-block '>
             <Container fluid>
            <div className='title-holder'>
                <h2>Customers words</h2>
                <div className='subtitle'>More love and memories</div>
            </div>
            <Carousel controls={false}>
               {
                reviewsData.map(review => {
                    return(

                        <Carousel.Item key={review.id}>
                        <blockquote><p>{review.description}</p>
                        <cite>
                            <span className='name'>{review.name}</span>
                            <span className='designation'>{review.designation}</span>
                        </cite>
                        </blockquote>
                
                </Carousel.Item>
                        
                    )
                })
               }

           
{/* 
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
            <h3>first</h3>
            <p>it was sol amaxonh</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
            <h3>first</h3>
            <p>it was sol amaxonh</p>
        </Carousel.Caption>
        </Carousel.Item> */}




        
        </Carousel>
     </Container>


        </section>
   
    )
}