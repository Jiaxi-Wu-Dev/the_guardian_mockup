import React, { Component } from 'react';
import axios from 'axios'
import Left from './Left';


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
                const newsContent = res.data
                console.log("news content", newsContent)

                this.setState({ data: newsContent })

            })
            .catch(error => {
                console.log('there is an eror', error)
            })

    }


    render() {
        return (
            <div className="content-container">
                <div>
                    <Left />
                </div>
                <div className="chumer-text-image">
                    <div>
                        <div>
                            <h4 className="chumer-text">Trump impeachment /</h4>
                            <h4 className="chumer-text">Schumer says</h4>
                            <h4 className="chumer-text">Senate trail without</h4>
                            <h4 className="chumer-text">witnesses would be</h4>
                            <h4 className="chumer-text">'cover up'</h4>
                        </div>
                        <div>
                            <h5> Senate minority leader criticized</h5>
                            <h5> the White House for its handling</h5>
                            <h5> of the impeachmnt inquiry.</h5>
                            <h5> saying 'trails have witnesses'</h5>
                        </div>

                    </div>
                    {/*  <img className="charles-schumer" src={Chumer} alt="whyy" width="450"></img> */}
                </div>
                {/*                 <ul>
                    {this.state.data.map((recipe, id) => <li key={id}> {recipe.title} </li>)}
                </ul> */}
            </div>
        )
    }
}

export default Content;