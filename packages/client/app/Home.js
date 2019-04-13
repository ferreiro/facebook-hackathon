import React, {PureComponent} from 'react';

import Header from './header/Header';
import Graph from './graph/Graph';
import Calendar from './calendar/Calendar';

class Home extends PureComponent {
    render() {
        return (
            <div className="campaign">
                <Header />
                <Graph />
                <Calendar />
            </div>
        )
    }
}


export default Home