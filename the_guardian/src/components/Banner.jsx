import React, { Component } from 'react';

class Banner extends Component {
    state = {}
    render() {
        return (<div className="banner-container">
            <div className="container banner">
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
                        <img className="magnify-glass" src="https://image.flaticon.com/icons/png/512/49/49116.png" alt="" width="25px" height="25px" />
                        <li> Search </li>
                        <img src="https://breedlondon.com/wp-content/uploads/2018/12/the-guardian.png" width="280px" alt="" />
                        <li> US edition</li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <ul className="bottom-navbar">
                    <li className="bottom-list">News</li>
                    <li className="bottom-list">Opinion</li>
                    <li className="bottom-list">Sport</li>
                    <li className="bottom-list">Culture</li>
                    <li className="bottom-list">Lifestyle</li>
                    <li className="bottom-list">More</li>
                </ul>
            </div>
            <div>
                <ul className="white-navbar">
                    <li className="white-navbar__list"> US </li>
                    <li className="white-navbar__list"> Elections </li>
                    <li className="white-navbar__list"> 2020 </li>
                    <li className="white-navbar__list"> World </li>
                    <li className="white-navbar__list"> Environment </li>
                    <li className="white-navbar__list"> Soccer </li>
                    <li className="white-navbar__list"> US </li>
                    <li className="white-navbar__list"> Politics </li>
                    <li className="white-navbar__list"> Business </li>
                    <li className="white-navbar__list"> Tech </li>
                    <li className="white-navbar__list"> Science </li>
                </ul>
            </div>
        </div>);
    }
}

export default Banner;