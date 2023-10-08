import Carousel from 'react-bootstrap/Carousel';

var heroData = [
    {
        id: 1,
        title: 'Are you in Coffee Mood ?',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/photo-1513530176992-0cf39c4cbed4.jpg'),
       
        description: 'Coffee is a hug in a mug at Coffee Mood',
        link: 'http://www.google.com'
    },
    { id: 2,
        title: 'Are you in Coffee Mood ?',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/1.jpg'),
     
        description: '',
        link: 'http://www.facebook.com'
    },
    { id: 3,
        title: 'Are you in Coffee Mood ?',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/home3.jpeg'),
        description: 'Where every sip feels like home',
        link: 'http://www.twitter.com'
    }
]

export default function AppHero() {
    return (
        <section id="home" className='hero-block'>

        
<Carousel >
    {heroData.map(hero => {return(

   
      <Carousel.Item key={hero.id}>
        <img
          className="d-block w-100"
          src={hero.image} 
          alt={"slide" + hero.id}
        />
        <Carousel.Caption>
          <h5>{hero.title}</h5>
          <p>{hero.description}</p>
          <a className='btn btn-primary' href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
        </Carousel.Caption>
      </Carousel.Item>
      /* <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */
      )} )}
    </Carousel>
    </section>
    )
}