import React from 'react';
import { Card, CardTitle, Row, Col, CardImg, Container, CardBody, CardText, CardLink, CardFooter } from 'reactstrap';
import '../style/Team.css'

class TeamMembers extends React.Component {
    render() {
        return (

            <>
            <h1 className="team_title">About Me</h1>
            <Container className="d-flex m-vh-100">
                {
                    <Row className="m-auto align-self-center">
                        <Col>
                            <Card className="card">
                                <CardImg bottom width="100%" src="https://media-exp3.licdn.com/dms/image/C4E03AQG4we6AICc0tQ/profile-displayphoto-shrink_400_400/0/1565284114929?e=1629936000&v=beta&t=IHM_pmNPL6XIPMzL0ZTKofdnzdgSRXKjp9zQ2gB1DXI" alt="Card image camp" className="img" />
                                <CardBody className="teambackground">
                                    <CardTitle className="teamtitle" tag="h4">Oziel Salinas</CardTitle>
                                    <CardText className="teamtext" tag="h5">Undergraduate Student</CardText>
                                    <CardText className="teamtext" tag="h5">University of Texas Rio Grande Valley</CardText>
                                </CardBody>
                                <CardFooter className="card_footer">
                                    <CardLink className="card_link" href="https://www.linkedin.com/in/oziel-salinas-8a5a5418b/" target="_blank">Linkedin</CardLink>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                }
            </Container>
            </>
        )
    }
}
export default TeamMembers;


//https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg