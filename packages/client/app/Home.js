import React, {PureComponent} from 'react';

import Header from './header/Header';
import Graph from './graph/Graph';

class Home extends PureComponent {
    render() {
        return (
            <div className="campaign">
                <Header />
                <Graph />
            </div>
        )
    }
}


export default Home