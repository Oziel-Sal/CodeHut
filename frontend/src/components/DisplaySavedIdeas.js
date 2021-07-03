import React from 'react'
import '../style/DisplaySavedIdeas.css'
import axios from 'axios'


class SavedIdeas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
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
        console.log(Data)
        return (
            <>
                <ul>
                    {
                        Data.map((data, index) => (
                            <li key={index} className="white">{data}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default SavedIdeas;
