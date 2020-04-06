import React, { Component } from 'react';
import Harvey from '/Users/dmac/Desktop/PerScholas/hw/the_guardian_mockup/the_guardian/src/assets/4000.jpg'

class Right extends Component {
    state = {}
    render() {
        return (<div className="harvey-container">
            <img className="harvey" src={Harvey} alt="" width="180px" />
            <h5 className="harvey-container--list">Harvery Weinstein/</h5>
            <h5 className="harvey-container--list">Twenty-three women</h5>
            <h5 className="harvey-container--list">accuse disgraced</h5>
            <h5 className="harvey-container--list">mogul of 'trying to</h5>
            <h5 className="harvey-container--list">gaslight society'</h5>
            <hr class="horizontal-line" />
            <h5>Opinion Harvey Weinstein</h5>

        </div>);
    }
}

export default Right;