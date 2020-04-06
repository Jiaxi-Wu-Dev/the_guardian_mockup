import React, { Component } from 'react';
import Harvey from '/Users/dmac/Desktop/PerScholas/hw/the_guardian_mockup/the_guardian/src/assets/4000.jpg'

class Right extends Component {
    state = {}
    render() {
        return (<div>
            <img className="harvey" src={Harvey} alt="" width="250px" />
        </div>);
    }
}

export default Right;