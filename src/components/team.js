import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';



const teamsData = [
    {id: 1,
        name: 'Sophia Pitt',
        image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/waiter4.jpg'),
        designation: 'Waiter',
        description: "",
        falink: 'http://www.twitter.com',
        twitterlink: 'http://www.twitter.com',
        linkedinlink: 'http://www.twitter.com'
    
    
    },
    
    
        

        {id: 2,
            name: 'Ryan Giggs',
            image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/waiter2.jpg'),
            designation: 'waiter',
            description : "jkhnkj.hil.innlk",
            falink: 'http://www.twitter.com',
            twitterlink: 'http://www.twitter.com',
            linkedinlink: 'http://www.twitter.com'},
            {id: 3,
                name: 'Sarah Wills',
                image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/owner.jpg'),
                designation: 'kncsdkvnjsfs',
                description: "Barista",
                falink: 'http://www.twitter.com',
                twitterlink: 'http://www.twitter.com',
                linkedinlink: 'http://www.twitter.com'},
                {id: 4,
                    name: 'Gabriel Hart',
                    image: require('/home/rawan/Desktop/React/coffeemood/src/asssets/images/barista2.jpg'),
                    designation: 'kncsdkvnjsfs',
                    description: "Media Expert",
                    falink: 'http://www.twitter.com',
                    twitterlink: 'http://www.twitter.com',
                    linkedinlink: 'http://www.twitter.com'}

]

export default function AppTeam(){
    return(
        <section id='teams' className='block teams-block'>
        <Container fluid>
        <div className='title-holder'><h2>Our Team</h2>
    <div className='subtitle'>
        some of our creative people
    </div></div>
  <Row className='portfoliolist'>
    {
    teamsData.map (teams => {
        return (
            <Col sm={3} key={teams.id}>
        <div className='image'>

            <Image src={teams.image} alt='Image'/>
            <div className='overlay'>
                <div className='socials'>
                <ul>
                    <li> <a href={teams.falink}><i className="fab fa-facebook-f"></i></a> </li>
                    <li> <a href={teams.twitterlink}><i className="fab fa-twitter"></i></a> </li>
                    <li> <a href={teams.linkedinlink}><i className="fab fa-linkedin-in"></i> </a> </li>

                </ul>
            </div>
             </div>
             </div>
             <div className='contebt'>
                <h3>
                   {teams.name}
                </h3>
                <span className='desigation'> {teams.designation}</span>
                <p>{teams.description}</p>
             </div>
        




    </Col>


        )
    })}
    
  </Row>
  {/* <Pagination>{items}</Pagination> */}
</Container>

    </section>
    )
}