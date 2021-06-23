import React from 'react';
import axios from 'axios'
class AppIdeas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
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

    
    //FIX FORMAT FOR APP IDEAS
    //ADD DATABASE FOR KEEPING TRACK OF SAVED, COMPLETED, AND IN PROGRESS ITEMS
    render() {

        let Display = this.state.author
        let Display2 = this.state.title
        let Display3 = this.state.selftext
        return (
            <ul>

                <p>Author: {Display}</p>
                <p>Title: {Display2}</p>
                <p>Description: {Display3}</p>
            </ul>
        )
    }
}
export default AppIdeas