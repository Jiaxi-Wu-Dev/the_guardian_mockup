import React, { Component } from 'react';

class Banner extends Component {
    state = {}
    render() {
        return (<div>
            <div className="banner">
                <div className="guardian-box">
                    <h1 className="guardian__heading--yellow"> Support The Guardian </h1>
                    <h3 className="guardian__heading-three--white"> Support our journalism with a year-end gift </h3>
                    <div>
                        <button className="guardian__button--yellow"> Contribute --> </button>
                        <button className="guardian__button--yellow"> Subscribe --> </button>
                    </div>
                </div>
                <div>
                    <ul className="top-nav">
                        <li> Search jobs </li>
                        <img className="login-picture" src="https://cdn3.iconfinder.com/data/icons/login-4/512/LOGIN-10-512.png" alt="" width="25px" height="25px" />
                        <li> Sign in </li>
                        <img className="magnify-glass" src="https://image.flaticon.com/icons/png/512/49/49116.png" alt="" width="25px" height="25px"/>
                        <li> Search </li>
                        <img src="https://breedlondon.com/wp-content/uploads/2018/12/the-guardian.png" width="280px" alt="" />
                        <li> US edition</li>
                    </ul>
                </div>
            </div>
        </div>);
    }
}

export default Banner;