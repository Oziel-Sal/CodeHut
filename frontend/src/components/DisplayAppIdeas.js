import axios from 'axios'
import '../style/DisplayAppIdeas.css'
import React from 'react';

class AppIdeas extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false
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
        axios.post('http://localhost:8080/insertName')
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

        return (
            <>
                <p className="wh" name="name">Author: {Display}</p>
                <p className="wh">Title: {Display2}</p>
                <p className="wh">Description: {Display3}</p>

                <div>
                    <form onSubmit={this.submitReview}>
                        <button>Save</button>
                    </form>

                    <button onClick={this.skip}>Skip</button>
                </div>
            </>
        )
    }
}
export default AppIdeas