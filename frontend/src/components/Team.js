import React from 'react';
import { Card, CardTitle, Row, Col, CardImg, Container,CardBody} from 'reactstrap';
import '../style/Team.css'

class TeamMembers extends React.Component {
    render() {
        return (
            <Container className="teamcontainer">
                <h2 className="head_title">About Me</h2>
                <Row>
                    <Col sm="12" md="4">
                        <Card>
                            <CardImg bottom width="100%" src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg" alt="Card image camp" className="img" />
                            <CardBody className="teambackground">
                                <CardTitle className="teamtitle" tag="h5">Something</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default TeamMembers;