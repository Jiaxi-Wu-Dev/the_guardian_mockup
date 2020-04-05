import React, { Component } from 'react';
import axios from 'axios'

class Content extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            data: []
        }
    }

    componentDidMount() {
        axios.get("https://content.guardianapis.com/search?api-key=d55a8921-dbf1-42e2-9824-7193574b6950")
            .then(res => {
                const newsContent = res.data.results;
                console.log("news content", newsContent)

                this.setState({ data: newsContent })

            })
            .catch(error => {
                console.log('there is an eror', error)
            })

    }


    render() {
        return (
            <div>
                <h1> weather API </h1>
                {/*                 <ul>
                    {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
                </ul> */}
            </div>
        )
    }
}

export default Content;