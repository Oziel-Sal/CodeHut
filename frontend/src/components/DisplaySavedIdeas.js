import React from 'react'
import '../style/DisplaySavedIdeas.css'
import axios from 'axios'
import {
    Row, Col, Container
} from 'reactstrap';


class SavedIdeas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    //Everytime Page is refreshed it will get ALL Reddit Author, Title, Description
    componentDidMount() {
        axios.get('http://localhost:8080/getAll')
            .then(res => {
                var data = res.data

                this.setState({
                    data: data
                })
            })
    }
    render() {
        let Data = this.state.data
        return (
            <>
                <Container>
                    <Row>
                        <Col xs="4" sm="4" md="4" className="app_col">
                            <p className="white">Author</p>
                        </Col>
                        <Col xs="4" sm="4" md="4" className="app_col">
                            <p className="white">Title</p>
                        </Col>

                        <Col xs="4" sm="4" md="4" className="app_col">
                            <p className="white">Description</p>

                        </Col>

                        {
                            Data.map((data, index) => (
                                <>
                                    <Col xs="4" sm="4" md="4" key={index} className="app_col">
                                        <p className="white">{data.authors}</p>
                                    </Col>
                                    <Col xs="4" sm="4" md="4" key={index} className="app_col">
                                        <p className="white">{data.titles}</p>
                                    </Col>

                                    <Col xs="4" sm="4" md="4" key={index} className="app_col">
                                        <p className="white">{data.description}</p>

                                    </Col>
                                </>

                            ))
                        }
                    </Row>
                </Container>


            </>
        )
    }
}

export default SavedIdeas;
