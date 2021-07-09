import axios from 'axios'
import '../style/DisplayAppIdeas.css'
import React from 'react';
import {Row, Col} from 'reactstrap'

class AppIdeas extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false,
            showMessage: false
        }
        this.submitReview = this.submitReview.bind(this);
    }

    //API call for random Reddit Post
    componentDidMount() {
        axios.get('http://localhost:8080/randomPost')
            .then(res => {
                this.setState({
                    selftext: res.data.selftext,
                    author: res.data.author,
                    title: res.data.title
                })
            })
    }
    //Testing
    //DB API that insertNames
    //Testing with the author of the Reddit Post
    submitReview(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/insertPost')
        this.setState({ showMessage: true });

    }

    //Button that refreshes page
    skip(e) {
        e.preventDefault();
        window.location.reload();
    }


    //FIX FORMAT FOR APP IDEAS
    //ADD DATABASE FOR KEEPING TRACK OF SAVED, COMPLETED, AND IN PROGRESS ITEMS
    render() {

        let Display = this.state.author
        let Display2 = this.state.title
        let Display3 = this.state.selftext
        let message = this.state.showMessage

        return (
            <>
                <p className="wh" name="name">Author: {Display}</p>
                <p className="wh">Title: {Display2}</p>
                <p className="wh">Description: {Display3}</p>

                <div>
                    {message && <p className="gr">App Idea Saved... Click Next To Continue</p>}
                    <Row className="m-auto align-self-center">
                        <Col >
                            <form onSubmit={this.submitReview}>
                                <button>Save</button>
                            </form>
                        </Col>
                        <Col>
                            <button onClick={this.skip}>Next</button>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}
export default AppIdeas