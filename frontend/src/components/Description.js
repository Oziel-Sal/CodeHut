import React from 'react';
import "../style/Description.css"
import axios from 'axios'

class Description extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anime: []
        }
    }



    componentDidMount() {
        console.log('');
        axios.get('http://localhost:8080/randomAnime')
            .then(res => {
                console.log('inside axios');
                this.setState({
                    anime: res.data.anime,
                    character: res.data.character,
                    quote: res.data.quote

                })
            })
        console.log('after axios');

    }

    //API call to random anime



    render() {

        let Display = this.state.anime
        let Display2 = this.state.character
        let Display3 = this.state.quote
        return (
            <ul>
                <h1><li>{Display}</li></h1>
                <h1><li>{Display2}</li></h1>
                <h1><li>{Display3}</li></h1>
            </ul>
        )
    }
}

export default Description;